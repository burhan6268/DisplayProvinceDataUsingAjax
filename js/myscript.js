// myscript for 03-AJAX01-Canada using AJAX
var countryName;
var background;
var pList = new Array();
var rowID;

class Prov {
	constructor (name, type, capital, flag, ...cities) {
		this.name = name; 
		this.type = type;
		this.capital = capital; 
		this.flag = flag;
		this.cities = cities;
	}
}

// document.ready statement
$(document).ready(function()
{
	$.ajax(
		{
			type:"GET",
			url:"dataFiles/canada.json",
			datatype: "json",
			success:loadJSON,
			error:function(e)
			{
				alert(`${e.status} - ${e.statusText}`);
			}
		});
	
	$("#backHead").click(function()
	{
		$("#background").toggle();
	});
});

// loadJSON function
function loadJSON(data)
{
	console.log(data);
	countryName=data.country.name;
	background=data.country.background;

	//Load Array (plist)
	for(let prov of data.country.division)
	{
		if(prov.type=='province')
		{
			var cities=new Array();
			for(let city of prov.city)
			{
				cities.push(city);
			}
			pList.push(new Prov(prov.name,prov.type,prov.capital,prov.pic, cities));
		}//End of IF
	}//End of Loop
	console.log(pList);
	mainScreen(data);
}

// mainScreen function
function mainScreen(data)
{
	$("#country").html(`${countryName}/Provinces`);
	$("#background").html(background);
	$("#background").hide();
	//Display Provinces
	$("#provList").html("");
	for(x=0;x<pList.length;x++)
	{
		$("#provList").append(
			`
				<li li-id='${x}'>
					<a href='otherPages/provPage.html'>${pList[x].name}</a>
				</li>
			`
			);
	}//End Of Loop
}
// Save data to local storage
$(document).on("click", "#provList > li", function() {
	localStorage.setItem("rowID",$(this).closest("li").attr("li-id"));
	localStorage.setItem("pList",JSON.stringify(pList));
	localStorage.setItem("cname",countryName);
});

