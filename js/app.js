// var restaurantes = [];


function loadPage(){
  paintWall(data);
  paintmodal(data);
  $("#buscar").keyup(filterRestaurant);
  $("#myModal").clic(paintmodal);
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
    
    $("#btn btn-info center-block").trigger("click");

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

    $("#paintRestaurant").append($div);  
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

// function paintmodal (modales) {

//   restaurant.forEach(function(vista) {

//     // crear elementos con DOM
//     var $div = $("<div />", {
//       "id": "myModal"
//     });
//     var $modalSm = $("<div />");
//     var $modalContent = $("<div />");
//     var $modalHeader = $("<div />");
//     var $button=$("<button />");
//     var $name = $("<h4 />");
//     var $modalBody = $("<div />");
//     var $mapa = $("img />")
//     var $tipo =$("<p />");
//     var $modalFooter = $("<h3 />");
//     var $button=$("<button />");


//     //  atributos y eventos a los elementos creados en el DOM
//     var $div.addClass("modal fade");
//     var $modalSm.addClass("modal-dialog modal-sm");
//     var $modalContent.addClass("modal-content");
//     var $modalHeader.addClass("modal-header");
//     var $button.addClass("close");
//     var $name.addClass("modal-title");
//     var $modalBody.addClass("modal-body");
//     var $imagen.attr('src'vista.mapa);
//     var $imagen.addClass("img-responsive");
//     var $modalFooter.addClass("modal-footer");
//     var $button.addClass("btn btn-default");

//     // Asignando valores
//     $name.text(vista.restaurante);
//     $tipo.text(vista.tipo);
//     $imagen.html($mapa);
//     $button.text("x");



//     $div.append($modalSm);
//     $modalSm.append($modalContent);
//     $modalContent.append($modalHeader);
//     $modalHeader.append($button);
//     $modalHeader.append($h4);
//     $modalBody.append($p);
//     $modalBody.append($imagen);
//     $modalFooter.append($button);

    // agregamos lo que creamos con el Dom a un elemento existente del html

//     $("#paintModal")($button);  
//   });     
// };



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











































// function buscar(){
//   $("#buscar").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#paintRestaurant *").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// };
