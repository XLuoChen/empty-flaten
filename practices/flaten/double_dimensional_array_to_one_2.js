'use strict';

function double_to_one(collection) {

  var oneDimensionalArray = [];

  collection.forEach(function (item) {
    if (Array.isArray(item)) {
      separateItemsToArray(item, oneDimensionalArray);
    }
    else {
      pushElementToArray(item, oneDimensionalArray);
    }
  });

  return oneDimensionalArray;
}

function separateItemsToArray(item, oneDimensionalArray) {

  item.forEach(function (element) {
    pushElementToArray(element, oneDimensionalArray);
  });

  return oneDimensionalArray;

}

function pushElementToArray(element, oneDimensionalArray) {
  if (!isExist(element, oneDimensionalArray)) {
    oneDimensionalArray.push(element);
  }

  return oneDimensionalArray;
}

function isExist(element, oneDimensionalArray) {
  for (var i = 0; i < oneDimensionalArray.length; i++) {
    if (element === oneDimensionalArray[i]) {
      return true;
    }
  }
}

module.exports = double_to_one;
