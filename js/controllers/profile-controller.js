/**
 * Created by Sunny on 16/6/26.
 */
angular.module('app.profile-controller', [])
  .controller('loginCtrl', function ($scope, $rootScope, $http, $ionicPopup) {
    $scope.switchReg = function () {
      window.location.href = "#/main/account-register";
    };

    $scope.userLogin = function () {
      $http.get("http://" + $rootScope.hostUrl + ":8080/CSServer/UserLogin", {
          params: {
            userName: $scope.username,
            userPassword: $scope.password
          }
        })
        .success(function (ret) {
          if (ret != null && ret != "") {
            $rootScope.user = ret[0];
            window.location.href = "#/main/profile";
          } else {
            $scope.showFailureAlert();
          }
        })
        .error(function () {
          alert('http error');
        });
    };

    $scope.showFailureAlert = function () {
      var alertPopup = $ionicPopup.alert({
        title: '系统提示',
        template: '登录失败，账号密码不匹配'
      });
    }

  })
  .controller('registerCtrl', function ($scope, $rootScope, $http) {
    $scope.switchLog = function () {
      window.location.href = "#/main/account-login";
    }

    $scope.userRegister = function () {
      $http.get("http://" + $rootScope.hostUrl + ":8080/CSServer/UserRegister", {
          params: {
            userName: $scope.username,
            userPassword: $scope.password
          }
        })
        .success(function (ret) {
          if (ret != null && ret != "") {
            $rootScope.user = ret[0];
            window.location.href = "#/main/profile";
          } else {
            $scope.showFailureAlert();
          }
        })
        .error(function () {
          alert('http error');
        });
    };

    $scope.showFailureAlert = function () {
      var alertPopup = $ionicPopup.alert({
        title: '系统提示',
        template: '注册失败,用户名已被占用'
      });
    }
  })
  .controller('profileCtrl', function ($ionicActionSheet, $scope, $http, $rootScope, $ionicPopup) {

    $scope.getCollectionList = function(){
      $http.get("http://"+$rootScope.hostUrl+":8080/CSServer/GetSceneryListByOp", {params:{userId: $rootScope.user.userId, type:0}
      }).success(function(ret){
        if (ret != null && ret != "")
          $scope.collectionList = ret;
        else
          $scope.collectionList = null;
      });
    };


   $scope.getTrackList = function(){
     $http.get("http://"+$rootScope.hostUrl+":8080/CSServer/GetSceneryListByOp", {params:{userId: $rootScope.user.userId, type:1}
     }).success(function(ret){
       if (ret != null && ret != "")
         $scope.trackList = ret;
       else
         $scope.trackList = null;
     });
   };

    $scope.getWishList = function(){
      $http.get("http://"+$rootScope.hostUrl+":8080/CSServer/GetSceneryListByOp", {params:{userId: $rootScope.user.userId, type:2}
      }).success(function(ret){
        if (ret != null && ret != "")
          $scope.wishList = ret;
        else
          $scope.wishList = null;
      });
    }


    $scope.showAlert = function () {
      var alertPopup = $ionicPopup.alert({
        title: '系统提示',
        template: '删除成功'
      });
    }

    $scope.getCollectionList();
    $scope.getTrackList();
    $scope.getWishList();

    $scope.deleteOperation = function(id, type){

      $http.get("http://"+$rootScope.hostUrl+":8080/CSServer/DeleteOperation", {params:{userId: $rootScope.user.userId, type:type, sceneryId: id}
      }).success(function(){
        $scope.showAlert();
        switch (type) {
          case 0:
            $scope.getCollectionList();
            break;
          case 1:
            $scope.getTrackList();
            break;
          default:
            $scope.getWishList();
        }

      });
    };

    $scope.show = function () {

      $ionicActionSheet.show({
        buttons: [
          {text: '选择头像'},
          {text: '上传头像'}
        ],
        cancelText: 'Cancel',
        cancel: function () {
          window.location.href = "#/main/profile";
        },
        buttonClicked: function (index) {
          switch (index) {
            case 0:
              $('#picture').click();
              return false;
            case 1:
              $scope.uploadIcon();
              //alert($('#picture').val());
              return true;
          }

        }
      });
    };

    $scope.uploadIcon = function () {

      var s = "http://localhost:8080/CSServer/UserImgUpload";
      var formData = new FormData($('#iconForm')[0]);
      $.ajax({
        url: s,  //Server script to process data
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function () {
          $http.get("http://"+$rootScope.hostUrl+":8080/CSServer/GetUserInfoById", {params:{userId: $rootScope.user.userId}
          }).success(function(ret) {
            if (ret != null && ret != "")
              $rootScope.user = ret[0];
          })
        }
      });
    }

    $scope.exitAccount = function(){
      window.location.href = "#/main/account-login";
      $rootScope.user = undefined;
    }
  })
;
