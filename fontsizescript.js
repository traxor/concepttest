function scaleWidth()
{
	var optimalLineLength = "15em";
	var extraAccounting = "12em";
	var minimumTextHeight = "10px";
	var windowWidth = document.body.clientWidth;
	var optimalSize = windowWidth / (parseInt(optimalLineLength) + parseInt(extraAccounting));

	if (optimalSize >= parseInt(minimumTextHeight))
	{
		document.body.style.fontSize = optimalSize + "px";
	}
	else
	{
		document.body.style.fontSize = parseInt(minimumTextHeight) + "px";
	}

	return true;
}