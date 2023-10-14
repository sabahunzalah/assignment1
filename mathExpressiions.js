// 1. Write a program that take two numbers & add them in a new 
// variable. Show the result in your browser.

// var num1 = +prompt("enter first number");
// var num2 =+prompt("enter Second number");
// var result= num1+num2;
// alert("Sum of"+" "+num1+" "+"and"+" "+num2+" "+" is"+" "+result);

// 2. Repeat task1 for subtraction, multiplication, division & 
// modulus.
// var num3 = +prompt("enter first number");
// var num4 = +prompt("enter Second number");
// var result1= num3-num4;
// var result2= num3*num4;
// var result3= num3/num4;
// alert("subtraction of"+" "+num3+" "+"and"+" "+num4+" "+" is"+" "+result1 );
// alert("Multiplication of"+" "+num3+" "+"and"+" "+num4+" "+" is"+" "+result2 );
// alert("Division of"+" "+num3+" "+"and"+" "+num4+" "+" is"+" "+result3 );

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”.
// MATH	EXPRESSIONS |	JAVASCRIPT
// Page	3 of	11
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial 
// value: 3”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value 
// after increment is: 4”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value 
// after addition is: 11”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value 
// after decrement is: 10”.
// k. Show the remainder after dividing the variable’s value by 
// l. Output : “The remainder is : 1”



// var firstNum;//a
// document.write("Value after variable decleration is :"+ firstNum+"<br>");//b
// var firstNum =3;//c
// document.write( "Initial value:"+" "+firstNum+"<br>");//d
// firstNum =++firstNum;//e
// document.write( "Value after increment is"+" "+ firstNum+"<br>");//f
// var newNum =7+firstNum //g
// document.write("Value  after addition is:" +" "+newNum+"<br>" )//h
// newNum =--newNum;//i
// document.write( "Value after Decrement is"+" "+ newNum+"<br>");//j
// var divideNum=newNum % 3;//k
// document.write("The reminder is :"+ divideNum)//l


// 4. Cost of one movie ticket is 600 PKR. Write a script to store 
// ticket price in a variable & calculate the cost of buying 5 tickets 
// to a movie. Example output:

// var CostOfOne = 600;
// var NumberOfTickets = 5;
// var res = CostOfOne*NumberOfTickets;
// document.write("Total cost to buy 5 tickets to a movie is"+ " "+res)

// 5. Write a script to display multiplication table of any number in 
// your browser.



// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// MATH	EXPRESSIONS |	JAVASCRIPT
// Page	5 of	11
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// var celsiusTemperatue = 12 
//  var farenheitTemperature = 68
// var celsiusResult =(farenheitTemperature-32)*5/9
// var farenheitResult=(celsiusTemperatue*9/5)+32
// document.write(celsiusTemperatue+"<sup>"+"o" +"</sup> "+"C" +"is"+" "+farenheitResult +"<sup>"+"o" +"</sup> "+"F"+"<br>")
// document.write(farenheitTemperature+"<sup>"+"o" +"</sup> "+"F" +"is"+" "+celsiusResult +"<sup>"+"o" +"</sup> "+"C")



// 7. Write a program to implement checkout process of a shopping 
// cart system for an e-commerce website. Store the following in 
// variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.



// var priceOfItem1 = 350;
// var priceOfItem2 = 490;
// var quantityOfItem1= 2;
// var quantityOfItem2 = 3;
// var shippingCharges = 500;
// var totalPrice1Item =priceOfItem1*quantityOfItem1;
// var totalPrice2Item =priceOfItem2*quantityOfItem2;
// var totalCost=totalPrice1Item+totalPrice2Item+shippingCharges;
// document.write(totalCost)


// 8. Write a script to take total marks & marks obtained by a 
// student. Compute the percentage & show the result in your 
// browser.


// var obtainedMarks= +prompt("Enter obtained marks");
// var totalMarks=+prompt("enter total marks");
// var per =obtainedMarks/totalMarks*100;
// document.write("ObtainedMarks is "+" "+obtainedMarks+"<br>")
// document.write(" TotalMarks is"+" "+totalMarks+"<br>")
// document.write(per.toFixed(2)+"%")


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script 
// to convert the total currency to Pakistani Rupees. Perform all 
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and 
// 1 Saudi Riyal = 28 Pakistani Rupee)


