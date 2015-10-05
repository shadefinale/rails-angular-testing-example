app.controller("IndexCtrl", ["$scope", "PostsService",
  function($scope, PostsService){
    $scope.posts = PostsService.posts();
  }
])
