var cash = 10; //General Variables
var land = 0;
var tillMultiplier = 1;
var tickRate = 1000;


$('[data-toggle=confirmation]').confirmation({
  rootSelector: '[data-toggle=confirmation]',
});

function sciNotation(number){
    if (number > 1000000){
        return number.toExponential(3);
    }
    else{
      return number;  
    }      
}

function updateGeneralValues(){
    $("#land").html(sciNotation(land));
    $("#cash").html(sciNotation(cash));
    $("#staff-cap").html(sciNotation(staffCap));
    $("#current-staff").html(sciNotation(currentStaff));
}

function cashFlow(number) {
    cash += number;
    $("#cash").html(sciNotation(cash));
}

//Crops functions
function tillLand(number) {
	land += Math.round(number * tillMultiplier);
	$("#land").html(sciNotation(land));
}

//Wheat variables
var wheat = 0; 
var wheatValue = 1;
var wheatBaseCost = 10;

//Wheat functions
function buyWheat(){ 
    var wheatCost = Math.round(wheatBaseCost * Math.pow(1.1,wheat));
    var landCost = 5;
	if (cash >= wheatCost && land >= landCost){
		wheat ++;
        land -= landCost;
		cash -= wheatCost;
        updateGeneralValues();
		$("#wheat").html(sciNotation(wheat));
	}
	var nextCost = Math.round(wheatBaseCost * Math.pow(1.1,wheat));
	$("#wheat-cost").html(sciNotation(nextCost));
}

//Potato variables
var potatoes = 0;  
var potatoesValue = 5;
var potatoesBaseCost = 100;

//Potato functions
function buyPotatoes(){
    var potatoesCost = Math.round(potatoesBaseCost * Math.pow(1.1,potatoes));
    var landCost = 10;
    if (cash >= potatoesCost && land >= landCost){
        potatoes ++;
        cash -= potatoesCost;
        land -= landCost;
        updateGeneralValues();
        $("#potatoes").html(sciNotation(potatoes));
    }
    var nextCost = Math.round(potatoesBaseCost * Math.pow(1.1,potatoes));
    $("#potatoes-cost").html(sciNotation(nextCost));
}

//Carrots variables
var carrots = 0;
var carrotsValue = 10;
var carrotsBaseCost = 500;

//Carrots functions
function buyCarrots(){
    var carrotsCost = Math.round(carrotsBaseCost * Math.pow(1.1,carrots));
    var landCost = 25;
    if (cash >= carrotsCost && land >= landCost){
        carrots ++;
        cash -= carrotsCost;
        land -= landCost;
        updateGeneralValues();
        $("#carrots").html(sciNotation(carrots));
    }
    var nextCost = Math.round(carrotsBaseCost * Math.pow(1.1,carrots));
    $("#carrots-cost").html(sciNotation(nextCost));
}

//Cabbage variables
var cabbage = 0;
var cabbageValue = 25;
var cabbageBaseCost = 3000;

//Cabbage functions
function buyCabbage(){
    var cabbageCost = Math.round(cabbageBaseCost * Math.pow(1.1,cabbage));
    var landCost = 50;
    if (cash >= cabbageCost && land >= landCost){
        cabbage ++;
        cash -= cabbageCost;
        land -= landCost;
        updateGeneralValues();
        $("#cabbage").html(sciNotation(cabbage));
    }
    var nextCost = Math.round(cabbageBaseCost * Math.pow(1.1,cabbage));
    $("#cabbage-cost").html(sciNotation(nextCost));
}

//Corn variables
var corn = 0;
var cornValue = 75;
var cornBaseCost = 10000;

//Corn functions
function buyCorn(){
    var cornCost = Math.round(cornBaseCost * Math.pow(1.1,corn));
    var landCost = 100;
    if (cash >= cornCost && land >= landCost){
        corn ++;
        cash -= cornCost;
        land -= landCost;
        updateGeneralValues();
        $("#corn").html(sciNotation(corn));
    }
    var nextCost = Math.round(cornBaseCost * Math.pow(1.1,corn));
    $("#corn-cost").html(sciNotation(nextCost));
}

//Cucumber variables
var cucumber = 0;
var cucumberValue = 200;
var cucumberBaseCost = 40000;

