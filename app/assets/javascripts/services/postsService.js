app.factory("PostsService", ["$http", function($http){
  var allPosts = [];

  $http.get("/posts").then(function(success){
    allPosts.push.apply(allPosts, success.data);
  });

  function posts(){
    return allPosts;
  }

  return {
    posts : posts
  }
}])
