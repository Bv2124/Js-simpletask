// // Text reverse function
function textReverse(){
   text = document.getElementById("txt").value
   var output = text.split("").reverse("").join("");
   document.getElementById("revtxt").innerHTML = output;
}
// Array functions
// Combination of two arrays
function combinearray(){
    let text1 = document.getElementById("txt1").value;
    let text2 = document.getElementById("txt2").value;
    const output = text1.concat(text2);
    document.getElementById("CA").innerHTML = output;
}

// Unique value
function Uniquevalue(){
// array combination
   let arrayvalue1 = document.getElementById("array1").value;
   let arrayvalue2 = document.getElementById("array2").value;
   let combine = arrayvalue1.concat(arrayvalue2);
   var C = (combine.split(""))
   document.getElementById("result2").innerHTML = ("Combined array: " + C);

// array sort 
let SA = Array.from(new Set(C));
  document.getElementById("result02").innerHTML = "Sorted arrays: " + SA ;
   
// array +2 after the center place
      let center = Math.ceil(SA.length / 2);
      const firstHalf = SA.splice(0, center);   
      var secondHalf = SA.splice(-center).map(intonum).map(Add2);
      function intonum(center){
         return Number (center);
      }
      function Add2(center){
         return (center + 2);
      }
  document.getElementById("result002").innerHTML = "The combined array +2 after the center:" + firstHalf +","+"<span>" + secondHalf + "</span>";
}

// input size depend on user Input
function UserInput(){
   let inputvalue = document.getElementById("increase").value.length;
   document.getElementById("increase").style.width = inputvalue*15 + "px";}

// Check whether the two strings are anagrams
function isAnagram()
{
   let a = document.getElementById("string1").value.split(("")) ;
   let b = document.getElementById("string2").value.split(("")) ;
   a.sort();b.sort();
       if(a.length != b.length){
         document.getElementById("Anagram").innerHTML = "False";
       }
       else if (JSON.stringify(a)==JSON.stringify(b)){
         document.getElementById("Anagram").innerHTML = "True";
       }
      else {
         for(var i=0;i<a.length;i++)
         if(a[i]!=b[i]){
         document.getElementById("Anagram").innerHTML = "False";
       }}
} 

// Count the consonant and vowels in the given sentence
function Count(){
   var a = document.getElementById("arr").value;
   var count = 0, vowels="",count1 = 0, consonants="";
   for (var i = 0; i < a.length; i++) 
{
      if (a.charAt(i).match(/[a-zA-Z]/) != null) 
   {
      // Check the Vowels in a sentence
         if (a.charAt(i).match(/[aeiouAEIOU]/))
            {vowels += a.charAt(i);
               count++;
               var Total_vowels = Array.from(new Set(vowels));
            }
      // Check the Consonants in a sentence
         if (a.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))
            {consonants += a.charAt(i);
               count1++;
               var Total_consonants = Array.from(new Set(consonants)); }
   }
}
   document.getElementById("Vowel").innerHTML = Total_vowels; 
   document.getElementById("labelforVowel").style.display="inline";
   document.getElementById("Consonant").innerHTML = Total_consonants;
   document.getElementById("labelforConsonant").style.display="inline";   
}

function Closure(){
   let Name = document.getElementById("Name").value
   function A(){
      let Ans = "Hi" +" " + Name + " " + "Happy to meet you !!";
      document.getElementById("Ans").innerHTML= Ans; 
   }
   return A();
}
// function Outerfunction (outervariable){
//    function innerfunction(innervariable){
//       let M = outervariable + innervariable
//       console.log(M);
//    }
//    innerfunction(5)
// }
// let x = Outerfunction(8);

function Date_Time(){
   let DT = new Date() ;
   document.getElementById("Date&Time").innerHTML = DT;
}