//Cucumber Functions
function buyCucumber(){
    var cucumberCost = Math.round(cucumberBaseCost * Math.pow(1.1,cucumber));
    var landCost = 250;
    if (cash >= cucumberCost && land >= landCost){
        cucumber ++;
        cash -= cucumberCost;
        land -= landCost;
        updateGeneralValues;
        $('#cucumber').html(sciNotation(cucumber));
    }
    var nextCost = Math.round(cucumberBaseCost * Math.pow(1.1,cucumber));
    $('#cucumber-cost').html(sciNotation(nextCost));
}

//Turnip variables
var turnip = 0;
var turnipValue = 800;
var turnipBaseCost = 200000;

//Turnip Functions
function buyTurnip(){
    var turnipCost = Math.round(turnipBaseCost * Math.pow(1.1,turnip));
    var landCost = 1000;
    if (cash >= turnipCost && land >= landCost){
        turnip ++;
        cash -= turnipCost;
        land -= landCost;
        updateGeneralValues;
        $("#turnip").html(sciNotation(turnip));
    }
    var nextCost = Math.round(turnipBaseCost * Math.pow(1.1,turnip));
    $("#turnip-cost").html(sciNotation(nextCost));
}

//Pepper variables
var pepper = 0;
var pepperValue = 6000;
var pepperBaseCost = 1500000;

//Pepper functions
function buyPepper(){
    var pepperCost = Math.round(pepperBaseCost * Math.pow(1.1,pepper));
    var landCost = 5000;
    if (cash >= pepperCost && land >= landCost){
        pepper ++;
        cash -= pepperCost;
        land -= landCost;
        updateGeneralValues;
        $("#pepper").html(sciNotation(pepper));
    }
    var nextCost = Math.round(pepperBaseCost * Math.pow(1.1,pepper));
    $("#pepper-cost").html(sciNotation(nextCost));
}


//Staff Functions
var staffCap = 0;
var currentStaff = 0;

function payWages(number){
    cash -= number;
    $("#cash").html(sciNotation(cash));
}

//Facilities
var facilities = 0;
var facilityBaseCost = 50000;
function buyFacility(){
    var facilityCost = Math.round(facilityBaseCost * Math.pow(1.2,facilities));
    if (cash >= facilityCost){
        facilities ++;
        staffCap += 10;
        cash -= facilityCost;
        updateGeneralValues();
        $("#facilities").html(sciNotation(facilities));
    }
    var nextCost = Math.round(facilityBaseCost * Math.pow(1.2,facilities));
    $("#facility-cost").html(sciNotation(nextCost));
}

//Tillers
var tillers = 0;
var tillerPower = 1;
var tillerCost = 300;

function hireTiller(){
    if (currentStaff < staffCap){
        tillers ++;
        currentStaff ++;
        $("#tillers").html(sciNotation(tillers));
        updateGeneralValues();
    }
}

function fireTiller(){
    if (tillers > 0){
        tillers --;
        currentStaff --;
        $("#tillers").html(sciNotation(tillers));
        updateGeneralValues();
    }
}

function autoTill(){
    land += Math.round(tillers * tillerPower);
    updateGeneralValues();
}


//Tick Function
window.setInterval(function() {
	save();
    
    //Crops
    cashFlow(Math.round(wheat * wheatValue));
    cashFlow(Math.round(potatoes * potatoesValue));
    cashFlow(Math.round(carrots * carrotsValue));
    cashFlow(Math.round(cabbage * cabbageValue));
    cashFlow(Math.round(corn * cornValue));
	cashFlow(Math.round(cucumber * cucumberValue));
    cashFlow(Math.round(turnip * turnipValue));
    cashFlow(Math.round(pepper * pepperValue));
    
    //Staff
    payWages(Math.round(tillers * tillerCost));
    autoTill();
}, tickRate);




//Upgrades Functions

//Till Land Upgrades

var ironHoePurchased = false;
function buyIronHoe(){
    var cost = 3000;
    if (cash >= cost){
        tillMultiplier += 1;
        cash -= cost;
        updateGeneralValues();
        $("#buy-iron-hoe").prop('disabled', true).text('Purchased');
        ironHoePurchased = true;
    }
}

var bronzeHoePurchased = false;
function buyBronzeHoe(){
    var cost = 10000;
    if (cash >= cost){
        tillMultiplier += 1;
        cash -= cost;
        updateGeneralValues();
        $("#buy-bronze-hoe").prop('disabled',true).text('Purchased');
        bronzeHoePurchased = true;
    }
}

