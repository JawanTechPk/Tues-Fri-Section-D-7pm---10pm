// var firstNum = +prompt("Enter first number");
// var secondNum = +prompt("Enter second number");
// var operator = prompt("Enter operator")

// var result;
// if(operator == "+"){
//     result = firstNum + secondNum;
// }
// else if(operator == "-"){
//     result = firstNum - secondNum;
// }
// else if(operator == "*"){
//     result = firstNum * secondNum;
// }
// else if(operator == "/"){
//     result = firstNum / secondNum;
// }
// else{
//     alert("Enter valid operator")
// }

// alert("Answer ===> " + result)




// var country = prompt('Enter Your Country Name');

// if(country == 'Pakistan'){
//     var place = prompt('Enter Your Fav Place Name');
//     if(place == 'Hunza'){
//         alert('Nice Choice')
//     }
//     else if(place == 'Gilgit'){
//         alert('Very Cold Place')
//     }
//     else{
//      alert('Ver Nice Place')   
//     }
// }
// else{
//     alert('Sorry No service available')
// }



// var citiesArr = ["atlanta","Los Angeles","Chicago",34,true];
// var userOne = ['Umair',25,'karachi']



// console.log(citiesArr[1]);



// var userName = "umair";

// userName = 'khan'


// var pets = [];


// pets[0] = 'Lion';
// pets[1] = 'Tiger';
// pets[2] = 'Snake';


// pets.pop()
// pets.pop()
// pets.push("fish", "ferret")
// console.log(pets);


// var pets = ["fish", "ferret",'Tiger'];

// pets.shift();


// pets.unshift('Lion',23)
// console.log(pets);



// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];


// pets.splice(3,0,'Eagle',787);
// console.log(pets);

// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];


// pets.splice(3,2,'Eagle',787);
// console.log(pets);


// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];


// pets.splice(0,3);
// console.log(pets);


// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

// var minePets = pets.slice(1,5);
// console.log(minePets);


// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

// var minePets = pets.slice(1);
// console.log(minePets);



// for(var i = 0;i < 4;i++){
//     console.log(i);
// }



// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

// for(var i = 0;i < 6;i++){
//     console.log(pets[i]);
//     }
    

var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

for(var i = 0;i < 6;i++){
        if(pets[i] == 'Tiger'){
            console.log('You have found the tiger',i)
        }
        else{
            console.log('You have not found the tiger',i)
        }
    }
    
    