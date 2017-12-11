var itemName = document.getElementById("item-name");
var itemPrice = document.getElementById("item-price");
var itemCat = document.getElementById("item-category");
var itemDes = document.getElementById("item-description");
var submit = document.getElementById("add-item");
var firebaseRef = firebase.database().ref();

function addItem() {
	
	var itemsRef = firebase.database().ref("Items/");
	
	var itemNameVal = itemName.value;
	var itemPriceVal = itemPrice.value;
	var itemCatVal = itemCat.value;
	var itemDesVal = itemDes.value;

	itemsRef.push({
		name: itemNameVal,
		price: itemPriceVal,
		category: itemCatVal,
		description: itemDesVal
	});

	var container = document.getElementById("food-item-list");

	var item = document.createElement("li");
	item.className = "item-box";

	var name = document.createElement("span");
	name.className = "item-name";
	name.innerHTML = itemNameVal;

	var price = document.createElement("span");
	price.className = "item-price";
	price.innerHTML = itemPriceVal;

	var category = document.createElement("span");
	category.className = "item-category";
	category.innerHTML = itemCatVal;

	var description = document.createElement("span");
	description.className = "item-description";
	description.innerHTML = itemDesVal; 

	item.appendChild(name);
	item.appendChild(price);
	item.appendChild(category);
	item.appendChild(description);
	container.appendChild(item);

	console.log("Created " + itemNameVal + ".");
}

firebaseRef.on("value", function(snapshot){
	console.log(snapshot.val());

	var items = snapshot;
	
	// for (var i = 0; i < items.length; i++) {
		console.log(items.child("name"));
	// }
}, function (error){
	console.log("Error: " + error.code);
});