var steelHoePurchased = false;
function buySteelHoe(){
    var cost = 50000;
    if (cash >= cost){
        tillMultiplier += 2;
        cash -= cost;
        updateGeneralValues();
        $("#buy-steel-hoe").prop('disabled',true).text('Purchased');
        steelHoePurchased = true;
    }
}

var ironPlowPurchased = false;
function buyIronPlow(){
    var cost = 150000;
    if (cash >= cost){
        tillMultiplier += 4;
        cash -= cost;
        updateGeneralValues();
        $("#buy-iron-plow").prop('disabled',true).text('Purchased');
        ironPlowPurchased = true;
    }
}

var bronzePlowPurchased = false;
function buyBronzePlow(){
    var cost = 400000;
    if (cash >= cost){
        tillMultiplier += 6;
        cash -= cost;
        updateGeneralValues();
        $("#buy-bronze-plow").prop('disabled',true).text('Purchased');
        bronzePlowPurchased = true;
    }
}


var steelPlowPurchased = false;
function buySteelPlow(){
    var cost = 1000000;
    if (cash >= cost){
        tillMultiplier += 10;
        cash -= cost;
        updateGeneralValues;
        $("#buy-steel-plow").prop('disabled',true).text('Purchased');
        steelPlowPurchased = true;
    }
}

//Save function
function save(){
    var saveData = {
    cash: cash,
    tickRate: tickRate,
    tillMultiplier: tillMultiplier,
        
    //Crops
    wheat: wheat,
    wheatValue: wheatValue,
    land: land,
    potatoes: potatoes,
    potatoesValue: potatoesValue,
    carrots: carrots,
    carrotsValue: carrotsValue,
    cabbage: cabbage,
    cabbageValue: cabbageValue,
    corn: corn,
    cornValue: cornValue,
    cucumber: cucumber,
    cucumberValue: cucumberValue,
    turnip: turnip,
    turnipValue: turnipValue,
    pepper: pepper,
    pepperValue: pepperValue,
    
    //Staff
    staffCap: staffCap,
    currentStaff: currentStaff,
    facilities: facilities,
    tillers: tillers,
    tillerCost: tillerCost,
    tillerPower: tillerPower,
        
    // Upgrades
    ironHoePurchased: ironHoePurchased,
    bronzeHoePurchased: bronzeHoePurchased,
    steelHoePurchased: steelHoePurchased,
    ironPlowPurchased: ironPlowPurchased,
    bronzePlowPurchased: bronzePlowPurchased,
    steelPlowPurchased: steelPlowPurchased
};
    
    localStorage.setItem("save",JSON.stringify(saveData)); 
}

//Load function
function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.cash !== "undefined") cash = savegame.cash;
    if (typeof savegame.tickRate !== "undefined") tickRate = savegame.tickRate;
    if (typeof savegame.tillMultiplier !== "undefined") tillMultiplier = savegame.tillMultiplier;
    if (typeof savegame.wheat !== "undefined") wheat = savegame.wheat;
    if (typeof savegame.wheatValue !== "undefined") wheatValue = savegame.wheatValue;
    if (typeof savegame.land !== "undefined") land = savegame.land;
    if (typeof savegame.potatoes !== "undefined") potatoes = savegame.potatoes;
    if (typeof savegame.potatoesValue !== "undefined") potatoesValue = savegame.potatoesValue;
    if (typeof savegame.carrots !== "undefined") carrots = savegame.carrots;
    if (typeof savegame.carrotsValue !== "undefined") carrotsValue = savegame.carrotsValue;
    if (typeof savegame.cabbage !== "undefined") cabbage = savegame.cabbage;
    if (typeof savegame.cabbageValue !== "undefined") cabbageValue = savegame.cabbageValue;
    if (typeof savegame.corn !== "undefined") corn = savegame.corn;
    if (typeof savegame.cornValue !== "undefined") cornValue = savegame.cornValue;
    if (typeof savegame.cucumber !== "undefined") cucumber = savegame.cucumber;
    if (typeof savegame.cucumberValue !== "undefined") cucumberValue = savegame.cucumberValue;
    if (typeof savegame.turnip !== "undefined") turnip = savegame.turnip;
    if (typeof savegame.turnipValue !== "undefined") turnipValue = savegame.turnipValue;
    if (typeof savegame.pepper !== "undefined") pepper = savegame.pepper;
    if (typeof savegame.pepperValue !== "undefined") pepperValue = savegame.pepperValue;
    
    //Staff
    if (typeof savegame.staffCap !== "undefined") staffCap = savegame.staffCap;
    if (typeof savegame.currentStaff !== "undefined") currentStaff = savegame.currentStaff;
    if (typeof savegame.facilities !== "undefined") facilities = savegame.facilities;
    if (typeof savegame.tillers !== "undefined") tillers = savegame.tillers;
    if (typeof savegame.tillerCost !== "undefined") tillerCost = savegame.tillerCost;
    if (typeof savegame.tillerPower !== "undefined") tillerPower = savegame.tillerPower;
    
    //Upgrade Purchases
    if (typeof savegame.ironHoePurchased !== "undefined") ironHoePurchased = savegame.ironHoePurchased;
    if (typeof savegame.bronzeHoePurchased !== "undefined") bronzeHoePurchased = savegame.bronzeHoePurchased;
    if (typeof savegame.steelHoePurchased !== "undefined") steelHoePurchased = savegame.steelHoePurchased;
    if (typeof savegame.ironPlowPurchased !== "undefined") ironPlowPurchased = savegame.ironPlowPurchased;
    if (typeof savegame.bronzePlowPurchased !== "undefined") bronzePlowPurchased = savegame.bronzePlowPurchased;
    if (typeof savegame.steelPlowPurchased !== "undefined") steelPlowPurchased = savegame.steelPlowPurchased;
    
    syncSaveValues();
}

