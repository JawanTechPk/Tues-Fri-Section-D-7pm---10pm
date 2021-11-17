// if (dayOfWk === "Sat" || dayOfWk === "Sun") {
//   alert("Whoopee!");
// } else if (dayOfWk === "Fri") {
//   alert("TGIF!");
// } else {
//   alert("Shoot me now!");
// }

// var dayOfWk = "Sun"

// switch(dayOfWk){
//     case "Sat":
//         alert("Whoopee!");
//         break;
//     case "Sun":
//         alert('Whoopee!');
//         break;
//     case "Fri":
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");
// }





// var userInput = prompt("Enter value");

// switch (userInput) {
//   case "sat":
//     alert("It is saturday");
//     break;

//   case "sun":
//     alert("It is sunday");
//     break;

//   default:
//     alert("It is a weekday");
// }

// var arr  =[1,2,3,4,5,65,6,7,7]

// for(var i=0; i<arr.length;i++){
//     console.log(arr[i])
// }

// var i = 0;
// while(i < 3){
//     console.log(i);
//     i++;
// }

// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 0);


// var firstRamdan = new Date("april 1, 2022");
// // console.log(firstRamdan)

// var newDate = new Date();

// var milifirstRamdan = firstRamdan.getTime();

// var milinewDate = newDate.getTime();

// var diff = milifirstRamdan - milinewDate;

// var noDays = Math.round(diff / (1000*60*60*24))

// console.log(noDays);

// var firstRamdan = new Date("april 1, 2022");
// // console.log(firstRamdan)

// var newDate = new Date();

// var milifirstRamdan = firstRamdan.getTime();

// var milinewDate = newDate.getTime();

// var diff = milifirstRamdan - milinewDate;

// var noDays = Math.round(diff / (1000*60*60*24))

// console.log(noDays);






var firstRamdan = new Date("april 1, 2022");
// console.log(firstRamdan)

var newDate = new Date();

var milifirstRamdan = firstRamdan.getTime();

var milinewDate = newDate.getTime();

var diff =   milinewDate - milifirstRamdan;

var noDays = Math.round(diff / (1000*60*60*24))

var update = Math.abs(noDays)

console.log(noDays);

// q14

// var customerName = "abc company";
// var month = new Date();
// var currentMonth = month.getMonth();
// console.log(currentMonth)
// var arr = ["jan","feb" ,"march" ,"april" ,"may" ,"june" ,"july" ,"august" 
// ,"september" ,"oct" , "nov" ,"dec"]
//  var numberOfUnit = 34;
//  var latePaymentCharges = 300;
//  var perUnitCharges = 16


//  console.log(customerName);
//  console.log("Month " + arr[currentMonth]);
//  console.log("number of unit  " + numberOfUnit);
//  console.log("per unit charges  " + perUnitCharges);

//  var dueDateAmount = perUnitCharges * numberOfUnit;
//  console.log("amount payable within due date  " + dueDateAmount);
//  var afterDueDateAmount = perUnitCharges * numberOfUnit + latePaymentCharges;
//  console.log("amount payable after due date   " + afterDueDateAmount);



// var userinput = prompt("Enter the palindrome : ");
// var x1 = userinput.charAt(userinput.length - 1);
// var x2 = userinput.charAt(userinput.length - 2);
// var y1 = userinput.charAt(0);
// var y2 = userinput.charAt(1);
// if(x1 == y1 && x2 == y2){
//     alert("This is an palindrome");
// }
// else{
//     alert("Thi is not a palindrome");
// }
// var username;
// console.log(username)


var value = "rotator";

var res = "";

for(var i = value.length-1; i>=0;i--){

    res=res + value[i]
}
console.log(res)

if(value == res){
    alert('its phalindrome')
}

else{
    alert('its not phalindrome') 
}