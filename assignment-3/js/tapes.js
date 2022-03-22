// tapes.js

// assign three tapes and their info to variables

let primitiveTape = new Tape('Primitive Man', 'caustic', 'doom metal', 24, 13, 6.66);
let luzTape = new Tape('Luz De Gas', 'EP 2020', 'diy punk', 12, 4, 7.55);
let siifuTape = new Tape('Pink Siifu & Fly Anakin', 'FlySiifu\'s', 'hip hop', 20, 7, 8.25);

// update html

let info1 = '<h2>' + primitiveTape.band + ', <span class="title">' + primitiveTape.title + '</span></h2><p> ' + '(' + primitiveTape.genre + ')' + ' tapes left: ';
  info1 += primitiveTape.checkQuantity() 
  info1 += ', on sale for <span class="sale">$';
  info1 += primitiveTape.checkPrice()
  info1 += '</span> <span class="markdown">marked down from $' + primitiveTape.price;
  info1 += '!</span></p>'
  
// create template for tapes objects

function Tape(band, title, genre, quantity, preorder, price) {
  this.band = band;
  this.title = title;
  this.genre = genre;
  this.quantity = quantity;
  this.preorder = preorder;
  this.price = price;
  this.checkQuantity = function() { // check for how many tapes are left over after preorders
    return this.quantity - this.preorder;
  };
  this.checkPrice = function() { // converting original price to sale price
    let sale = this.price * .8;
    return sale.toFixed(2); // return answer rounded to two decimals
  }
};

// create tape objects
// first tape object

let elTape1 = document.getElementById('tape1');
elTape1.innerHTML = info1;

// trying out template string

// update html

let info2 = `<h2>${luzTape.band}, <span class="title"> ${luzTape.title} </span></h2><p>(${luzTape.genre}) tapes left: `;
    info2 += luzTape.checkQuantity();
    info2 += ', on sale for <span class="sale">$';
    info2 += luzTape.checkPrice()
    info2 += '</span> <span class="markdown">marked down from $' + luzTape.price;
    info2 += '!</span></p>'

// second tape object

let elTape2 = document.getElementById('tape2');
elTape2.innerHTML = info2;

//update html

let info3 = `<h2>${siifuTape.band}, <span class="title"> ${siifuTape.title} </span></h2><p>(${siifuTape.genre}) tapes left: `;
    info3 += siifuTape.checkQuantity();
    info3 += ', on sale for <span class="sale">$';
    info3 += siifuTape.checkPrice()
    info3 += '</span> <span class="markdown">marked down from $' + siifuTape.price;
    info3 += '!</span></p>'

// third tape object

let elTape3 = document.getElementById('tape3');
elTape3.innerHTML = info3;