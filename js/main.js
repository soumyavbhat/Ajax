(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

var F55 = document.querySelector("#F55"),
    F56 = document.querySelector("#F56"),
    R58 = document.querySelector("#R58"),
    model = document.querySelector(".modelName"),
    priceInfo = document.querySelector(".priceInfo"),
    details = document.querySelector(".modelDetails"),
    theImages = document.querySelectorAll('.data-ref');
const httpRequest = new XMLHttpRequest();


    function getCarData(){
if(!httpRequest)
{
  alert("Browser old");
  return false;
}

httpRequest.onreadystatechange = processRequest;
httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
httpRequest.send();
    }

    function processRequest() {
      let reqIndicator = document.querySelector('.request-state');
      reqIndicator.textContent = httpRequest.readyState;
      debugger;

      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) { // 200 means everything is awesome
          let data = JSON.parse(httpRequest.responseText);

          processResult(data);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }

function processResult(data){
const { modelName, pricing, modelDetails} = data;

model.textContent = modelName;
priceInfo.innerHTML = pricing;
details.textContent = modelDetails;

theImages.forEach(function(image, index){
  image.classList.add('nonActive');
});
document.querySelector(`#${data.model}`).classList.remove('nonActive');

}

theImages.forEach(function(image, index){
        image.addEventListener('click', getCarData, false);
      });

getCarData.call(document.querySelector("#F55"));

})();