// var oneDollar= 280;
// var oneDirham=75.83;
// var numberOfDollar=+prompt(" enter how many dollars you have");
// var numberOfDirham=+prompt(" enter how many dirham you have");
// var total = (oneDollar*numberOfDollar)+(oneDirham*numberOfDirham);
// document.write("Total currancy in PKR:" +" "+total);


// 10. Write a program to initialize a variable with some number 
// and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 
// Perform all calculations in a single expression.

// var numberEnter= +prompt("enter any number");
// var finalResult=(numberEnter+5*10)/2;
// alert(finalResult)

// 11. The Age Calculator: Forgot how old someone is? Calculate 
// it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN 
// years old”.


//  var currentYear = +prompt("enter current year");
//  var birthYear = +prompt("enter date of birth");
//  var currentAge1 =currentYear-birthYear-1;
//  var currentAge2=currentYear-birthYear;
//  alert(currentAge1+" "+"or "+" "+ currentAge2)
//  document.write("The Age Calculater"+"<br>");
//  document.write("Current year:"+" "+currentYear+"<br>");
//  document.write("Birth year:"+" "+birthYear+"<br>");
//  document.write("They are either"+" "+currentAge1+" "+"or"+" "+currentAge2+""+"years old")





// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is 
// NN”. (Hint : Area of a circle = π r2, π = 3.142)


// var raduisOfCircle = +prompt("enter radius of a circle");
// var CircumferenceOfCircle = 2*3.142*raduisOfCircle;
// var areaOfCircle = 3.142*(raduisOfCircle*raduisOfCircle);
// document.write("<h1>"+"The Geometrizer"+"</h1>"+"<br>");
// document.write("The Radius of a circle is"+ " "+ raduisOfCircle+"<br>")
// document.write("Circumference of a circle is"+" "+CircumferenceOfCircle.toFixed(3)+"<br>");
// document.write("Area of a circle is"+" "+areaOfCircle.toFixed(3));



// 13. Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser:

// var a = 10;
// document.write("The value of a is"+" "+a+"<br>"+ "<br>");
// document.write("The value of ++a is"+" "+ ++a+"<br>")
// document.write(" Now the value of a is"+" "+a+"<br>"+"<br>")
// document.write("The value of a++ is"+" "+ a++ +"<br>")
// document.write(" Now the value of a is"+" "+a+"<br>"+"<br>")
// document.write("The value of --a is"+" "+ --a +"<br>")
// document.write(" Now the value of a is"+" "+a+"<br>"+"<br>")
// document.write("The value of a-- is"+" "+ a-- +"<br>")
// document.write(" Now the value of a is"+" "+a+"<br>"+"<br>")

// 14. What will be the output in variables a, b & result after 
// execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
// Explain the output at each stage:
//  --a;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--;

// var a =2;
// var b =1;
// document.write("a is"+" "+a+"<br>")
// document.write("b is"+" "+b+"<br>")
// var result = --a;//1
// var resultB= --a - --b;//0 - 0
// var resultC = --a - --b + ++b;//-1 - -1 + 0
//                               //-1 +1 =0 +0=0

//  var resultD = --a - --b + ++b + b--;//
// document.write( "--a is"+" "+result+"<br>")
// document.write( "--a - --b is"+" "+resultB+"<br>")
// document.write( "--a- --b + ++b is"+" "+resultC+"<br>")
// document.write( " --a - --b + ++b + b--is"+" "+resultD+"<br>")

// 15. The Lifetime Supply Calculator: Ever wonder how 
// much a “lifetime supply” of your favorite snack is? Wonder no 
// more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of 
// your life.
// MATH	EXPRESSIONS |	JAVASCRIPT
// Page	11 of	11
// Output the result to the screen like so: “You will need NNNN to 
// last you until the ripe old age of NN”
// var favouriteSnacks = ("donuts");
// var currentAge = 25;
// var maximumAge = 50;
// var snackPerDay = 2;
// var totalSnack =(maximumAge-currentAge)*snackPerDay;
// document.write("<h1>"+"The lifetime supply calculator"+"</h1>"+"<br>");
// document.write("Favourite Snacks :"+" "+favouriteSnacks+"<br>");
// document.write("current age :"+" "+currentAge+"<br>");
// document.write("maximum age :"+" "+maximumAge+"<br>");
// document.write(" Amount of Snacks per Day :"+" "+snackPerDay+"<br>");
// document.write( " you will need "+" "+totalSnack+" "+"donuts to last you until the ripe old age of 50 ");














