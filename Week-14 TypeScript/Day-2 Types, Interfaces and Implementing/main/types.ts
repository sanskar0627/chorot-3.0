type Employee = {
    name: string;
    startDate: string;
};
type Manager = {
    name: string;
    department: string;
};
//Intersection
type Teamlead = Employee & Manager;

let Sanskar: Teamlead={
    name: "Sanskar",
    startDate: "01-25-54",
    department: "Engineering"
}
console.log(Sanskar);               
console.log(Sanskar.name);          
console.log(Sanskar.startDate);     
console.log(Sanskar.department); 

// union 
type Status = "success" | "failure";

function report(status: Status) {
  console.log(`Status is: ${status}`);
}

report("success"); 
report("failure"); 
//report("pending"); 
