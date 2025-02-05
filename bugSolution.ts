function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing the first element of the array
console.log(greeter(user[0]));

// Solution 2: Joining the array elements into a single string
console.log(greeter(user.join(" ")));

// Solution 3:  Type Guard (if you need to handle cases where 'user' might not be an array)
function greet(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(" ");
  } else {
    return "Hello, " + person;
  }
}
console.log(greet(user));
console.log(greet("Bob"));