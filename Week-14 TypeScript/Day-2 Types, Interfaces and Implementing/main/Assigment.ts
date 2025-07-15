interface Admin {
  name: string;
  permission: string;
}

interface User {
  name: string;
  age: number;
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin) {
  console.log("Hello", user.name);

  if ('age' in user) {
    console.log("User age is:", user.age);
  }

  if ('permission' in user) {
    console.log("Admin permission is:", user.permission);
  }
}


greet({ name: "Alice", age: 25 }); 
greet({ name: "Bob", permission: "full-access" }); 
