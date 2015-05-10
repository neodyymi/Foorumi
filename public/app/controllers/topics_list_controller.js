FoorumApp.controller('TopicsListController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
    $scope.newTopic = {name: "", description: ""};
    Api.getTopics().success(function (topics) {
        $scope.topics = topics;
    });
    $scope.addTopic = function () {
        if ($scope.newTopic.name !== "" && $scope.newTopic.description !== "") {
            Api.addTopic($scope.newTopic).success(function (topic) {
                $scope.topics.push(topic);
                $location.path('/topics/' + topic.id);
            });
        };
    };
});
