'use strict';

function double_to_one(collection) {

  var oneDimensionalArray = [];

  collection.forEach(function (item) {
    if (Array.isArray(item)) {
      separateItemsToArray(item, oneDimensionalArray);
    }
    else {
      oneDimensionalArray.push(item);
    }
  });

  return oneDimensionalArray;
}

function separateItemsToArray(item, oneDimensionalArray) {

  item.forEach(function (element) {
    oneDimensionalArray.push(element);
  });

  return oneDimensionalArray;
}

module.exports = double_to_one;
