angular.module('spacebook', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    var homeRouteConfig = {
      controller: 'PostsCtrl',
      templateUrl: 'index.html',
      resolve: {
        store: function (postStorage) {
          postStorage.get();
          return postStorage;
        }
      }
    };

    var postRouteConfig = {
      controller: 'CommentsCtrl',
      templateUrl: 'comments.html',
      resolve: {
        store: function (postStorage) {
          postStorage.get();
          return postStorage;
        }
      }
    };

    $routeProvider
      .when('/', homeRouteConfig)
      .when('/posts/:id', postRouteConfig)
      .otherwise({
        redirectTo: '/'
      });
  });
