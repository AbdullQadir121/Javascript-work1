// // Chapter 01

// // Q1
// alert("welcome")

// // Q 2
// alert("Error! Please enter a valid password")

// // Q 3
// alert("Welcome to JS Land...\n Happy Coding!")

// // Q 4
// alert("Welcome to JS Land...")
// alert("Happy Coding! \n Prevent this page from creating additional dialogs.")

// // Q
// console.log ("Hello... I can run JS through my web browser's console")

// // Chapter 02

// // Q 1
// var username 

// // Q 2
// var myName = "Abdul Qadir"

// // Q 3
//  var message = "Hello World"
//  alert(message);

// // Q 4
// var name = "Jhone Doe";
// alert (name);
// var age = 15 ;
// alert (age + "years old")
// alert("Certified Mobile Application Development")

// // Q 5
// var a = "PIZZA\nPIZZ\nPIZ\nPI\nP"; 
// alert (a);

// Q 6
// var email = "example@example.com"
// alert ("My email address is example@example.com");

// Q 7
// var book = ("A smarter way to learn JavaScript ");
// alert("I am trying to learn from the Book " +book)

// Q 8
// document.write ("Yah! I can write HTML content through JavaScript");

// Q 9

// Chapter 03

// Q 1
// var age = 15;
// alert ("I am " +age + " years old" )

// Q 2
// var time = 14;
// alert ("You have visited this site " +time  +" times" )

// // Q 3
// var birthYear = 1990;
// document.write("My birth year is " +birthYear +" Data type of my declared variable is number");

// // answer 04
// var Name = "<b>John Doe</b>"
// var Product = "<b>T-shirt</b>"
// var Quantity = "<b> 5 </b>"
// document.write(Name  +"ordered"   +Quantity  +Product + " (s) on XYZ Clothing store" );

// // Chapter 04

// // Q 1
// var a
// var b
// var c

// // Q2
// Legal
// 1 = Letter
// 2 = $
// 3 = _
// 4 = 
// 5 =

// Illegal
// 1 = ~
// 2 = #
// 3 = %
// 4 = @
// 5 = Space

// // // Q 3
// document.write("<h2>Rules for naming JS variables</h2>");
// document.write("Variable names can only contain,numbers,$ and _ . For example : $my_1stVariable <br/>");
// document.write("Variable must begin with a letter, $ or _  . For example : $name, _name or name<br/>");
// document.write("Variable names are case sensitive <br/>");
// document.write("Variable names should not be JS keywords <br/>");

// Chapter 05

// Q 1
// document.write(3+5); 

// // Q 2
// document.write(5 - 3 + "<br/>")
// document.write(5 * 3 + "<br/>")
// document.write(10 / 2 + "<br/>")
// document.write(9 % 3 + "<br/>")

// Q 3
// var a 
// document.write("Value after declaration is " +a + "<br/>" ) 
// a = 5 
// document.write("initial value :" +a + "<br/>" )
// a = ++a
// document.write("value after increment is: " +a +"<br/>" )
// a = a+7
// document.write("Value after addition is: " +a +"<br/>")
// a = --a
// document.write("Value after decrement is:" +a + "<br/>")
// a = a % 3
// document.write("The remainder is: 0")

// Q 4
// var price = 600
// var ticket =5
// var Total = (price * ticket)
// document.write("Total cost to buy 5 tickets to a movie is " +Total + "PKR" ) 

// Q 5
// document.write("<h3>Table of 4</h3>")
// var table = 4
// for(a=1; a<=10; a++){
//     document.write(table + "*" + a + "=" + a*table + "<br>")
// }
// Chap 6 to 9
// assignment No # 6-9

// Q1 

// var a = 10;
// var b = ++a;
// alert(b)

// var a = 11
// var b = ++a;
// alert (b)


// var a = 12;
// var b = --a;
// alert (b)

// var a = 11;
// var b = a--;
// alert (b)

// Q2

// var a = 2;
// var b = 1;
// alert (--a - --b + ++b + b--)
// Answer (3)

// var a = 2;
// var b = --a;
// alert (b)
// Answer (1)

// var a = 2;
// var b = 1;
// alert(--a- --b)
// Answer (1)

// var a = 2;
// var b = 1;
// alert(--a - --b + ++b)
// Answer (2)


// var a = 2;
// var b = 1;
// alert(--a - --b + ++b + b--)
// Answer (3)
//  Q3
// var a = prompt("Enter your name")
// var b = "السلام عليكم"
// var c = b+a
// alert(c)

// Q5
//  const number = parseInt(prompt('Enter an number: '));
 // for(let i = 1; i <= 10; i++) {
