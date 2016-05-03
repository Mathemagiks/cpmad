angular.module('starter.services', [])


.factory('Pics', function() {
  // Might use a resource here that returns a JSON array

  var pics = [
    {
      id: 0, 
      title: 'test',
      description: 'This is a test card',
      img: ''
    }
  ];

  return {
    all: function() {
      return pics;
    },
    remove: function(pic) {
      pics.splice(pics.indexOf(pic), 1);
    },
    get: function(picId) {
      for (var i = 0; i < pics.length; i++) {
        if (pics[i].id === parseInt(picId)) {
          return pics[i];
        }
      }
      return null;
    }
  };
});
;

