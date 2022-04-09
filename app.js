// 1.) Implement Binary Search

function binarySearch(arr, num) {
  var left = 0;
  var right = arr.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
var arr = [1, 2, 4, 6, 8, 10, 20, 23];
var num = 23;
console.log(binarySearch(arr, num));

// **********///

// 2.)Implement Merge Sort

function merge(arr1, arr2) {
  var res = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  if (arr1[i]) {
    var rem = arr1.slice(i);
    for (let i = 0; i < rem.length; i++) {
      res.push(rem[i]);
    }
  }
  if (arr2[j]) {
    var rem = arr2.slice(j);
    for (let i = 0; i < rem.length; i++) {
      res.push(rem[i]);
    }
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
var arr = [2, 7, 9, 2, 1, 5, 8, 3];
console.log(mergeSort(arr));

// **********////

// 3.)Implement Quick Sort

function quickSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

var arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100 + 1));
}

console.log(` This is Unsorted array ${arr}`);
console.log(`This is Sorted Array ${quickSort(arr)}`);

// *********//

// 4.) Implement Insertion Sort
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curent = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > curent) {
      arr[prev + 1] = arr[prev];
      prev--;
      arr[prev + 1] = curent;
    }
  }
  return arr;
}

var arr = [2, 6, 9, 3, 10, 1, 7, 5, 6];

console.log(insertSort(arr));

// *********//

// 5.) Write a program to sort list of strings (similar to that of dictionary)

var string = "hello";
var stringArray = string.split(" ");
stringArray.sort();
console.log(string);
console.log(stringArray);
console.log(stringArray.join(" "));