//          const result = i * number;
//     document.write(`<br />${number} * ${i} = ${result}`);
//  }

//  Q/6

// var subject1 = prompt("Enter subject 1 name", "English");
// var subject2 = prompt("Enter subject 2 name", "Urdu");
// var subject3 = prompt("Enter subject 3 name", "Maths");

// var totalMarks = 100;

// var sub1Obt = prompt("Enter" + subject1 + "Obtained marks")
// var sub2Obt = prompt("Enter" + subject2 + "Obtained marks")
// var sub3Obt = prompt("Enter" + subject3 + "Obtained marks")

// var sub1Per = (sub1Obt / totalMarks) * 100;
// var sub2Per = (sub2Obt / totalMarks) * 100;
// var sub3Per = (sub3Obt / totalMarks) * 100;

// document.write("<table >")
// document.write("<tr>")
// document.write("<th>")
// document.write("Subject")
// document.write("</th>")
// document.write("<th>")
// document.write("Total Marks")
// document.write("</th>")
// document.write("<th>")
// document.write("Obtained Marks")
// document.write("</th>")
// document.write("<th>")
// document.write("Percentage")
// document.write("</th>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>")
// document.write(subject1)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub1Obt)
// document.write("</td>")
// document.write("<td>")
// document.write(sub1Per + "%")
// document.write("</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>")
// document.write(subject2)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub2Obt)
// document.write("</td>")
// document.write("<td>")
// document.write(sub2Per + "%")
// document.write("</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>")
// document.write(subect3)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub3Obt)
// document.write("</td>")
// document.write("<td>")
// document.write(sub3Per + "%")
// document.write("</td>")
// document.write("</tr>")

// document.write("</table>")


// Chap 9 to 11

// Q1
// var a = prompt ("Enter your City Name")
// if (a === "Karachi"){
//    alert("Welcome to City of Lights");
// }
// else {
//     alert("City not Found");
// }


// // Q2
// var a = prompt ("Enter your Gender")
// if (a === "Male"){
//    alert("Good Morning Sir");
// }
//     else if(a === "Female"){
// alert("Good Morning Ma'am")}

//  else {
//      alert("Gender Not found");
//  }


// Q3
// var a = prompt ("Enter Traffic Signal Colour")
// if (a === "Red"){
//    alert("Must Stop");
// }
//     else if(a === "Yellow"){
// alert("Ready to Move")}

// else if(a === "Green"){
//     alert("Move now")}
    
//  else {
//      alert("Colour Not found");
//  }



// Q4
// var a = prompt ("How much fuel remain in your car?")
// if (a < 0.25){
//    alert("Please refill the fuel in your car");
// }
//     else if(a > 0.25){
// alert("More fuel does not need in your car")}


    
//  else {
//      alert("Entering Wrong Value");
//  }

// Q5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Answer True

// Q5.1
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Answer False

// Q5.2
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Condition 2 is True


// Q5.3
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Answer the Cost Equals
   
// Q5.4
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
    // Answer True

// Q5.5

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    //Car is smaller than Cat


    // Q6


// 7
// var a = prompt("Guess the secret number")
// if (a === "4"){
//       alert("Bingo! Correct answer");
//      }
//      else if(a++ === 5){
//         alert("Close enough to the correct answer");
//      }
//      else{
//          alert("Try again");
//      }



// 8

// const isMultipleOfThree = num => {
//     const div = parseInt(num / 3);
  
//     return num === div * 3;
//   };
//  9
//   for (let i = 0; i <= 300; i++) {
//     if (isMultipleOfThree(i)) {
//       alert (i);
//     }
//   }

// Q10
// var i = prompt("Enter Number")
// for (let i = 0; i <= 10; i++) {
//          if (i*2) {
//            alert ("even");
//         }
//        }

// Q11
// var T= prompt ("Enter Today Temperature")
// if(T > 40){
//     alert("It is too hot outside.")
// }
// else if(T > 30){
//     alert("The Weather today is Normal.")
// }
// else if(T > 20){
//     alert("Today’s Weather is cool.")
// }
// else if(T > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }
// else if(T > 1){
//     alert("OMG! Today’s weather is so much Cool.")
// }
// Q11
// var operator = prompt('Enter operator ( either +, -, * or / ): ');
// var number1 = parseFloat(prompt('Enter first number: '));
// var number2 = parseFloat(prompt('Enter second number: '));

// if (operator == '+') {
//     alert(number2+number2)
// }
// else if (operator == '-') {
//     alert  (number1 - number2);
// }
// else if (operator == '*') {
//     alert(number1 * number2);
// }
// else {
//   alert (number1 / number2);

// }




