let data = JSON.parse(localStorage.getItem("prodetaails"));

function appenditem(d) {
  //image of the product
  let imgebox = document.getElementById("productimgeBox");
  let img = document.createElement("img");
  img.setAttribute("class", "productImg");
  img.src = d.img;
  imgebox.append(img);

  //product details
  let div = document.createElement("div");
  let detailsBox = document.getElementById("productDetailsBox");
  let h1 = document.createElement("h3");
  h1.innerHTML = d.name;
  h1.setAttribute("class", "prodcutname");

  //rating
  let rating = document.createElement("div");
  rating.innerHTML = `<p><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i>
<span> ( ${Math.round(Math.random() * 1000)} ) </span></p>
  `;
  rating.setAttribute("class", "prorating");

  //price
  let price = document.createElement("p");
  price.innerHTML = `<strong>&#x20B9;  ${d.price} </strong> <span>  MRP <del>${
    d.price - 10
  }</del></span>
  <p>Inclusive of all taxes</p>`;
  price.setAttribute("class", "productprice");

  let ul = document.createElement("ul");
  ul.innerHTML =
    "<li>A Simple-to-Use: Private Cloud for Everyone - 24/7 file server for your household to store, share, and backup personal data</li> <li>Easy-to-Use: Award-winning DiskStation Manager (DSM) brings intuitive operation flow and reduces learning curve</li> <li>Seamless File Sharing: Access and share data with any WindowsmacOS, and Linux computers or mobile devices</li> <li>On-the-Fly Streaming: Integrated media server to support multimedia content streaming</li> <li>Anytime, Anywhere: Freely access private cloud files on-the-go and back up mobile photos with iOS and Android apps</li> <li>Anytime, Anywhere: Freely access private cloud files on-the-go and back up mobile photos with iOS and Android apps</li><li>A Simple-to-Use: Private Cloud for Everyone - 24/7 file server for your household to store, share, and backup personal data</li> <li>Easy-to-Use: Award-winning DiskStation Manager (DSM) brings intuitive operation flow and reduces learning curve</li>  <li> Manager (DSM) brings intuitive operation flow and reduces learning curve</li>";

  //small box imges
  let smalimg = document.createElement("img");
  smalimg.src = d.img;
  let smallbox = document.getElementById("smallimgbox");
  smallbox.append(smalimg);
  smallbox.setAttribute("class", "smallboximges");

  div.append(h1, rating, price, ul);
  detailsBox.append(div);



 
   let cartBox = document.getElementById("cartboxPrice");
         let priceLeft = document.createElement("p");
         priceLeft.innerHTML = `<strong>&#x20B9;  ${d.price} </strong>`;
        priceLeft.setAttribute("class", "productpriceleft");
  
  let btnDiv = document.createAttribute('div')
 

  let btn = document.createElement("button");
         btn.textContent = "Add To Cart";
         btn.addEventListener("click", function () {
          //  window.open("cart.html");
             window.location.href = "cart.html";
         addToCart(d);
  });
  btn.setAttribute("class", "addtocartButton");

     cartBox.append(priceLeft,btn);
}
appenditem(data);

//button

let btn = document.createElement("button");
btn.textContent = "Add To Cart";
btn.addEventListener("click", function () {
  alert(`Product added to cart\n${d.name}`);
  addToCart(d);
});
btn.setAttribute("class", "addtocartButton");


//==========================================================add to cart
function addToCart(d) {
  // console.log(d);
  let cart = [];
  cart = localStorage.getItem("cart");
  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  cart.push(d);
  localStorage.setItem("cart", JSON.stringify(cart));
}

//=====================================================quantity
 let count = 0;
 let addBtn = document.getElementById("plus");
 let minBtn = document.getElementById("minus");

 function increment() {
   count++;
   document.querySelector("#qtyinput").value = count;
 }

 function decrement() {
   count--;
   document.querySelector("#qtyinput").value = count;
   if (count == 1) {
      minBtn.removeEventListener("click", decrement); //stop
   }
 }
 addBtn.addEventListener("click", increment);
 minBtn.addEventListener("click", decrement);



//  if (localStorage.getItem("cart") === null) {
//    // at cart is null it will add []
//    localStorage.setItem("cart", JSON.stringify([]));
//  }

//  function addToCart(p) {
//    //console.log(p)
//    let cart_data = JSON.parse(localStorage.getItem("cart"));
//    cart_data.push(p);

//    localStorage.setItem("cart", JSON.stringify(cart_data)); //updated cart data added to cart
//  }
