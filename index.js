const enterr = async (e) => {
  e.preventDefault()
  let city = document.getElementById("city").value
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=J9SLG7W2FV6WXRM2NVYGQYWKU&contentType=json`

var arr



  fetch(url).then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }).then((data) => {
    arr=data
    console.log(arr)
    document.getElementById("temp").innerHTML = `${data.resolvedAddress}<br><br>${data.currentConditions.temp} \u00B0C , ${data.currentConditions.conditions}<br>Sunrise ${data.currentConditions.sunrise}<br>Sunset ${data.currentConditions.sunset}`
  }).catch((error) => {
    // Handle the error
    document.getElementById("temp").innerHTML = "Can't find the city."
    console.log(error);
  });


}
document.getElementById("button").addEventListener("click", enterr)