function Leap_year(){
   let year = document.getElementById("year").value;
   let check_year = new Date(year).getFullYear();
   let Y = /^[0-9]{4}$/;
   if(year == ""){
      document.getElementById("Leap").innerHTML = "Please enter year to check !!";
      document.getElementById("Leap").style.color="red"; 
   }
   else if(Y.test(year)){
      if((0 == check_year % 4) && (0 != check_year % 100) || (0 == check_year % 400)){
         document.getElementById("Leap").innerHTML = "It's a leap year";  
     }
     else{
         document.getElementById("Leap").innerHTML = "It's not a leap year";
     }
   }
   else{
      document.getElementById("Leap").innerHTML = "Enter the correct input";
      document.getElementById("Leap").style.color="red";
   }
}

function Compare_Date(){
   let a = document.getElementById("Date1").value 
   let b = document.getElementById("Date2").value
   if(a=="" || b == ""){
      document.getElementById("DifferenceinDays").innerHTML = "Please select two dates to compare";
      document.getElementById("DifferenceinDays").style.color="red";
   }
   else{
      a = new Date(a);
      b = new Date(b);
      const Date1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const Date2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      const MS_PER_DAY = 1000 * 60 * 60 * 24;
      const MS_PER_Hour = 1000 * 60 * 60;
      document.getElementById("DifferenceinDays").innerHTML = Math.floor((Date2 - Date1) / MS_PER_DAY) +" "+ "Days";
      document.getElementById("DifferenceinHours").innerHTML = Math.floor((Date2 - Date1) / MS_PER_Hour) +" "+ "Hours only";
   }
   
}

window.onload = function(){
   var seconds = 00,tens = 00,Interval;
   var A_tens = document.getElementById("tens");
   var A_seconds = document.getElementById("seconds");
   var Start = document.getElementById("Start");
   var Stop = document.getElementById("Stop");
   var Reset = document.getElementById("Reset");

   Start.onclick = function (){
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
   };
   Stop.onclick = function (){
      clearInterval(Interval);
   }
   Reset.onclick = function (){
      clearInterval(Interval);
      tens = "00";

      seconds = "00";
  
      A_tens.innerHTML = tens;
  
      A_seconds.innerHTML = seconds;
   };
   function startTimer() {
      tens++;
  
      if (tens <= 9) {
        A_tens.innerHTML = "0" + tens;
      }
  
      if (tens > 9) {
        A_tens.innerHTML = tens;
      }
  
      if (tens > 99) {
      
        seconds++;
  
        A_seconds.innerHTML = "0" + seconds;
  
        tens = 0;
  
        A_tens.innerHTML = "0" + 0;
      }
  
      if (seconds > 9) {
        A_seconds.innerHTML = seconds;
      }
    }
};

function Count_down(){
   let dateofcountdown = new Date("Jan 01, 2023, 12:00:00").getTime( );
   let countlimit = setInterval(function(){
       let now = new Date().getTime();
       let distance = dateofcountdown - now;
       let days = Math.floor(distance / (1000 * 60 * 60 *24));
       let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
       let minutes =  Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
       let seconds = Math.floor(distance % (1000 * 60) / (1000));
       document.getElementById("Count_down").innerHTML = "<b>" + days + "days" +" "+ hours + "hours" +" "+ minutes + "minutes" +" "+ seconds + "seconds" + "</b>" 
       if(distance < 0){
           clearInterval(countlimit);
           document.getElementById("Count_down").innerHTML = "Expired";
       }
   })
}

function Random_Number(){
   let Num1 = Number(document.getElementById("Lowerpoint").value);
   let Num2 = Number(document.getElementById("Higherpoint").value);
   if(Num1 == "" || Num2 == ""){
      document.getElementById("Random_Number").innerHTML = "Enter a number to get a random";
      document.getElementById("Random_Number").style.color="red";
   }
   else{
      let Random = Math.floor(Math.random() * (Num2 - Num1 + 1) + Num1);
      document.getElementById("Random_Number").innerHTML = Random;
   }
}

