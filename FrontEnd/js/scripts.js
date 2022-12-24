
const cabecera = `
    <header id="header">
    <section class="top-nav">
    <div>
      <img class="logo" src="images/Blue Navy Modern Mobo Tech Logo.gif" alt="logo"></img>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
    <ul class="menu">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="nosotros.html">Nosotros</a></li>
      <li><a href="contacto.html">Contacto</a></li>
      <li><a href="Threat.html">Mapa de amenazas</a></li>
      <li><a href="exploits.html">Base de datos Exploits</a></li>

      <li class='dropdown'>
        <a class="dropbtn">Saber +</a>
        <ul class="dropdown-content">
          <li><a href="index.html#section_1">¿Qué es la ciberseguridad?</a></li>
          <li><a href="index.html#section_2">Dominios de ciberseguridad</a></li>
          <li><a href="index.html#section_3">Mitos de la ciberseguridad</a></li>
          <li><a href="index.html#section_4">Amenazas cibernéticas comunes</a></li>
          <li><a href="Threat.html" target="_blank">Mapa de amenazas</a></li>
          <li><a href="index.html#section_5">Tecnologías claves</a></li>
          <li><a href="index.html#section_6">Estrategias de seguridad</a></li>
          <li><a href="index.html#section_7">Soluciones</a></li>
        </ul>
      </li>
    </ul>
  </section>
  </header>
  `

  document.getElementById('header').innerHTML = cabecera;

  const footer = `
  
    <footer class="footer-distributed">

			<div class="footer-left">

            

                  <p class="footer-links">
                
                <a href="index.html">Inicio</a>
					·
					<a href="nosotros.html">Nosotros</a>
					·
					<a href="contacto.html">Contacto</a>
					·
					<a href="Threat.html">Mapa de amenazas</a>
          ·
          <a href="exploits.html">Base de datos Exploits</a>
				</p>

				<p class="footer-company-name">Codo a Codo 2022</p>

				<div class="footer-icons">

					<a href="https://www.facebook.com"><i><img src="https://img.icons8.com/small/32/000000/facebook-new.png"/></i></a>
					<a href="https://www.twitter.com"><i><img src="https://img.icons8.com/small/32/000000/twitter.png"/></i></a>
					<a href="https://www.instagram.com"><i><img src="https://img.icons8.com/small/32/000000/instagram-new.png"/></i></a>
					<a href="https://www.youtube.com/"><i><img src="https://img.icons8.com/small/32/000000/youtube-play.png"/></i></a>

				</div>

			</div>

		</footer>
        `

  document.getElementById('footer').innerHTML = footer;

