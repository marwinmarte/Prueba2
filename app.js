  // Variables Globales
  var tiempo = {}; 
  var clock = new Date("2021-12-08 11:00:00 PM"); // Obtener la fecha y almacenar en clock
  var intervalo = window.setInterval(mostrar_hora, 1);
  // Frecuencia de actualización
  var i = 0; // Esta variable me ayudará a definir los estados de intervalo
  
  function mostrar_hora(){
    var now = new Date();  
    // Inserta la hora almacenada en clock en el span con id hora
    tiempo.horas = document.getElementById('hora');
    tiempo.horas.innerHTML = clock.getHours() - now.getHours(); 
    
    // Inserta los minutos almacenados en clock en el span con id minuto
    tiempo.minuto = document.getElementById('minuto');
    tiempo.minuto.innerHTML = clock.getMinutes()+60 - now.getMinutes();
    
    // Inserta los segundos almacenados en clock en el span con id segundo
    tiempo.segundos = document.getElementById('segundo')
    tiempo.segundos.innerHTML = "0" + clock.getSeconds()+60 - now.getSeconds();
    
  
  }