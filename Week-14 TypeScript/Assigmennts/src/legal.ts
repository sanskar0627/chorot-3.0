
type User = {
  age: number
}

function isLegal(user: User): boolean {
  if(user.age >= 18){
    return true
  }
  else{
    return false;
  }
}

// Step 3: Test it
console.log(isLegal({ age: 20 })) 
console.log(isLegal({ age: 15 })) 
