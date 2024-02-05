// A-1 :

var a = (10);
document.write("Result:");

document.write("<br>");

document.write("The value of a is: ", a);

document.write("<br>");

document.write("........................................");

document.write("<br>");
document.write("<br>");

(++a);

document.write("The value of ++a is: ", +a);

document.write("<br>");

document.write("Now the value of a is: ", +a);

document.write("<br>");
document.write("<br>");
document.write("<br>");

(a++);

document.write("The value of a++ is: ", --a);

document.write("<br>");

document.write("Now the value of a is: ", ++a);

document.write("<br>");
document.write("<br>");
document.write("<br>");

(--a);

document.write("The value of --a is: ", a);

document.write("<br>");

document.write("Now the value of a is: ", a);

document.write("<br>");
document.write("<br>");
document.write("<br>");

(a--);

document.write("The value of a-- is: ", ++a);

document.write("<br>");

document.write("Now the value of a is :", --a);

document.write("<br>");
document.write("<br>");
document.write("________<><>________");

document.write("<br>");

// A-2 :

document.write("<br>");

var a = (2);
document.write("a is ", a);

document.write("<br>");

var b = (1);
document.write("b is ", b);

document.write("<br>");
document.write("<br>");
document.write("<br>");

(--a);
document.write("--a is ", --a);

document.write("<br>");

(--b);
document.write("--b is ", --b);

document.write("<br>");

(++b);
document.write("++b is ", ++b);

document.write("<br>");

(b--);
document.write("b-- is ", b--);

document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("So => --a is ", 0);

document.write("<br>");

document.write("= > --a - --b is ", --a - --b);

document.write("<br>");

document.write("= > --a - --b + ++b is ", --a - --b + ++b);

document.write("<br>");

document.write("= > --a - --b + ++b + b-- is ", --a - --b + ++b + b--);

document.write("<br>");
document.write("<br>");

document.write("________<><>________");

// A-3 :

document.write("<br>");
document.write("<br>");

var Name = prompt("Enter Your Name");
document.write(Name);

document.write("<br>");

alert("Welcome to our Website");
document.write("Welcome to our Website");

document.write("<br>");
document.write("<br>");

document.write("________<><>________");

// A-4 : 

document.write("<br>");
document.write("<br>");

var num = prompt("Show Table of") || 5;
document.write(num);

document.write("<br>");
document.write("<br>");

document.write(num, " * 1  = ", num * 1);

document.write("<br>");

document.write(num, " * 2  = ", num * 2);

document.write("<br>");

document.write(num, " * 3  = ", num * 3);

document.write("<br>");

document.write(num, " * 4  = ", num * 4);

document.write("<br>");

document.write(num, " * 5  = ", num * 5);

document.write("<br>");

document.write(num, " * 6  = ", num * 6);

document.write("<br>");

document.write(num, " * 7  = ", num * 7);

document.write("<br>");

document.write(num, " * 8  = ", num * 8);

document.write("<br>");

document.write(num, " * 9  = ", num * 9);

document.write("<br>");

document.write(num, " * 10 = ", num * 10);

document.write("<br>");
document.write("<br>");

document.write("________<><>________");

// A-5 :

document.write("<br>");
document.write("<br>");

var suba = prompt("Enter 1st Subject Name");
var subb = prompt("Enter 2nd Subject Name");
var subc = prompt("Enter 3rd Subject Name");

var totalMarksa = 100;
var totalMarksb = 100;
var totalMarksc = 100;

var obtMarksa = prompt("Enter Obtained Marks of 1st Subject");
var obtMarksb = prompt("Enter Obtained Marks of 2nd Subject");
var obtMarksc = prompt("Enter Obtained Marks of 3rd Subject");

var pera = obtMarksa / 100 * 100;
var perb = obtMarksb / 100 * 100;
var perc = obtMarksc / 100 * 100;

var obtainedTotal = (obtMarksa + obtMarksb + obtMarksc);

var percentageTotal = obtainedTotal / 300 * 100;


document.write("<br>");
document.write("<br>");

document.write("________<><>________");