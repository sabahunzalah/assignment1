// 1. Write a program that takes input a name from user & greet the 
// user like this:

// var yourName = prompt("Enter your name");
// alert("Hi"+" "+yourName);



// 2. Write a program to take input a number from user & display 
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by 
// default.

// 3. Write a program to take “city” name as input from user. If user 
// enters “Karachi”, welcome the user like this: “Welcome to city 
// of lights”

// var city = prompt("Enter city name");
// if(city == "karachi" || city =="Karachi"){
//     alert("Welcome to city of light");
// }
// else{
//     alert("try again")
// }

// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is 
// female, give the message: Good Morning Ma’am.



// var gender =prompt("Enter your gender");
// if(gender ==="male"){
//     alert("Good morning Sir")
   
    
// }
// else if(gender==="female"){
//     alert("Good morning Madam")
// }
// else{
//     alert("enter again")
// }


// 5. Write a program to take input color of road traffic signal from 
// the user & show the message according to this table:
// Signal color : Message
//   red    :  vehicles must stop
//   yellow :  vehicles should get ready to move
//   green  :  vehicles can move now




// var trafficColor =prompt("Enter the traffic signal color to take message");
// if(trafficColor ==="red" || trafficColor ==="Red"){
//     alert("vehicles must stop")
// }
// else if(trafficColor === "yellow" || trafficColor === "Yellow"){
//     alert("vehicles should get ready to move")
// }
// else if(trafficColor === "green"|| trafficColor === "Green"){
//     alert("vehicles can move now")
// }
// else{
//     alert("Please enter Red or Yellow or Green color")
// }

// 6. Write a program to take input max age & current age from 
// user. If the current age is less than or equal to max age, show the message “You are welcome”
// var age = +prompt("Enter your current age");
// var maxAge = 35
// if(age <= maxAge){
//     document.write("You are welcome")
// }



// 7. Write a program to take input remaining fuel in car (in litres) 
// from user. If the current fuel is less than 0.25litres, show the 
// message “Please refill the fuel in your car”




// var carFuel = +prompt("enter fuel quantity in liters");
// if(carFuel < 0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("You have enough petrol")
// }


// 8. Run this script, & check whether alert message would be 
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// // }
//  var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
// else{alert("given condition for variable b is not true")}
//  var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// else{alert("condition is false")}
// if (c === 13){
//  alert("condition 2 is true");
// }
// else{alert("condition is false")}

// if (++c < 14){
//  alert("condition 3 is true");
// }
// else{alert("condition is false")}

// if(c === 14){
//  alert("condition 4 is true");
// }
// else{alert("condition is false")}

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
//  if (true){
//  alert("True");
// }
// if (false){
//  alert("False");
// }
// //  if("car" < "cat"){
// //  alert("car is smaller than cat");
// // }



// 9. Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute grade as 
// per following table: 
// Percentage % Grade Remarks
// Greater than or equal to 80 A-one Excellent
// Greater than or equal to 70 A Good
// Greater than or equal to 60 B You need to improve
// Less than 60 Fail Sorry
// Show the total marks, marks obtained, percentage, grade & 
// remarks like:

// var subject1 =+prompt("Enter english marks");
// var subject2 =+prompt("Enter computer marks");
// var subject3 =+prompt("Enter math marks");
// var total=subject1+subject2+subject3;
// var per=total/300*100;
// var grade ="";
// var remarks ="";

//     if (per >= 80 && per < 101) {
//       grade = "A+"; remarks ="Excellent"
//     } else if (per >= 70 && per < 81) {
//       grade = "A";remarks ="Good"
//     } else if (per >= 60 && per < 71) {
//       grade = "B";remarks ="Need to be improve"
//     } else {
//         grade ="Fail";remarks="sorry"
//     }
//     document.write("<h1>"+"Mark Sheet"+"</h1>"+"<br>"+"<br>")
//     document.write("Total marks :" +" "+"100"+"<br>")
//     document.write("Obtained marks :" +" "+total+"<br>")
//     document.write("Percentage :" +" "+per+"<br>")
//     document.write("Grade :" +" "+grade+"<br>")
//     document.write("Remarks :" +" "+remarks+"<br>")



    
    
   


// 10. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Take input 
// from users, the following: 
// a. Name of item1 
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser.



// var item1Name =prompt("enter item 1 name");
// var item2Name =prompt("enter item 2 name");

// var priceOfItem1 =+prompt("Enter price of item 1");
// var priceOfItem2 =+prompt("Enter price of item 2");
// var quantityOfItem1=+prompt("Enter quantity of item 1");
// var quantityOfItem2 =+prompt("Enter quantity of item 2");
// var shippingCharges = +prompt("shipping charges")
// var totalPrice1Item =priceOfItem1*quantityOfItem1;
// var totalPrice2Item =priceOfItem2*quantityOfItem2;
// var totalCost=totalPrice1Item+totalPrice2Item+shippingCharges;
// var discount = ""

// if(totalCost>2000){
//     discount=totalCost/100*10
// }
// document.write("<h1>"+"Shopping Cart"+"</h1>"+"<br>");
// document.write("Price of "+" "+item1Name+" "+"is"+ " "+priceOfItem1 +"<br>");
// document.write("quantity of "+" "+item1Name+" "+"is"+ " "+quantityOfItem1 +"<br>");
// document.write("Price of "+" "+item2Name+" "+"is"+ " "+priceOfItem2 +"<br>");
// document.write("quantity of "+" "+item2Name+" "+"is"+ " "+quantityOfItem2 +"<br>");
// document.write("Shipping Charges"+" "+shippingCharges+"<br>");
// document.write("Total cost of your order is"+" "+totalCost+"<br>");
// document.write("Discounted Price is"+" "+discount+"<br>");





// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”.
// var secretNUmber=+prompt("guess the secret number");
// if(secretNUmber<=10){
//     document.write("<h1>"+"BINGO ! Correct Answer"+"</h1>")
// }
// else if(secretNUmber=secretNUmber+1){
//     document.write("<h1>"+"Close enough to the correct answer"+",/h1>")}



// 12. Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number is 
// divisible by 3.
// var number =+prompt("Enter a number:");

// if (number % 3 === 0) {
//     console.log(number + " is divisible by 3.");
//     alert(number + " is divisible by 3.");
// } else {
//     console.log(number + " is not divisible by 3.");
//     alert(number + " is not divisible by 3.");
// }





// 13. Names & Total scores of two teams are taken as input. Write 
// a program that shows which team has won the game or show if 
// there is a tie. (Team A or Team B)



// var teamA =prompt("Team A");
// var teamB =prompt("Team B");
// var scoreTeamA = +prompt("Enter score of team A");
// var scoreTeamB = +prompt("Enter score of team B");

// if(scoreTeamA<scoreTeamB){
//     alert(teamB+" " +" has won")
// }
// else if(scoreTeamA>scoreTeamB){
//     alert(teamA+" " +" has won")
// }
// else{
//     alert("matched has tied")
// }
// 14. Take a string, a number and a Boolean in three variables. 
// Write a program that checks the type of variables & responds 
// accordingly. Like :
//  var numA =prompt("enter a string");
//  var numB = +prompt("enter a number");
//  var enterBoolean =prompt("enter boolean");
//  alert(numA+ " "+"is a string");
//  alert(numB+ " "+"is a Number");
//  alert(enterBoolean+ " "+"is a boolean");




// 15. Write a program that checks whether the given input is an 
// even number or an odd number



// 16. Weather in Karachi nowadays is too cool, write a program 
// that takes temperature as input and shows a message based on 
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// 17. Write a program to create a calculator for +,-,*, / & % using if 
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.