function Url(){
   document.getElementById("Url").innerHTML = "The current webpage url is" + " " + window.location.href;
}

function Email_validation(){
   var user = document.getElementById("EA").value
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(user == ""){
        document.getElementById("EAE").innerHTML=("There is no input");
        document.getElementById("EA").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("EAE").innerHTML=("");
            document.getElementById("EA").style = "border:solid green";
        }
        else{
            document.getElementById("EAE").innerHTML=("The given input is invalid");
            document.getElementById("EA").style = "border:solid red";
        }
    
    }
}

function Float_Integer(){
   let Input =Number(document.getElementById("Input").value);
   Input = parseFloat(Input);
   if (Input == ""){
      document.getElementById("Result_Float_Integer").innerHTML=("Please give a input to check");
      document.getElementById("Result_Float_Integer").style = "border:solid red";
   }
   else if(isNaN(Input)){
      document.getElementById("Result_Float_Integer").innerHTML=("Please give a input only in Number");
      document.getElementById("Result_Float_Integer").style = "border:solid red";
   }
   else{
      if(Number.isInteger(Input)){
         document.getElementById("Result_Float_Integer").innerHTML = Input +" "+ "is an Integer Number";
         document.getElementById("Result_Float_Integer").style = "border:solid green";}
      else{
         document.getElementById("Result_Float_Integer").innerHTML = Input +" "+ "is a float Number";
         document.getElementById("Result_Float_Integer").style = "border:solid green";}
   }

}

function Stack(){
      let str = document.getElementById("text").value;
      let stack = [];
      // push letter into stack
      for (let i = 0; i < str.length; i++) {
          stack.push(str[i]);
      }
      // pop letter from the stack
      let reverseStr = '';
      while (stack.length > 0) {
          reverseStr += stack.pop();
      }
      document.getElementById("Result_Stack").innerHTML = reverseStr;
   }

   
// Queue class
class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
}
function Queue_in_JS(){

   let n =Number(document.getElementById("Limit").value);
   if(n == ""){
      
      document.getElementById("Result_Queue").innerHTML=("Please give a input to check");
      document.getElementById("Result_Queue").style = "border:solid red";
   }
   else{
      // Create an empty queue of strings
      let q =  new Queue();
         
      // Enqueue the first binary number
      q.enqueue("1");
         
      // This loops is like BFS of a tree with 1 as root
      // 0 as left child and 1 as right child and so on
      while(n-- > 0)
      {
         // print the front of queue
         let s1 = q.front();
         q.dequeue();
         document.getElementById("Result_Queue").innerHTML= s1;
         console.log(s1);
            
         // Store s1 before changing it
         let s2 = s1;
            
         // Append "0" to s1 and enqueue it
         q.enqueue(s1 + "0");
            
         // Append "1" to s2 and enqueue it. Note that s2 contains
         // the previous front
         q.enqueue(s2 + "1");
      }
   }
}

function Image_dimension(){
   var fileInput = document.getElementById("image");
   var filePath = fileInput.value;
   var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
   if(filePath == ""){
      document.getElementById("width").innerHTML=("Please upload a file !");
      document.getElementById("width").style.color="red";}
   else {
      if(!allowedExtensions.exec(filePath)){
      document.getElementById("width").innerHTML=("Please upload in correct extension !");
      document.getElementById("width").style="border:solid red";}
      else{
      let Width = fileInput.width;
      let Height = fileInput.height;
      document.getElementById("width").innerHTML = "The width of the image : " + Width + "px";
      document.getElementById("width").style="border:solid green";
      document.getElementById("height").innerHTML = "The height of the image : " + Height + "px";
      document.getElementById("height").style="border:solid green";
   }
}
}

// import {Add} from './2.0';
// let Num1 = document.getElementById("a").value;
// let Num2 = document.getElementById("b").value;
// let H = Add(Num1,Num2);
// document.getElementById("Ans_import").innerHTML = H;

