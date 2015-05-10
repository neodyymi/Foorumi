FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    $scope.topic = "";
    $scope.newMessage = {title: "", content: ""};
    // Toteuta kontrolleri tähän
    Api.getTopic($routeParams.id).success(function (topic) {
        $scope.topic = topic;
    })
    $scope.addMessage = function () {
        if ($scope.newMessage.topic !== "" && $scope.newMessage.content !== "") {
            Api.addMessage($scope.newMessage, $routeParams.id).success(function (message) {
                $scope.topic.Messages.push(message);
                $location.path('/messages/' + message.id);
            });
        }
        ;
    };
});
