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
for(var i=0; i<theImages.length; i++)
{
  theImages[i].classList.add("nonActive");
}
this.classList.remove("nonActive");

  modelName.firstChild.nodeValue = objectIndex.headline;
  priceInfo.firstChild.nodeValue = objectIndex.price;
  modelDetails.firstChild.nodeValue = objectIndex.text;


}

theImages.forEach(function(image, index){
        image.addEventListener('click', changeDetails, false);
      });

changeDetails.call(document.querySelector("#F55"));

})();
