function Products($scope, $http) {
    $http.get('http://127.0.0.1:8080/api/products').success(function (data) {
        if (data) {
            data.items.forEach(function (item) {
                item.rating = 3;  //Hard coding the rating in this model.  Will fetch rating from service later
            });
            $scope.items = data.items;
            $scope.status = data.status;
        }
        else {
            $scope.status = "Something bad happened.";
        }
    });

}
function HeartBeat($scope, $http) {
    $http.get('http://127.0.0.1:8080/api').success(function (data) {
        if (data) {
            $scope.status = data.message;
        }
        else {
            $scope.status = "Something bad happened.";
        }
    });

}