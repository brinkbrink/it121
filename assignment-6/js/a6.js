//a6.js
//changing second list item's class to confirmed
var fungi = document.getElementsByTagName('li'); //finding nodelist of li tag elements and putting in list/array var
if(fungi.length > 0){ //confirming there are elements in the array/list
    var el = fungi[1];//assigning el to second item in list/array of fungi
    el.className = 'confirmed';//changing second item in list's class to confirmed
}
//changing all list items with class "none" to class "maybe"
var noneItems = document.querySelectorAll('li.none'); //finding nodelist of li tag elements with class of none and putting in list/array var
if (noneItems.length > 0) { //confirming there are elements in the array/list
  for (var i = 0; i < noneItems.length; i++) { //loop through each item in array/list
    noneItems[i].className = 'maybe'; //changing value of class attribute to maybe
  }
}
//changing date in fifth list item
var itemCinco = document.getElementById('cinco'); //getting the fifth element (cinco)
var elText  = itemCinco.firstChild.nodeValue;  //putting the text of that element in a variable elText
elText = elText.replace('Craterellus tubaeformis / 47.838608, -122.983179 / April 15', 'Craterellus tubaeformis / 47.838608, -122.983179 / March 17');  //create text to reflect different date
itemCinco.firstChild.nodeValue = elText;  //change text

//creating new list item
var newLi = document.createElement('li'); //creating new item and storing in variable newLi
var newFun = document.createTextNode('Hericium erinaceus / 47.036369, -121.498554 / April 1');//creating textnode and storing in var newFun
newLi.appendChild(newFun); //attaching new item and its content to eachother
var pos = document.getElementsByTagName('ul')[0]; //getting position for new item
pos.appendChild(newLi); //putting new item into position