function White_space(){
   let input = document.getElementById("Input_text").value;
   if(input==""){
      document.getElementById("Result_White_space").innerHTML = "Enter yout text to remove white space";  
      document.getElementById("Result_White_space").style="border:solid red";  
   }
   else{
      input = input.replace (/\s+/g, '');
      document.getElementById("Result_White_space").innerHTML = input;
      document.getElementById("Result_White_space").style="border:solid green";
   }
}

function Date_Number(){
   let a = document.getElementById("Date").value 
   if(a==""){
      document.getElementById("Date_Display").innerHTML = "Please select a date to convert";
      document.getElementById("Date_Display").style.color="red";
   }
   else{
      a = new Date(a);
      const Date1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      document.getElementById("Date_in_Numbers").innerHTML = Date1;
      document.getElementById("Date_in_Numbers").style="border:solid green";
   }

}

function Convert_Base_64(){
   let string = document.getElementById("String").value;
   let encode64 = window.btoa(string);
   document.getElementById("Result_Base_64").innerHTML = encode64;
}
function Convert_String(){
   let string = document.getElementById("Base_64").value;
   let decode64 = window.atob(string);
   document.getElementById("Result_String").innerHTML = decode64;
}


function Replace_linebreak(){
   let input = document.getElementById("Input_Paragraph").value;
   if(input==""){
      document.getElementById("Result_Replace").innerHTML = "Enter yout text to remove white space";  
      document.getElementById("Result_Replace").style="border:solid red";  
   }
   else{
      let Input = input.split('\n').join('<br>');
      document.getElementById("Result_Replace").innerHTML = Input;
      document.getElementById("Result_Replace").style="border:solid green";
   }
}

function File_extension(){
   let input = document.getElementById("Input_file").value;
   if(input==""){
      document.getElementById("Result_Find_extension").innerHTML = "Drag your file to know the extension";  
      document.getElementById("Result_Find_extension").style="border:solid red";  
   }
   else{
      let Input = input.split(".").pop();
      document.getElementById("Result_Find_extension").innerHTML = 'The Extension file is :' + "  " + Input;
      document.getElementById("Result_Find_extension").style="border:solid green";
   }
}

function Range_values(){ 
   let a = Number (document.getElementById("From").value);
   let b = Number(document.getElementById("To").value);
   range(a,b) 
function* iterate(a, b) {
   for (let i = a; i <= b; i += 1) {
     yield i
   }
 }
 function range(a, b) {
     if(typeof a === 'string') {
         let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map(n => String.fromCharCode(n));
         document.getElementById("Result_values").innerHTML = result;
     }
     else {
         let result = [...iterate(a, b)];
         document.getElementById("Result_values").innerHTML = result;
     }
 }
}

function DOB_validation(){
   let a = document.getElementById("DOB").value 
   if(a==""){
      document.getElementById("Result_DOB_validation").innerHTML = "Please select a date to convert";
      document.getElementById("Result_DOB_validation").style="border:solid red";
   }
   else{
      a = new Date(a);
      let b = new Date();
      const DOB = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const Current_Date = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      const MS_PER_DAY = 1000 * 60 * 60 * 24;
      const Difference = Math.floor((Current_Date - DOB) / MS_PER_DAY);
   
      if(Difference>6574.5 && Difference<10957.5){
         document.getElementById("Result_DOB_validation").innerHTML="Happy to meet you !!"
         document.getElementById("Result_DOB_validation").style="border:solid green";
      }
      else if(Difference<6574.5){
         document.getElementById("Result_DOB_validation").innerHTML="You are MINOR !!"
         document.getElementById("Result_DOB_validation").style="border:solid red";
      }
      else if(Difference>10957.5){
         document.getElementById("Result_DOB_validation").innerHTML="You are too OLD !!"
         document.getElementById("Result_DOB_validation").style="border:solid red";
      }
   }
}

