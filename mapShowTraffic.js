(() => {
window.trafficLayer = new window.google.maps.TrafficLayer();
window.trafficLayer.setMap(window.__preloaded_map__);

alert("inside show traffic js");

const loadingSpinHtml =
  `<span id="traffic-spinner" 
          style="display: inline-block; margin: 6px 18px 6px 18px; border: 2px solid #f3f3f3; border-radius: 50%; 
                 border-top: 2px solid #3498db; width: 18px; height: 18px; -webkit-animation: spin 2s linear infinite; 
                 animation: spin 2s linear infinite;" 
        />`;
const trafficSwitchParent = document.getElementById("show-traffic-switch");
const trafficSwitchClass = trafficSwitchParent.getElementsByClassName("MuiSwitch-root");
trafficSwitchClass[0].style.display = "none";
const trafficSwitchCheckbox = trafficSwitchParent.getElementsByClassName("PrivateSwitchBase-input");
trafficSwitchCheckbox[0].disabled = true;

const trafficSpinnerDiv = document.createElement("div");
trafficSpinnerDiv.setAttribute("id", "traffic-spinner-div");
trafficSpinnerDiv.innerHTML = loadingSpinHtml;
trafficSwitchParent.prepend(trafficSpinnerDiv);

setTimeout(() => {
  trafficSwitchClass[0].style.display = "";
  trafficSwitchCheckbox[0].disabled = false;
  document.getElementById("traffic-spinner-div").remove();
}, 2500);

})()