// var res = document;

// console.log(document.childNodes[1].childNodes[1].childNodes[1].childNodes[0].nodeType);

// var d = document.getElementById("humpty");

// console.log(d.childNodes)

// var d = document.getElementById("humpty");

// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//   if (d.childNodes[i].nodeType === 1) {
//     pCounter++;
//   }
//   if (pCounter === 2) {
//     d.childNodes[i].style.backgroundColor = "red";
//     break;
//   }
// }


// var d = document.getElementById("humpty");

// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//   if (d.childNodes[i].nodeType === 1) {
//     pCounter++;
//   }
//   if (pCounter === 2) {
//     // d.childNodes[i].style.backgroundColor = "red";
//     console.log(d.childNodes[i].className);
//     if(d.childNodes[i].className == 'visible'){
//         d.childNodes[i].className = 'invisible'
//     }
//     if(d.childNodes[i].className == 'invisible'){
//         d.childNodes[i].className = 'visible'
//     }
//     break;
//   }
// }


// var d = document.getElementById("humpty");


// console.log(d.firstChild);

// console.log(d.lastChild);

// console.log(d.parentNode);

// console.log(d.parentNode.parentNode.parentNode.parentNode);

// console.log(d.childNodes[3].nextSibling);


// console.log(d.childNodes[3].previousSibling);



// console.log(d.childNodes[1].previousSibling);

// console.log(d.childNodes[1].nextSibling);




// var d = document.getElementById("humpty");

// // console.log(d.childNodes[1].nodeName);

// // console.log(d.childNodes[0].nodeName);


// console.log(d.childNodes[0].childNodes[0].nodeValue);
// console.log(d.childNodes[0].innerHTML);



// var pElements = document.getElementsByTagName("p");

// var len = pElements.length;

// for(var i =0;i<len;i++){
//     if(pElements[i].innerHTML == ""){
//         pElements[i].innerHTML = "Coming Soon";
     
//     }
// }

// console.log(pElements)


// var d = document.getElementById("humpty");

// var res = d.hasAttribute('id');
// var res2 = d.hasAttribute('class');

// console.log(res);
// console.log(res2);



// var d = document.getElementById("humpty");

// console.log(d);

// var res = d.getAttribute('id');


// console.log(res);




var d = document.getElementById("humpty");

console.log(d);

d.setAttribute("class","special");

var checkAtt = d.attributes;

console.log(checkAtt[0].nodeName)
console.log(checkAtt[0].nodeValue)