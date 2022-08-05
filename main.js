//pop-up chat box
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//price calculator
var totalItems = 8;
function calculateItemsValue() {
	var total = 0;
	for (i=1; i<=totalItems; i++) {
		
		itemID = document.getElementById("qnt_"+i);
		if (typeof itemID === 'undefined' || itemID === null) {
			alert("No such item - " + "qnt_"+i);
		} else {
			total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
		}
		
	}
	document.getElementById("itemsTotal").innerHTML = "$" + total;
	
}