(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var F55 = document.querySelector("#F55"),
    F56 = document.querySelector("#F56"),
    R58 = document.querySelector("#R58"),
    modelName = document.querySelector(".modelName"),
    priceInfo = document.querySelector(".priceInfo"),
    modelDetails = document.querySelector(".modelDetails");

F55.addEventListener('click', opacity1, false);
F56.addEventListener('click', opacity2, false);
R58.addEventListener('click', opacity3, false);


function opacity1()
{
  F55.classList.remove("active");
  F56.classList.remove("active");
  R58.classList.remove("active");

  F55.classList.add("active");
  F56.classList.add("nonActive");
  R58.classList.add("nonActive");
}

function opacity2()
{
  F55.classList.remove("active");
  F56.classList.remove("active");
  R58.classList.remove("active");

  F55.classList.add("nonActive");
  F56.classList.add("active");
  R58.classList.add("nonActive");
}

function opacity3()
{
  F55.classList.remove("active");
  F56.classList.remove("active");
  R58.classList.remove("active");

  F55.classList.add("nonActive");
  F56.classList.add("nonActive");
  R58.classList.add("active");
}

function changeDetails(){
  let objectIndex = carData[this.id];
  console.log("works");

  modelName.firstChild.nodeValue = objectIndex.headline;
  priceInfo.firstChild.nodeValue = objectIndex.price;
  modelDetails.firstChild.nodeValue = objectIndex.text;

}

F55.addEventListener('click', changeDetails, false);
F56.addEventListener('click', changeDetails, false);
R58.addEventListener('click', changeDetails, false);

changeDetails.call(document.querySelector("#F55"));

})();
