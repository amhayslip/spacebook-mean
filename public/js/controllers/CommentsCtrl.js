angular.module('spacebook')
  .controller('CommentsCtrl', [
    '$scope', 
    '$routeParams',
    'postStorage',
    function($scope, $routeParams, postStorage){
      $scope.post = postStorage.posts[$routeParams.id];

      $scope.addComment = function() {
        var newComment = {
          text: $scope.text,
          user: $scope.user
        };

        postStorage.insertComment(newComment, $routeParams.id);

        $scope.text = '';
        $scope.user = '';
      }
  }])