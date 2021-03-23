function initMap() {
	const directionsService = new google.maps.DirectionsService();
  	const directionsRenderer = new google.maps.DirectionsRenderer();
	var Nha = {lat:10.852709465726887, lng: 106.79174707826692}
	var Truong = {lat:10.84585406, lng: 106.7945480}
  const map = new google.maps.Map(document.getElementById("map"), {
    center: Nha,
    zoom: 15,
    scrollwheel:true
  });


  directionsRenderer.setMap(map);

  const calRulerBy = function () {
    calRuler(directionsService, directionsRenderer);
  };
  document.getElementById("BatDau").addEventListener("change", calRulerBy);
  document.getElementById("KetThuc").addEventListener("change", calRulerBy);

  
  var NhaP = new google.maps.InfoWindow({
    content:
      '<div id="Thongtin"><b> Tran Duy Phuc </b> - 22yrs <br> ID: 5951071077 <br> Phone : 0969849819 <br> Mail: tranduyphuc2301@gmail.com </div>',
    position: Nha,
  });

  
  var TruongP = new google.maps.InfoWindow({
    content:
      '<div id="Thongtin"><b> UTC2 </b> <br> 450-451 Le Van Viet, Tang Nhon Phu A Ward, District 9, HCMC </div>',
    position: Truong,
  });


  var marker = new google.maps.Marker({
  	position: Nha,
  	title: "Nha Phuc",
  	map: map,
  	animation: google.maps.Animation.BOUNCE,
  	icon:"./img/duyphuc.jpg",
  	});
  var marker1 = new google.maps.Marker({
    position: Truong,
    title: "UTC2",
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: "./img/utc2.png",
    });

  
  google.maps.event.addListener(marker, "click", function () {
    NhaP.open(map, marker);
  });
  google.maps.event.addListener(marker1, "click", function () {
    TruongP.open(map, marker1);
  });
}

google.maps.event.addDomListener(window, "load", initMap);
function calRuler(directionsService, directionsRenderer) {
  directionsService.route(
    {
      origin: {
        query: document.getElementById("BatDau").value,
      },
      destination: {
        query: document.getElementById("KetThuc").value,
      },
      travelMode:'DRIVING',
    },
    (response, status) => {
      if (status == "OK") 
      {
      	directionsRenderer.setDirections(response)
        directionsRenderer = new google.maps.DirectionsRenderer(
        {
        	directions: results,
        	map: map,
        });
        console.log(results);
      }
    }
  );
}
