var atomicNumber;
var chemicalSymbol;
var name;
var atomicMass;
var className;

function display(aN, cS, n, aM, cN){
	atomicNumber = aN;
	document.getElementById("atomicNumber").innerHTML=atomicNumber;
	chemicalSymbol = cS;
	document.getElementById("chemicalSymbol").innerHTML=chemicalSymbol;
	name = n;
	document.getElementById("name").innerHTML=name;
	atomicMass= aM;
	document.getElementById("atomicMass").innerHTML=atomicMass;
	className = cN;
	document.getElementById("interDisplay").className=className;
	wikiSearch();


}

function wikiSearch(){
	searchString = "https://www.wikipedia.org/wiki/"+name;
	document.getElementById("wikiSearch").href=searchString;
}

