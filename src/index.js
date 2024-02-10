function updateTime () {

//Amsterdam time
let amsterdamElement = document.querySelector("#amsterdam");
    if (amsterdamElement) {
        let amsterdamDateElement = amsterdamElement.querySelector(".date");
        let amsterdamTimeElement = amsterdamElement.querySelector(".time");
        let amsterdamTime = moment().tz("Europe/Amsterdam");

        amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
        amsterdamTimeElement.innerHTML = `${amsterdamTime.format("h:mm:ss")} <small>${amsterdamTime.format("A")}</small>`;
    }

//London time
let londonElement = document.querySelector("#london");
    if (londonElement) {
        let londonDateElement = londonElement.querySelector(".date");
        let londonTimeElement = londonElement.querySelector(".time");
        let londonTime = moment().tz("Europe/London");

        londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
        londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss")} <small>${londonTime.format("A")}</small>`;
    }

//Buenos Aires time
let buenosAiresElement = document.querySelector("#buenos-aires");
    if (buenosAiresElement) {
        let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
        let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
        let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");

        buenosAiresDateElement.innerHTML = buenosAiresTime.format("MMMM Do YYYY");
        buenosAiresTimeElement.innerHTML = `${buenosAiresTime.format("h:mm:ss")} <small>${buenosAiresTime.format("A")}</small>`;
    }
};

function showSelectedCity(event) {
    let cityTimeZone = event.target.value;

    if (event.target.value === 'current') {
        cityTimeZone = moment.tz.guess();
    }

    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div id="cities">
    <div class="row"">
        <div class="col-6">
            <h2>${cityName}</h2>
            <p class="date">${cityTime.format("MMMM Do YYYY")}</p>
        </div>
        <div class="col-6">
            <p class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></p>
        </div>
    </div>
    <a href="">Refresh cities</a>
    </div>
    `
}


//Time update - to get the correct time
updateTime();
setInterval(updateTime, 1000);

let citySelectionElement = document.querySelector("#city");
citySelectionElement.addEventListener("change", showSelectedCity)