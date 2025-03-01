// Object with a method
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  // Object Method
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  // Method to update age
  celebrateBirthday: function() {
    this.age += 1;
  }
};

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Array Method- Using map() to double each number in the array
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

// Array Method- Using filter() to keep only even numbers
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

// console display results
console.log('Person Full Name:', person.fullName());
console.log('Doubled Numbers:', doubledNumbers);
console.log('Even Numbers:', evenNumbers);

// making the age increase happen using celebrateBirthday
person.celebrateBirthday();
console.log('New Age:', person.age);

//Displaying on website

document.getElementById('fullName').textContent = person.fullName();
document.getElementById('doubledNumbers').textContent = doubledNumbers.join(', ');
document.getElementById('evenNumbers').textContent = evenNumbers.join(', ');
document.getElementById('newAge').textContent = person.age;
