
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
function reqListener() {
	const countriesData = JSON.parse(this.responseText);
	// this.responseText;
	for (let ind = 0; ind < countriesData.length; ind++) {
	console.log("countrie name:",countriesData[ind].name.common,",","flag:", countriesData[ind].flags.png);
	}
}
