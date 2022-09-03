app.controller("order__management-all-ctrl", function($scope, $http, $location) {
    alert("Hiển thị tất cả đơn hàng");
})

app.controller("order__management-loading-ctrl", function($scope, $http, $location) {
    alert("Hiển thị tất cả đơn hàng đang chờ");
})

app.controller("order__management-success-ctrl", function($scope, $http, $location) {
    alert("Hiển thị tất cả đơn hàng đã giao");
})