let a = prompt("Enter first number:");

let b = prompt("Enter second number:");
if (isNaN(a) || isNaN(b)) {
    throw new SyntaxError("Please enter valid numbers.");
} 
    let sum = parseInt(a) + parseInt(b);
function main() {
    let x =2;
    try {
          console.log("The sum of " + a + " and " + b + " is: " + sum*x);
          return true;
        
    } catch (error) {
        console.log("An error occurred: " + error.message);
        return false;
        
    }
  finally {
        console.log("Execution completed.");
    }
}
let c= main();