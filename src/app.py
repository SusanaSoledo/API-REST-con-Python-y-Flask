from flask import Flask ,jsonify ,request
from flask_cors import CORS      
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app=Flask(__name__)  
CORS(app)

# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:140877@localhost/miproyecto'
# URI de la BBDD                      driver de la BD  user:clave@URL/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False 
db= SQLAlchemy(app)
ma=Marshmallow(app)

# defino la tabla
class Exploit(db.Model):   # la clase Exploit hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    fecha=db.Column(db.DateTime)
    nombre=db.Column(db.String(100))
    tipo=db.Column(db.String(100))
    plataforma=db.Column(db.String(50))
    autor=db.Column(db.String(100))
        
    def __init__(self,fecha, nombre,tipo,plataforma,autor):   #crea el  constructor de la clase
        # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.fecha=fecha
        self.nombre=nombre
        self.tipo=tipo
        self.plataforma=plataforma
        self.autor=autor
 
 
 
with app.app_context():
    db.create_all()  # crea las tablas
#  ************************************************************
class ExploitSchema(ma.Schema):
    class Meta:
        fields=('id','fecha','nombre','tipo','plataforma','autor')
exploit_schema=ExploitSchema()            # para crear un producto
exploits_schema=ExploitSchema(many=True)  # multiples registros
 
# crea los endpoint o rutas (json)
@app.route('/exploits',methods=['GET'])
def get_Exploits():
    all_exploits=Exploit.query.all()     # query.all() lo hereda de db.Model
    result=exploits_schema.dump(all_exploits)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 
@app.route('/exploits/<id>',methods=['GET'])
def get_exploit(id):
    exploit=Exploit.query.get(id)
    return exploit_schema.jsonify(exploit)

@app.route('/exploits/<id>',methods=['DELETE'])
def delete_exploit(id):
    exploit=Exploit.query.get(id)
    db.session.delete(exploit)
    db.session.commit()
    return exploit_schema.jsonify(exploit)

@app.route('/exploits', methods=['POST']) # crea ruta o endpoint
def create_exploit():
    print(request.json)  # request.json contiene el json que envio el cliente
    fecha=request.json['fecha']
    nombre=request.json['nombre']
    tipo=request.json['tipo']
    plataforma=request.json['plataforma']
    autor=request.json['autor']
    new_exploit=Exploit(fecha,nombre,tipo,plataforma,autor)
    db.session.add(new_exploit)
    db.session.commit()
    return exploit_schema.jsonify(new_exploit)

@app.route('/exploits/<id>' ,methods=['PUT'])
def update_exploit(id):
    exploit=Exploit.query.get(id)
   
    fecha=request.json['fecha']
    nombre=request.json['nombre']
    tipo=request.json['tipo']
    plataforma=request.json['plataforma']
    autor=request.json['autor']
 
    exploit.fecha=fecha
    exploit.nombre=nombre
    exploit.tipo=tipo
    exploit.plataforma=plataforma
    exploit.autor=autor
    db.session.commit()
    return exploit_schema.jsonify(exploit)


# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)  