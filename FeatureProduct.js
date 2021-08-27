let FeatureDealData = [
  {
    name: "Beyerdynamic DT 770 Pro 80 Ohm Studio Reference Closed-Back Headphones",
    price: 15402,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/A7NT_1_201608251734843801.jpg",
  },
  {
    name: "Apple i phne 12 64 GB black unlocked",
    price: 178079,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/75-113-706-S02.jpg",
  },

  {
    name: "Corsair K63 Mechanical gamingpc 112ssd",
    price: 9523,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/83-360-084-01.jpg",
  },
  {
    name: "Blue Yeti X Microphone - Blackout",
    price: 116506,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/86-408-009-V01.jpg",
  },
];

if (localStorage.getItem("FeatureDealData") == null) {
  localStorage.setItem("FeatureDealData", JSON.stringify(FeatureDealData));
}

function appendpro() {
  let data = JSON.parse(localStorage.getItem("FeatureDealData"));
  let mainDiv = document.getElementById("FeatureDeal_products");
  data.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    p_name.style.fontSize = "14px";
    p_name.style.color = "Black";
    p_name.style.padding = "0";
    p_name.style.overflow = "hidden";
    p_name.setAttribute("class", "FDname");

    let rating = document.createElement("p");
    rating.setAttribute("id", "FDrate");
    rating.innerHTML = `<p><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i><span> ( ${Math.round(
      Math.random() * 1000
    )} )</span></p>`;

    let p_Price = document.createElement("ul");
    p_Price.innerHTML = "₹ " + el.price;
    p_Price.style.fontSize = "22px";
    p_Price.setAttribute("id", "FDprice");

    let img = document.createElement("img");
    img.src = el.img;
    img.setAttribute("class", "FDimg");
    div.append(img, rating, p_name, p_Price);
    mainDiv.append(div);

    //   img.addEventListener("click", function () {
    //     window.location.href = "producdetail.html";
    //   });
    div.addEventListener("click", function () {
      window.location.href = "showProductdetails.html";
      showdetail(el);
    });
  });
}
appendpro();

function showdetail(el) {
  localStorage.setItem("prodetaails", JSON.stringify(el));
}
