document.getElementById("myBtn").addEventListener("click", getdata);

function getdata() {

  fetch("https://randomuser.me/api/?results=20")

    .then((res) => res.json())

    .then((data) => {
      let user = data.results;

      let output = "";

      user.forEach(function (lists) {
        output += `
                
                <div class="row gy-3">
                <div class="col-auto">
                    <div class="card" style="width: 18rem;">
                        <img src="${lists.picture.medium}" class="card-img-top">
                        <div class="card-body">
                          <h5 class="card-title"><strong>${lists.name.first} ${lists.name.last}</strong></p>
                          <ul class="list-group">
                          <li class="list-group-item"><p>Dirección: <br>${lists.location.street.name} ${lists.location.street.number}, ${lists.location.city}, ${lists.location.state}, ${lists.location.country}</p></li>
                            <li class="list-group-item"><p>Email: <br>${lists.email}</p></li>
                            <li class="list-group-item"><p>Tel.: <br>${lists.cell}</p></li>
                            <li class="list-group-item"><p>Usuario: <br>${lists.login.username}</p></li>
                            <li class="list-group-item"><p>Contarseña: <br>${lists.login.password}</p></li>
                          </ul>    
                        </div>
                    </div>
                </div>
                </div>
             `;
      });

      document.getElementById("output").innerHTML = output;
    });
}
