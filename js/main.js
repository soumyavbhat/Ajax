(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var F55 = document.querySelector("#F55"),
    F56 = document.querySelector("#F56"),
    R58 = document.querySelector("#R58"),
    modelName = document.querySelector(".modelName"),
    priceInfo = document.querySelector(".priceInfo"),
    modelDetails = document.querySelector(".modelDetails"),
    theImages = document.querySelectorAll('.data-ref');


function changeDetails(){
  let objectIndex = carData[this.id];
  console.log("works");

  modelName.firstChild.nodeValue = objectIndex.headline;
  priceInfo.firstChild.nodeValue = objectIndex.price;
  modelDetails.firstChild.nodeValue = objectIndex.text;

if(this.id=='F55')
{
  F55.classList.remove("active");
    F56.classList.remove("active");
    R58.classList.remove("active");

    F55.classList.add("active");
    F56.classList.add("nonActive");
    R58.classList.add("nonActive");
}
else if(this.id=='F56')
{
  F55.classList.remove("active");
    F56.classList.remove("active");
    R58.classList.remove("active");

    F55.classList.add("nonActive");
    F56.classList.add("active");
    R58.classList.add("nonActive");
}

else if(this.id=='R58')
{
  F55.classList.remove("active");
    F56.classList.remove("active");
    R58.classList.remove("active");

    F55.classList.add("nonActive");
    F56.classList.add("nonActive");
    R58.classList.add("active");
}

}

theImages.forEach(function(image, index){
        image.addEventListener('click', changeDetails, false);
      });

changeDetails.call(document.querySelector("#F55"));

})();
