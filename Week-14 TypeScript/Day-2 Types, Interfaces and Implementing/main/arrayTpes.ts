interface Person {
  firstname: string;
  lastname: string;
  age: number;
}
function getLegalAdults(people: Person[]): Person[] {
  const legalPeople: Person[] = people.filter((person) => person.age >= 18);
  return legalPeople;
}
const crowd: Person[] = [
  { firstname: "Sanskar", lastname: "Shukla", age: 21 },
  { firstname: "Aryan", lastname: "Verma", age: 16 },
  { firstname: "Tanya", lastname: "Singh", age: 19 }
];

const adults = getLegalAdults(crowd);

console.log(adults);
