<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Aerolineas</title>
    <link rel="stylesheet" type="text/css" href="Index.css"> 
    <style>
      /* Estilos para el navbar y el footer */
      body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
      }

      header {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px 0;
      }

      nav {
        background-color: #444;
        color: #fff;
        padding: 10px 0;
      }

      nav ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: center;
      }

      nav ul li {
        display: inline;
        margin: 0 10px;
      }

      nav ul li a {
        color: #fff;
        text-decoration: none;
      }

      footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px 0;
        margin-top: auto;
      }
    </style>
  </head>

  <body>
    <header>
      <h1>EL FUTURO DE LA IA</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <button id="changeColorBtn">Cambiar Color de Fondo</button>
    </nav>

    <main>
      <article>
        <h2>AEROLÍNEAS</h2>
        
     
       

        <p>
          Es una empresa que se dedica al transporte de pasajeros o carga —y, 
          en algunos casos, animales— por medio de vehículos aéreos, como aviones 
          o helicópteros.

          El mundo de las líneas aéreas es complejo. Existen compañías que se dedican
          a transportar pasajeros y carga de forma regular, mientras que también hay
          otras empresas que transportan a sus clientes o grupos de clientes de la
          forma puntual acordada entre ellos. Estas últimas compañías son llamadas 
        </p>

        <img src="Aerolinea.jfif" alt="Inteligencia Artificial">

      </article>

      <aside>
        <h3>LAS PRIMERAS AEROLÍNEAS</h3>

        <p>
          DELAG, Deutsche Luftschiffahrts-Aktiengesellschaft I fue la primera aerolínea
          del mundo.2​ Fue fundado el 16 de noviembre de 1909, con ayuda del gobierno, y
          operó aeronaves fabricadas por The Zeppelin Corporation. Su sede estaba en Frankfurt.
          La primera línea aérea programada de ala fija se inició el 1 de enero de 1914, desde
          St. Petersburg, Florida, a Tampa, Florida, operado por la Línea de aerodeslizadores
          St. Petersburg–Tampa.3​ Las cuatro aerolíneas no dirigibles más antiguas que aún
          existen son la KLM de los Países Bajos (1919),4​ Avianca de Colombia (1919),5​ Qantas
          de Australia (1921),6​ y Czech Airlines de la República Checa (1923).
        </p>

      
        <img src="Europa.jpg" alt="El éxito de la Inteligencia Artificial">
        
        <h3>EUROPA</h3>
        <p>
          La primera línea aérea de ala fija en Europa fue Aircraft Transport and Travel, formada
          por George Holt Thomas en 1916; a través de una serie de adquisiciones y fusiones, esta
          empresa es un antepasado de la British Airways moderna. Usando una flota de antiguos
          biplanos militares Airco DH.4A que habían sido modificados para transportar dos pasajeros
          en el fuselaje, operó vuelos de socorro entre Folkestone y Gante. El 15 de julio de 1919,
          la compañía realizó un vuelo de prueba a través del Canal de la Mancha, a pesar de la falta
          de apoyo del gobierno británico. Pilotado por el teniente H Shaw en un Airco DH.9 entre RAF
          Hendon y Aeropuerto de París - Le Bourget, el vuelo duró 2 horas y 30 minutos a £ 21 por
          pasajero.
        </p>

        <h3>EXPANSIÓN</h3>

        <p>
          En 1926, Alan Cobham examinó una ruta de vuelo desde el Reino Unido a Ciudad del Cabo,
          Sudáfrica, seguido de otro vuelo de prueba a Melbourne, Australia. Otras rutas a la India
          británica y el Extremo Oriente también fueron trazadas y demostradas en este momento.
          Los servicios regulares a El Cairo y Basora comenzaron en 1927 y se extendieron a Karachi
          en 1929. El servicio Londres-Australia se inauguró en 1932 con aviones de pasajeros Handley
          Page HP 42. Se abrieron más servicios a los pasajeros de Calcuta, Rangún, Singapur, Brisbane
          y Hong Kong que partieron de Londres el 14 de marzo de 1936 tras el establecimiento de un
          sucursal de Penang a Hong Kong.
        </p>
        <img src="Expansion.jpg" alt="El éxito de la Inteligencia Artificial">
        <p>
          A fines de la década de 1930, Aeroflot se había convertido en la aerolínea más grande del
          mundo, empleaba a más de 4000 pilotos y 60 000 en personal de servicio y operaba alrededor
          de 3000 aviones (de los cuales el 75% se consideraba obsoleto según sus propios estándares).
          
          Durante la era soviética, Aeroflot era sinónimo de aviación civil rusa, ya que era la única
          compañía aérea. Se convirtió en la primera aerolínea del mundo en operar servicios de jet
          regulares sostenidos el 15 de septiembre de 1956 con el Tupolev Tu-104.29​
        </p>
      </aside>
    </main>

    <footer>
      <p>© Copyright. Diego.</p>
    </footer>

    <script>
      // Activar la página web
      window.onload = function() {
        console.log("La página ha sido cargada completamente.");
      };

      // Función para cambiar el color de fondo
      document.getElementById("changeColorBtn").addEventListener("click", function() {
        document.body.style.backgroundColor = getRandomColor();
      });

      // Función auxiliar para generar un color aleatorio
      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    </script>
  </body>
</html>
