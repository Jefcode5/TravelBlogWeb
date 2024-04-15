function getDistance() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLatitude = position.coords.latitude;
            var userLongitude = position.coords.longitude;

            var destinationLatitude = -6.2000; // Contoh latitude tempat tujuan
            var destinationLongitude = 106.8167; // Contoh longitude tempat tujuan

            var origin = userLatitude + ',' + userLongitude;
            var destination = destinationLatitude + ',' + destinationLongitude;

            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins: [origin],
                destinations: [destination],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            }, function (response, status) {
                if (status == 'OK') {
                    var distance = response.rows[0].elements[0].distance.text;
                    var duration = response.rows[0].elements[0].duration.text;

                    document.getElementById('distance').innerHTML = 'Jarak: ' + distance;
                    document.getElementById('duration').innerHTML = 'Durasi: ' + duration;
                } else {
                    alert('Error: ' + status);
                }
            });
        });
    } else {
        alert('Geolocation tidak didukung pada browser ini.');
    }
}