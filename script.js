//from Code Boxx

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }

    document.cookie = escape(name) + "=" + 
        escape(value) + expires + "; path=/";
}


function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
      
      document.querySelector('button').onclick = function() {
    var image = document.getElementById('container');
    image.style.width = '156px';
    image.style.height = '156px';
}
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var cart = {

  hPdt : null,
  hItems : null,
  items : {},
  iURL : "Images/",

  save : () => {

    localStorage.setItem("cart", JSON.stringify(cart.items));
  },

  load : () => {

    cart.items = localStorage.getItem("cart");

    if (cart.items == null) { cart.items = {}; }

    else { cart.items = JSON.parse(cart.items); }
  },

  nuke : () => { if (confirm("Empty cart?")) {

    cart.items = {};
    localStorage.removeItem("cart");
    cart.list();
  }},

  init : () => {

    cart.hPdt = document.getElementById("cart-products");
    cart.hItems = document.getElementById("cart-items");

    cart.hPdt.innerHTML = "";
    let template = document.getElementById("template-product").content,
        p, item, part;
    for (let id in products) {

      p = products[id];
      item = template.cloneNode(true);
      item.querySelector(".p-img").src = cart.iURL + p.img;
      item.querySelector(".p-name").textContent = p.name;
      item.querySelector(".p-desc").textContent = p.desc;
      item.querySelector(".p-price").textContent = "£" + p.price.toFixed(2);
      item.querySelector(".p-add").onclick = () => { cart.add(id); };
      cart.hPdt.appendChild(item);
    }

    cart.load();

    cart.list();
  },

  list : () => {

    cart.hItems.innerHTML = "";
    let item, part, pdt, empty = true;
    for (let key in cart.items) {

      if (cart.items.hasOwnProperty(key)) { empty = false; break; }
    }

    if (empty) {

      item = document.createElement("div");
      item.innerHTML = "Cart is empty";
      cart.hItems.appendChild(item);
    }

    else {

      let template = document.getElementById("template-cart").content,
          p, total = 0, subtotal = 0;

      for (let id in cart.items) {

        p = products[id];
        item = template.cloneNode(true);
        item.querySelector(".c-del").onclick = () => { cart.remove(id); };
        item.querySelector(".c-name").textContent = p.name;
        item.querySelector(".c-qty").value = cart.items[id];
        item.querySelector(".c-qty").onchange = function () { cart.change(id, this.value); };
        cart.hItems.appendChild(item);

        subtotal = cart.items[id] * p.price;
        total += subtotal;
      }


      item = document.createElement("div");
      item.className = "c-total";
      item.id = "c-total";
      item.innerHTML ="TOTAL: £" + total;
      setCookie("total", total, 30);
      cart.hItems.appendChild(item);

      item = document.getElementById("template-cart-checkout").content.cloneNode(true);
      cart.hItems.appendChild(item);
    }
  },

  add : (id) => {

    if (cart.items[id] == undefined) { cart.items[id] = 1; }

    else { cart.items[id]++; }

    cart.save(); cart.list();


  },

  change : (pid, qty) => {

    if (qty <= 0) {

      delete cart.items[pid];
      cart.save(); cart.list();
    }

    else {

      cart.items[pid] = qty;
      var total = 0;
      for (let id in cart.items) {

        total += cart.items[id] * products[id].price;
        document.getElementById("c-total").innerHTML ="TOTAL: £" + total;
      }
    }

  },

  remove : (id) => {

    delete cart.items[id];
    cart.save();
    cart.list();
  },

};

window.addEventListener("DOMContentLoaded", cart.init);


function book() {

  if (confirm("Book Test Drive?"));
  
  function OK() {
    
    if (confirm("Test Drive confirmed and booked"));
    
  }
}

function cookieFunction1() {

  let x = document.getElementById("cartItem").innerHTML;
  setCookie("car", x, 30);

}

function cookieFunction2() {

  let x = getCookie("car");
  document.getElementById("cartItem").innerHTML = x;
  let y = getCookie("total");
  document.getElementById("cartPrice").innerHTML = "£ " + y;
  
}