//Sync Save values to displayed HTML values
function syncSaveValues() { //ensures that all variables are displayed properly in HTML
    $("#land").html(sciNotation(land));
    $("#cash").html(sciNotation(cash));
    $("#wheat").html(sciNotation(wheat));
    $("#wheat-cost").html(sciNotation(Math.floor(wheatBaseCost * Math.pow(1.1,wheat))));
    $("#wheat-value").html(sciNotation(wheatValue));
    $("#potatoes").html(sciNotation(potatoes));
    $("#potatoes-cost").html(sciNotation(Math.floor(potatoesBaseCost * Math.pow(1.1,potatoes))));
    $("#potatoes-value").html(sciNotation(potatoesValue));
    $("#carrots").html(sciNotation(carrots));
    $("#carrots-cost").html(sciNotation(Math.floor(carrotsBaseCost * Math.pow(1.1,carrots))));
    $("#cabbage").html(sciNotation(cabbage));
    $("#cabbage-cost").html(sciNotation(Math.floor(cabbageBaseCost * Math.pow(1.1,cabbage))));
    $("#corn").html(sciNotation(corn));
    $("#corn-cost").html(sciNotation(Math.floor(cornBaseCost * Math.pow(1.1,corn))));
    $("#cucumber").html(sciNotation(cucumber));
    $("#cucumber-cost").html(sciNotation(Math.floor(cucumberBaseCost * Math.pow(1.1,cucumber))));
    $("#turnip").html(sciNotation(turnip));
    $("#turnip-cost").html(sciNotation(Math.floor(turnipBaseCost * Math.pow(1.1,turnip))));
    $("#pepper").html(sciNotation(pepper));
    $("#pepper-cost").html(sciNotation(Math.floor(pepperBaseCost * Math.pow(1.1,pepper))));
    
    //Staff
    $("#staff-cap").html(sciNotation(staffCap));
    $("#current-staff").html(sciNotation(currentStaff));
    $("#facilities").html(sciNotation(facilities));
    $("#facility-cost").html(sciNotation(Math.floor(facilityBaseCost * Math.pow(1.2,facilities))));
    $("#tillers").html(sciNotation(tillers));
    $("#tiller-cost").html(sciNotation(tillerCost));
    $("#tiller-power").html(sciNotation(tillerPower));
    
    //Upgrades
    if (ironHoePurchased == true)
        $("#buy-iron-hoe").prop('disabled', true).text('Purchased');
    if (bronzeHoePurchased == true)
        $("#buy-bronze-hoe").prop('disabled', true).text('Purchased');
    if (steelHoePurchased == true)
        $("#buy-steel-hoe").prop('disabled',true).text('Purchased');
    if (ironPlowPurchased == true)
        $("#buy-iron-plow").prop('disabled',true).text('Purchased');
    if (bronzePlowPurchased == true)
        $("#buy-bronze-plow").prop('disabled',true).text('Purchased');
    if (steelPlowPurchased == true)
        $("#buy-steel-plow").prop('disabled',true).text('Purchased');
}

function deleteSave(){
    window.localStorage.removeItem("save");
    location.reload();
}