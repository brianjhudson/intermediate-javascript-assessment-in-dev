// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 2

// *************
// * PROBLEM 1 *
// *************

// Below are two variables (one and two).
// Under the variables is a function called noWeakLink.
// noWeakLink uses $http to make a "GET" request to /api/users.
// You must use two .then functions to handle the response object.

// In the first .then function you use, assign the first user object (located in the response object)
// to the variable 'one' (previously declared).

// In the second .then function you use, assign the third user object
// to the variable 'two' (previously declared) and then return the tenth user object.

var one = 'don\'t touch this string!';
var two = 'don\'t touch this string, either!';

function noWeakLink() {

  return $http({
    method: 'GET',
    url: '/api/users'
  })
  // CODE HERE...
  .then(response => {
    console.log(response)
    one = response.data[0]
    return response;
  })
  .then(response => {
    two = response.data[2]
    return response.data[9]
  })


}



// *************
// * PROBLEM 2 *
// *************

// Below is a vaiable called elephant which has been assigned the value of an
// object with one key/value pair.

// Function large currently returns the following:
// 'My name is ' + this.name + ' and I am very heavy!'

// You must use explicit binding. In the variable called boundToElephant,
// assign it the value of the large function BOUND to the elephant object.

// When boundToElephant gets called, it should return this exact string:
// 'My name is Horton and I am very heavy!'

var elephant = {
  name: 'Horton'
}
function large() {

  return 'My name is ' + this.name + ' and I am very heavy!'
}
// CODE HERE...
var boundToElephant = large.bind(elephant)


// *************
// * PROBLEM 3 *
// *************

// Write a function called deathStar.
// deathStar will take in two parameters:
// capacity (Function) and crew (object).
// Use explicit binding to give capacity the context of crew and return the result.

// CODE HERE...
function deathStar(cap, crew) {
  return cap.bind(crew)
}


// *************
// * PROBLEM 4 *
// *************

// Create a function called accountingOffice.
// accountingOffice will take in a parameter:
// assets (Number),
// then return a function that will take in a parameter:
// liabilities (Number).
// This function will return assets added to liabilities.

// CODE HERE...
function accountingOffice(nums) {
  return function(liab) {
    return nums + liab;
  }
}


// *************
// * PROBLEM 5 *
// *************

// Create a function called forgetter that takes in a parameter:
// name (String).

// forgetter helps keep track of things people don't want to forget.
// forgetter needs to return a function called rememberall.
// rememberall takes in a parameter:
// item (String).

// When rememberall is invoked, it will store the new item
// to be remembered along with all other previous items remembered.
// rememberall then needs to return an object with the following format:

// {
//     name: << name (given parameter) >>,
//     remember: << array of items to be remembered >>
// };

// CODE HERE...
function forgetter(name) {
  var arr = [];
  return function rememberall(item) {
    arr.push(item)
    return {
      name,
      remember: arr
    }
  }
}


// *************
// * PROBLEM 6 *
// *************

// Create a function called frodo. frodo will take in two parameters:
// startingHungerValue (Number) and startingDangerValue (Number).

// frodo will have two local variables called hunger and danger.
// Assign those variables the corresponding parameters.
// frodo will then return an object with two methods.

// The first method will be called dinnerOverFire.
// dinnerOverFire will decrease hunger by 25 and will increase danger by 40.

// The second method will be called hidingInBush.
// hidingInBush will increase hunger by 35 and decrease danger by 20.

// Both methods need to return an object structured like this:

// {
//   hunger: (modified hunger value),
//   danger: (modified danger value)
// }

// NOTE: Neither hunger nor danger should be able to exceed 100 or drop below 0.

// CODE HERE...
function frodo(startingHungerValue, startingDangerValue) {
  var hunger = startingHungerValue, danger = startingDangerValue
  return {
    dinnerOverFire: function() {
      hunger -= 25
      danger += 40
      if (hunger < 0) hunger = 0
      if (danger > 100) danger = 100
      return {hunger, danger}
    }, 
    hidingInBush: function() {
      hunger += 35
      danger -= 20
      if (hunger > 100) hunger = 100
      if (danger < 0) danger = 0
      return {hunger, danger}
    }
  }
}