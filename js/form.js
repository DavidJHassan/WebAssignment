function formInit()
{
	var queryString = new Array();
	if (queryString.length == 0) 
	{
		if (window.location.search.split('?').length > 1) {
			var params = window.location.search.split('?')[1].split('&');
			for (var i = 0; i < params.length; i++) {
				var key = params[i].split('=')[0];
				var value = decodeURIComponent(params[i].split('=')[1]);
				queryString[key] = value;
			}
		}
	}
	
	if (queryString["prodID"] != null && queryString["prodName"] != null) 
	{
        document.getElementById("prodID").value = queryString["prodID"];
		document.getElementById("prodName").value = queryString["prodName"];
		document.getElementById("price").value = queryString["price"];
	}
}

function confirmationInit()
{
	var queryString = new Array();
	if (queryString.length == 0) 
	{
		if (window.location.search.split('?').length > 1) {
			var params = window.location.search.split('?')[1].split('&');
			for (var i = 0; i < params.length; i++) {
				var key = params[i].split('=')[0];
				var value = decodeURIComponent(params[i].split('=')[1]);
				queryString[key] = value;
			}
		}
	}
	
	if (queryString["prodID"] != null && queryString["prodName"] != null) 
	{
		document.getElementById("cName").innerHTML = queryString["prodName"];
		document.getElementById("cQty").innerHTML = queryString["qty"];
		document.getElementById("cPrice").innerHTML = queryString["price"]*queryString["qty"];
	}
}


function ibpClick()
{
	var url = "form.html?prodID=" +encodeURIComponent("1") + "&prodName=" + encodeURIComponent("iBUYPOWER") + "&price=" +encodeURIComponent("1299.99");
	window.location.assign(url);
}

function awClick()
{
	var url = "form.html?prodID=" +encodeURIComponent("2") + "&prodName=" + encodeURIComponent("ALIENWARE") + "&price=" +encodeURIComponent("1899.99");
	window.location.assign(url);
}

function validateForm() {
    var x = document.forms["productForm"]["qty"].value;
    if (x == null || x < '1' || isNaN(x)) {
        alert("Quantity is incorrect");
        return false;
    }
}
