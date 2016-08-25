angular.module('starter.services', [])

.factory('TempReads', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tempArray = [{
    date: '23/08/2016',
    value: 26
  }, {
    date: '24/08/2016',
    value: 27
  }, {
    date: '25/08/2016',
    value: 20
  }, {
    date: '26/08/2016',
    value: 23
  }, {
    date: '27/08/2016',
    value: 25
  }];

  return {
    all: function() {
      return tempArray;
    },
    remove: function(read) {
      tempArray.splice(tempArray.indexOf(tempArray), 1);
    },
    get: function(readDate) {
      for (var i = 0; i < tempArray.length; i++) {
        if (tempArray[i].id === parseInt(readDate)) {
          return tempArray[i];
        }
      }
      return null;
    }
  };
});
