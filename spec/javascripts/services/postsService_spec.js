describe("PostsService", function(){
  beforeEach(module('bcrud'))

  var ctrl, mockRailsApi;

  beforeEach(inject(function($controller, $httpBackend){
    mockRailsApi = $httpBackend;
    mockRailsApi.expectGET('/posts').respond(200,[
      {"id" : 1,
       "title" : "A",
       "body" : "LoremIpsum",
       "created_at" : "Mon, 05 Oct 2015 01:50:33 UTC +00:00",
       "updated_at" : "Mon, 05 Oct 2015 01:50:33 UTC +00:00"},
      {"id" : 2,
       "title" : "B",
       "body" : "LoremIpsumYeah",
       "created_at" : "Mon, 05 Oct 2015 01:50:33 UTC +00:00",
       "updated_at" : "Mon, 05 Oct 2015 01:50:33 UTC +00:00"
      }
    ])
  }))

  it('should give us 2 posts', inject(function(PostsService){
    mockRailsApi.flush();
    expect(PostsService.posts().length).toEqual(2);
  }))
})
