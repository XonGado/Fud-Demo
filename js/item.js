var itemName = document.getElementById("item-name");
var itemPrice = document.getElementById("item-price");
var itemCat = document.getElementById("item-category");
var itemDes = document.getElementById("item-description");
var submit = document.getElementById("add-item");
var firebaseRef = firebase.database().ref();

function addItem() {
	// console.log("ok");
	var itemsRef = firebase.database().ref("Items/");
	
	var itemNameVal = itemName.value;
	var itemPriceVal = itemPrice.value;
	var itemCatVal = itemCat.value;
	// var itemDesVal = itemDesVal.value;

	itemsRef.push({
		name: itemNameVal,
		price: itemPriceVal,
		category: itemCatVal,
		// description: itemDesVal
	});
	console.log("ok");
}

firebaseRef.on("value", function(snapshot){
	console.log(snapshot.val());
}, function (error){
	console.log("Error: " + error.code);
});