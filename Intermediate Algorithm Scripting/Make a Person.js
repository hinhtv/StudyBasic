
/**
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

 */

//ANSWER

var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    let arr = fullName.split(' ');

    this.getFirstName = function () {
        return arr[0];
    };

    this.getLastName = function () {
        return arr[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (first) {
        arr[0] = first;
        fullName = arr.join(' ');
    };

    this.setLastName = function (last) {
        arr[1] = last;
        fullName = arr.join(' ');
    };

    this.setFullName = function (firstAndLast) {
        fullName = firstAndLast;
        arr = fullName.split(' ');
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
