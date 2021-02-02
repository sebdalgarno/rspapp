import csv from "csvtojson";

csv()
	.fromFile("../data/year_totals.csv")
	.then((data) => {
		console.log("json data", data);
	});
