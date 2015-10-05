describe('Controller: IndexCtrl', function(){

  beforeEach(module('bcrud'));

  var ctrl, scope, mockService;

  beforeEach(module(function($provide){
    mockService = {
      posts: function(){
        return [{"id" : 1,
                 "title" : "A",
                 "body" : "LoremIpsum",
                 "created_at" : "Mon, 05 Oct 2015 01:50:33 UTC +00:00",
                 "updated_at" : "Mon, 05 Oct 2015 01:50:33 UTC +00:00"}]
      }
    }
    $provide.value("PostsService", mockService)
  }))

  beforeEach(inject(function($controller){
    scope = {}
    ctrl = $controller('IndexCtrl', { $scope: scope });
  }))

  describe('$scope.posts', function(){

    it('should get the posts with the body', function(){
      expect(scope.posts[0].body).toEqual("LoremIpsum");
    })

  })

})

