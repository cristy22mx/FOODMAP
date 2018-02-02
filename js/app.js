// var restaurantes = [];


function loadPage(){
  paintWall(data);
  // $("#buscar").keyup(filterRestaurant);

}

function paintWall (restaurant) {

  restaurant.forEach(function(food) {

    // crear elementos con DOM
    var $div = $("<div />", {
      "id": "paintRestaurant"
    });
    var $div1 = $("<div />");
    var $div2 = $("<div />");
    var $div3 = $("<div />");
    var $imagen=$("<img />");
    var $name = $("<h3 />");
    var $tipo = $("<p />");
    var $button=$("<button />");


    //  atributos y eventos a los elementos creados en el DOM
    $imagen.attr('src',food.imagen);
    $button.addClass("btn btn-info center-block");
    $div2.addClass("thumbnail");
    $div3.addClass("caption");
    $name.addClass("text-center");
    $tipo.addClass("text-center");


    // Asignando valores
    $name.text(food.restaurante);
    $tipo.text(food.tipo);
    $imagen.html($imagen);
    $button.text("Ver más");



    $div.append($div1);
    $div1.append($div2);
    $div2.append($imagen);
    $div2.append($div3);
    $div3.append($name);
    $div3.append($tipo);
    $div3.append($button);

    
    // agregamos lo que creamos con el Dom a un elemento existente del html

    $("#paintRestaurant").prepend($div);  
  });     
};

// function filterRestaurant(){ 

//   var buscarRestaurante = $("buscar").val().toLowerCase();
  
//   if($("#buscar").val().trim().length > 0) {
//     var filterRestaurantes = restaurantes.filter(function(restaurant){
           
//            return food.tipo.toLowerCase().indexOf(buscarRestaurante) >= 0;
//          });
//     $("#paintRestaurant").empty();
//     filterRestaurantes.forEach(function(restaurant){
//       paintRestauranteInHtml(contact);
//     });
//   } else {
//     $("#filterRestaurantes").empty();
//     contacts.forEach(function(restaurant){
//       paintRestauranteInHtml(restaurant);
//     });
//   }



  $(document).ready(loadPage);






//<!-- animated slideInUp retraso1 -->"
// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 18
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
      };
