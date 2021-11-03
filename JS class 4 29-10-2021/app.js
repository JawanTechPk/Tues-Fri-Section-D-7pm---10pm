
// var myPet = "Snake";
// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];
// for(var i = 0; i < 6;i++){
//     if(myPet == pets[i]){
//         alert('Its one of your pet'+i)
//     }
// }


// for(var i = 0;i < 4;i++){
//     console.log(i);
// }



// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

// for(var i = 0;i < 6;i++){
//     console.log(pets[i]);
//     }
    

// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

// for(var i = 0;i < 6;i++){
//         if(pets[i] == 'Tiger'){
//             console.log('You have found the tiger',i)
//         }
//         else{
//             console.log('You have not found the tiger',i)
//         }
//     }
    
// var foundMatch = 'no';
// var myPet = "Horse";
// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

// for(var i = 0;i < 6;i++){
//         if(pets[i] == myPet){
//             foundMatch = 'yes'
//             console.log('You have found the tiger',i)
//         }
//     }

//     if(foundMatch == 'no'){
//         console.log('Not on the list')
//     }


// var foundMatch = false;
// var myPet = "Horse";
// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

// for(var i = 0;i < 6;i++){
//         if(pets[i] == myPet){
//             foundMatch = true
//             console.log('You have found the tiger',i)
//         }
//     }

//     if(foundMatch == false){
//         console.log('Not on the list')
//     }


// var pets = ["fish", "ferret",'Tiger','Snake','Lion','Elephant'];

// for(var i = 0;i < 6;i++){
//         if(pets[i] == 'Tiger'){
//             console.log('You have found the tiger',i)
//         break;
//         }
//         else{
//             console.log('You have not found the tiger',i)
//         }
//     }


// for(var i = 0;i<4;i++){
//     console.log(i);
// }

// var pets = ["fish", "ferret",'Tiger','Snake','Lion'
// ,'Elephant',"Eagle","Monkey","Donkey","Birds"
// ,"Parrot"];
// var arrLnth = pets.length
// // console.log(typeof pets.length)
// for(var i = 0;i < arrLnth;i++){
//         if(pets[i] == 'Tiger'){
//             console.log('You have found the tiger',i)
//         // break;
//         }
//         else{
//             console.log('You have not found the tiger',i)
//         }
//     }


// for(var i = 0;i<2;i++){
//     for(var j= 0 ; j < 2;j++ ){
//         console.log('this is i : ',i,"this is j :",j)
//     }
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// var fullName=[];


// for(var i = 0;i<firstNames.length;i++){

//     for(var j= 0 ; j < lastNames.length;j++ ){
       
//         // console.log(firstNames[i]+lastNames[j]);
//         fullName.unshift(firstNames[i]+lastNames[j]);
     
//     }

// }

// console.log(fullName)


// var userName = 'khan';

// userName = userName.toUpperCase();

// console.log(userName)


// var userName = 'KHAN';

// userName = userName.toLowerCase();

// console.log(userName);


// var userName = 'KHAN';

// var firstLetter = userName.slice(0,1);
// var remainLetter = userName.slice(1);

// firstLetter = firstLetter.toUpperCase();
// remainLetter = remainLetter.toLowerCase();

// console.log(firstLetter+remainLetter);

// var userPet = prompt('Enter Your Pet Name')

// userPet = userPet.toLowerCase();

// var pets = ["fish", "ferret",'tiger','snake','lion'
// ,'elephant',"eagle","monkey","donkey","birds"
// ,"parrot"];

// var arrLnth = pets.length


// for(var i = 0;i < arrLnth;i++){
//         if(pets[i] == userPet){
//             console.log('You have found the tiger',i)
//         }
        
//     }


// var pets = [];

// var userPet = prompt('Enter PEt Name');
// pets.push(userPet.toLowerCase()) 

// console.log(pets)

var monthArr = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct'
,'nov','dec'];

var userMonth = prompt('Enter Month name');


for(var i = 0;i < monthArr.length;i++){
        if(monthArr[i] == userMonth.slice(0,3).toLowerCase()){
            console.log('You have found the Month',i)
        } 
    }