                       // Assignment # 17-20

// 1. Declare and initialize an empty multidimensional array.
 // (Array of arrays)
//  var arr =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
//  console.log(arr)

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
//  for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
    
//     }   
//  }
//  console.log(i)   

// 3. Write a program to print numeric counting from 1 to 10.
// var i=10;
// for(i=0;i<10;i++)
// console.log(i)

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var table=prompt("Enter your your table");
//  for(var i=1;i<=15;i++   ){
//      document.write(table+"x"   + i+"=" +table*i  +"<br>" )
//  }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits=["apple", "banana","mango","orange"];
// document.write( "<h1>"+fruits  + "<br>"+"</h1>")
// for(i=0;i<fruits.length;i++){
//     document.write("<h1>"+"Element at index " +  i   +  " is " + fruits[i] +"<br>"+"</h1>" )
// }


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//  document.write("counting;<br>")
//  for(i=0;i<=15;i++){
//     document.write(i  + " ,")
//  }
//  document.write("<br><br>")
// document.write("reverse counting:<br>")
//  for(i=10;i>=1;i--){
//      document.write(i  +",")
//  }
//  document.write("<br><br>")
//  document.write("Even:<br>")
//  for(var a=1;a<=20;a++){
//      if(a%2==0){
//          document.write(a +",")
//      }
//  }
//  document.write("<br><br>")
//  document.write("Odd:<br>")
//  for(var a=1;a<=20;a++){
//      if(a%2 !=0){
//          document.write(a+"," +"")
//      }
//  }

// document.write("<br><br>")
// document.write("Series:<br>")
// for(var a=1;a<=20;a++){
//     if(a%2 ==0){
//         document.write(a +"K"+ "," +"")
//     }
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var bakerry = ["cake", "apple pie","cookie","chips","patties"];
// var user =prompt("Welcome to ABC bakerry .What do you want to order","Enter your item");
// var flag =false;
// for( var i =0 ; i <= bakerry.length;i ++){
//     if (user===bakerry[i]){
//         flag=true;
//         alert(user + " is avialable at the index "  + i + " in our bakery");
//     }
// }
// if (flag===false){
//     alert("item is not available");
// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var array = [24 , 53 , 78 , 91 , 12];
// var max= 0;

// for (i=0; i<=max;i++){
//     if (array[i]>max) {
//         var max=array[i];
//     }
// }
// document.write('<h1>' +"Array items are;" + array +"<br>" + "The largest number is"+ max +' </h1>')

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


//  array = [24 , 53 , 78 , 91 , 12];
//  var smallest = array[0];

//  for (var i = 1; i < array.length; i++) {

//   if (array[i] < smallest) {
//     smallest = array[i];
//  }
//  }
//  document.write('<h1>' +"Array items are;" + array +"<br>" + "The smallest number is"+ smallest +' </h1>')

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// var a =5;
//   for(var i=1;i<=20;i++  ){
//         document.write( '<b>' +a *i +"," +'</b>' )
//   }


                       
                       
                       
                       
                       
                       
                       
                       
                       
                       // Chapter 21-25

//1  Write a program that takes two user inputs for first and
//  last name using prompt and merge them in a new variable
//  titled fullName. Greet the user using his full name.

// var firstNames = prompt("Enter your firstname");
// var lastNames = prompt("Enter your your lastname");
// var fullName= firstNames +lastNames;
//   document.write("<h1>"+fullName+"</h1>");


 // 2   Write a program to take a user input about his favorite
//   mobile phone model. Find and display the length of user
//  input in your browser

// var phone = prompt("Enter your Favourite mobile phone model:");
// var str = new String( phone );
// document.write("<h1>"+"MY favourite phone is :" + phone + "<br>" + "Length of string is :"  +  str.length+ "<h1>" );


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("<h1>"+"String:" +str + "<br>"+"Index of 'n' :"+n +"</h1>");

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var str = "Hello World";
// var n = str.lastIndexOf("l");
// document.write("<h1>"+"String:" +str + "<br>"+"Index of 'n' :"+n +"</h1>");


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var str = "Pakistani";
// var char = str.charAt(3);
// document.write("<h1>"+"String:" +str + "<br>"+"Character at index 3 :"+ char +"</h1>")


// 6. Repeat Q1 using string concat() method.


// var str1 = "Hello ";
// var str2 = "world!";
// var concat = str1.concat(str2);
// document.write("<h1>"+concat+"</h1>")

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var City = "Hyderabad";
// var repl =City.replace("Hyder", "Islam");
// document.write("<h1>"+"City:" +City + "<br>"+"After replacement :"+ repl +"</h1>")


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
  

// var message ="Ali and Sami are best friends. They play cricket and football together";
// for (var i = 0; i < message.length; i++) {
//      if (message.slice(i, i + 3) === "and") {
//     message = message.slice(0, i) + "&" + message.slice(i + 3);
//      }
//      }
//      document.write("<h1>"+ message + "</h1>")
    
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var num1 = 42;
// var num2 = '42';
// if (num1 ===num2) {
//     document.write(true);
// } else {
//     document.write(false);
// }

// var str = "472";
// var num= 472;
// var without = str.replace(num); 
// document.write("<h1>"+ "Value: "+ str + "<br>" +"Type : string" + "<br>"+"Value : "+ num+"<br>"+"Type : number" +"</h1>")

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

//  var user = "peanut";
//  var cap =user.toUpperCase(user);
//  document.write("<h1>"+ "User input: "+ user + "<br>"+"Upper case: "+ cap +"</h1>")


//  11 .  Write a program that takes user input. Convert and
// show the input in title case.
 
// var user = "javascript";
// var repl =user.replace("j", "J");
// document.write("<h1>"+"User input:" +user + "<br>"+"Title case :" +repl +"</h1>")


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var without = num.replace(".", ""); 
// document.write("<h1>"+ "Number: "+ num + "<br>"+"Result: "+ without+"</h1>")

// 17. Write a program to display the last character of a user
// input.

// var str = "Pakistan";
// var char = str.charAt(7);
// document.write("<h1>"+"User input:" +str + "<br>"+"Last character of input  :"+ char +"</h1>")


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var text = "the quick brown fox jumps over the lazy dog";
// var count = (text.match(/the/g) || []).length;
// document.write("<h1>"+"Text :" +text + "<br>"+"There are  "+ count+" occurrences of word  “the”"+"</h1>");