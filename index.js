// loading 
document.querySelectorAll(".loading").forEach((e)=>{
  document.body.onload = ()=>{
    e.style.opacity = "0";
    setTimeout( ()=>{
      e.style.display = "none";
    } , 700)
  }
  
})
// declearing objects
const productsArr = [
  (whiteTent = {
    imageSrc: `url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg")`,
    name: `White Tent`,
    price: `$ 200.00 USD`,
  }),
  (giftCart = {
    imageSrc: `url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg")`,
    name: `Gift Card`,
    price: `$ 25.00 USD`,
  }),
  (tinCoffee = {
    imageSrc: `url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg")`,
    name: `Tin Coffee Tumbler`,
    price: `$ 35.00 USD`,
  }),
  (blueCanvasPack = {
    imageSrc: `url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg")`,
    name: `Blue Canvas Pack`,
    price: `$ 270.00 USD`,
  }),
  (greenCanvasPack = {
    imageSrc: `url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg")`,
    name: `Green Canvas Pack`,
    price: `$ 270.00 USD`,
  }),
  (whiteShoe = {
    imageSrc: `url("https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80")`,
    name: `White Shoe`,
    price: `$ 120.00 USD`,
  }),
];
// set the name of featuredItem
let featuredItemObjected = tinCoffee;
// set the featured item object values to featured item values
let featuredItemObj = {
  imageSrc: featuredItemObjected.imageSrc,
  name: featuredItemObjected.name,
  price: featuredItemObjected.price,
};
// set the featured item object values to featured item values in the HTML
(function () {
  featuredItem.querySelector(".featuredItemPic").style.backgroundImage =
    featuredItemObj.imageSrc;
  featuredItem.querySelector(".featureItemName").innerText =
    featuredItemObj.name;
  featuredItem.querySelector(".featureItemPrice").innerText =
    featuredItemObj.price;
})();

/* products section */
productsArr.forEach((product) => {
  const pro = document.createElement("div");
  productsInShop.querySelector(".container").appendChild(pro);
  pro.classList.add("pro");
  pro.innerHTML = `
    <div class="img"></div>
    <span class="name">${product.name}</span>
    <span class="price">${product.price}</span>
    <div class="add" id="add">
      <button class="btn adder">Add Now</button>
    </div>
	`;
  pro.querySelector(".img").style.backgroundImage = product.imageSrc;
});
const inputs = document.querySelectorAll("input.input");
productsInShop.querySelectorAll("button.btn").forEach((btn, index) => {
  btn.onclick = (_) => {
    count = document.createElement("div");
    result.appendChild(count);
    count.classList.add("count");
    count.innerHTML = `
      <div>
      <div class="img" style='background: ${productsArr[index].imageSrc}'></div>
      <div class="text">
      <h5>${productsArr[index].name}</h5>
      <h6>${productsArr[index].price}</h6>
      </div>
      </div>
      <a class="remove">Remove</a>
      `;
      const toggleNot = (_) => {
      let counts = document.querySelectorAll(".count").length;
      if (counts > 0) {
        not.style.display = "none";
      } else {
        not.style.display = "block";
      }
      cart.setAttribute("data-count" , counts)
    };
    toggleNot();
    showAside();
    // console.log(index);
    // console.log(productsArr[index].imageSrc);
    document.querySelectorAll(".remove").forEach(
      (e) =>
      (e.onclick = (_) => {
        e.closest(".count").remove();
        toggleNot();
      })
    );

  };
});