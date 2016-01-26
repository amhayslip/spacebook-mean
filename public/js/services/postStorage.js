angular.module('spacebook')
  .factory('postStorage', ['$http', function ($http) {
    var STORAGE_ID = 'spacebook';

    // TODO: Migrate to using API instead of localStorage
    var store = {
      posts: [], 

      _getFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      _saveToLocalStorage: function (posts) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(posts));
      },

      get: function() {
        return $http.get('/posts').success(function(data) {
          angular.copy(data, store.posts);
        });
      },

      createPost: function (post) {
        return $http.post('/posts', post)
        .success(function(data){
          store.posts.push(data);
        });
      },

      // insertPost: function (post) {
      //   store.posts.push(post);

      //   store._saveToLocalStorage(store.posts);
      // },

      insertComment: function (comment, postId) {
        store.posts[postId].comments.push(comment);

        store._saveToLocalStorage(store.posts);
      },

      delete: function (post) {
        return $http.delete('/posts/' + post._id, post)
        .success(function(data) {
          debugger;
        });
      }

      // delete: function (post) {
      //   store.posts.splice(store.posts.indexOf(post), 1);

      //   store._saveToLocalStorage(store.posts);
      // }
    };

    return store;
  }]);
