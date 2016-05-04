angular.module('starter.controllers', [])

//.controller('DashCtrl', function($scope) {})

//.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  /*$scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})*/
.controller('cameraCtrl', function($scope, $cordovaCamera, Pics) {
  $scope.pics = Pics.all();
  var id = 0;
  var title;
  var test;
  var img;
  var photoObj;
  var newObj;

 $scope.takePhoto = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true
    };

        $cordovaCamera.getPicture(options).then(function (imageData) {

            // Set filepath in scope for image taken
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
            console.log(imageData);
            console.log($scope.imgURI);

            

            // create a new pic object and push onto pics array for use by entire application (see pics array in services.js)
            newObj = {id: null, title: null, description: null, img: null};
            $scope.pics.push(newObj);

            /* Since the id value set by this function increments by one, it should meaningfully represent the 
              index of each new object in the pics array - as such it is used to identify the pics object in 
              the array, and to set the id property of the given new pics object
              */
            $scope.pics[id].id = id; 

            // Update the new pics object with the new image URI
            $scope.pics[id].img = $scope.imgURI;

            // increment app gallery counter
            id++;
            


        }, function (err) {
            // An error occured. Show a message to the user
        });
    }
    
})
  
 // $scope.getPhoto = function() {
 //    Camera.getPicture().then(function(imageURI) {
 //      console.log(imageURI);
 //      $scope.lastPhoto = imageURI;
 //    }, function(err) {
 //      console.err(err);
 //    }, {
 //      quality: 75,
 //      targetWidth: 320,
 //      targetHeight: 320,
 //      saveToPhotoAlbum: true
 //    });
 //  };
/*.controller('galleryCtrl', function($scope, $cordovaCamera, $cordovaFile) {
   $scope.fileName = "";
  $scope.uploadPicture = function() {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 1024,
      targetHeight: 768,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };

    $cordovaCamera.getPicture(options).then(function(sourcePath) {
      var sourceDirectory = sourcePath.substring(0, sourcePath.lastIndexOf('/') + 1);
      var sourceFileName = sourcePath.substring(sourcePath.lastIndexOf('/') + 1, sourcePath.length);

      console.log("Copying from : " + sourceDirectory + sourceFileName);
      console.log("Copying to : " + cordova.file.dataDirectory + sourceFileName);
      $cordovaFile.copyFile(sourceDirectory, sourceFileName, cordova.file.dataDirectory, sourceFileName).then(function(success) {
         $scope.fileName = cordova.file.dataDirectory + sourceFileName;
      }, function(error) {
         console.dir(error);
      });

    }, function(err) {
         console.log(err);
    });
  }
})*/
.controller("galleryCtrl", function($scope, $cordovaCamera,$cordovaFile,$cordovaImagePicker, Pics){
  console.log('gallery ctrl run');

  // Add elements of Pics service to $scope
  $scope.pics = Pics.all();
  console.log($scope.pics[0].img);

  $scope.addPicDescription = function(pic, textArea)
  {
    pic.description = textArea;
  };

  
    
})




   
.controller('cloudCtrl', function($scope,$cordovaCamera,$cordovaFile,$cordovaImagePicker, Pics) {
  $scope.composeEmail = {};
  $scope.pics = Pics.all();
  //
  var recipient;

  document.addEventListener('deviceready', function () {
    
    $scope.sendEmail = function(){
    var bodyText = "<h2> Check this out!</h2>";
    if (null != $scope.pics){
      var pix =[];
      for ( var i = 0; i < $scope.pics.length; i++){
        console.log("cloudCtrl/sendEmail for loop: "+$scope.pics[i].img);
        pix.push("" + $scope.pics[i].img);
        pix[i] = pix[i].replace('data:image/jpeg;base64,', 'base64:icon'+i+".jpg//");

      }

      window.plugin.email.open({
        to: ["shades.mond@gmail.com"],
        attachments: pix,
        subject: "new pics",
        body: bodyText,
        isHtml: true,
      }, function(){
        console.log("email view dismissed");
      },
      this);

    }

  }

}, false);

  

})
         
.controller('loginCtrl', function($scope) {

})


/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})*/
;
