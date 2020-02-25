// myscript for 03-AJAX-01-Canada using AJAX for individual pagevar countryName;
var pList = new Array();
var rowID;
var cList = new Array();

$(document).ready(function() {
	// get local storage values	
	rowID=localStorage.getItem("rowID");
	pList=JSON.parse(localStorage.getItem("pList"));
	cname=localStorage.getItem("cname");
	// fill in output fields
	
	$("#country").html(cname);
	$("#pname").html(pList[rowID].name);

	$("#capital").html(pList[rowID].capital);

	$("#flag").html(`<img src='../images/${pList[rowID].flag}'></img>`);
	console.log(pList[rowID].cities);
	for(x=0;x<pList[rowID].cities[0].length;x++)
	{
		$("#cities").append(`${pList[rowID].cities[0][x]}<br>`);
	}
	
});

