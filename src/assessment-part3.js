// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 3

// *************
// * PROBLEM 1 *
// *************

// For this question, you are asked to make a function called 'callBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the function
// with the context of the animal, and 'Trogdor' as a parameter.

// CODE HERE...
function callBinding(magicAnimals, updateAnimal, id) {
    for (var animal of magicAnimals) {
        if (animal.id === id) {
            return updateAnimal.call(animal, "Trogdor")
        }
    }
}


// *************
// * PROBLEM 2 *
// *************

// For this question, you are asked to make a function called 'applyBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the function
// with the context of the animal, and the array ['being majestic', 'eating rainbows'] as a parameter.

// CODE HERE...
function applyBinding(magicAnimals, updateAnimal, id) {
    for (animal of magicAnimals) {
        if (animal.id === id) return updateAnimal.apply(animal, ['being majestic', 'eating rainbows'])
    }
}


// *************
// * PROBLEM 3 *
// *************

// NOTE: $q is an injected library that works like angular's $q object.
// For this question, you are asked to make a function called 'promiseMe'.
// This function will take in 1 parameter:
// $q (Custom promise object).
// In your function, create a custom promise, then in a timeout, update the variable foo (seen below)
// to equal 'bar' and complete your promise.

var foo;
// CODE HERE...
function promiseMe($q) {
    var deferred = new Promise(function(res, rej) {
        setTimeout(() => {foo = "bar"; res(foo)})
    })
    return deferred

    // var deferred = $q.defer()
    // setTimeout(() => {
    //     foo = "bar"
    //     deferred.resolve(foo)
    // }, 100)
    // return deferred.promise
}

// *************
// * PROBLEM 4 *
// *************

// NOTE: $http is a function created to simulate the angular $http.
// For this question, you are asked to make a function called 'emailList'.
// This function will take in 2 parameters:
// $q (Custom promise object), $http (Custom request function).
// Set up your custom promise, then make a GET request using $http to '/api/users'.
// Make an array of emails from the returned data,
// and then pass the array as you complete your promise.

// CODE HERE...
function emailList($q, $http) {
    var prom = new Promise(function(res, rej) {
        res($http({
            method: 'GET',
            url: '/api/users'
        }).then(response => {
            console.log(response)
            var emails = []
            for(var user of response.data) {
                console.log(user)
                emails.push(user.email)
            }
            console.log(emails)
            return emails;
        }))
    })
    return prom;
}