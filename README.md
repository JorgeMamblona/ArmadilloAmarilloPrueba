Jorge Mamblona Gómez  

En las dos horas estimadas de la prueba, me ha resultado imposible realizar todo lo solicitado en el documento.

He podido realizar:

Usando Vite + React para el front.
NojeJS, MongoDB y JWT para el back

front:
- Una APP con login y sign up de usuarios (sin estilos)

back:
-Modelo para la BBDD de usuarios.
-Creación de usurarios y validación de login.
-Guardado de usuarios en BBDD.


PD: muchas de las cosas solicitadas las realizé en el trabajo final del bootcamp:
https://duckyproject-f283064ea871.herokuapp.com/

github:
https://github.com/JorgeMamblona/ProjectJorchel_client
https://github.com/JorgeMamblona/ProjectJorchel_server

-----------------------------------------------------
Actualizo despues de continuar la prueba 
-----------------------------------------------------

-Se ha cambiado el back para que se manipule con controllers.

-Se ha aislado la APIKEY en .env (por seguridad) ->  la adjunto en el correo.

-Se han creado los endpoints del ejercicio para la API de TheMovieDB.


PENDIENTE:

-Establecer BirthDate como tipo Date en vez de String.

-Hacer la app responsive.

-Arreglar la rediceccion del log in, ya que te redirecciona a log in aunque ya estés logueado.

-Configurar las imagene con lazy load.

-Crear y gstionar el botón de sincronización.

-Control de errores para los formularios.

-Se ha utilizado bootstrap para agilizar una interfaz básica


RESPUESTAS TEÓRICAS
1º
En el front craría un dos botones para pasar de página y su valor sería mandado al back.
En el back establecería una variable page y la implementearía dentro del url de la petición

de:
    const url = `${baseUrl}/popular?language=en-US&page=1`
a:
    const url = `${baseUrl}/popular?language=en-US&${page}`

y recibiría por params su valor desde el front (suponiendo que usasemos la misma paginación que la api).


2º
Segmentaria el array original en partes manejables, después iteraría las partes aplicando un filter sobre vote_average > 6, que se irían acoplando en un array final.
