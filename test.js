const getCountries = () =>{
    
    
    var xhttp = new XMLHttpRequest();
    
    var respJSON=[];
	
	xhttp.onreadystatechange =function()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			resp = this.responseText;
			respJSON = JSON.parse(resp);
		//	console.log(respJSON);
			
			for(var i=0;i<respJSON.length;i++)
			{
				if(respJSON[i].population>10000000)
				{
				console.log(respJSON[i].name+" "+respJSON[i].population);
				}
			}
			
		/*	for(var i in respJSON)
			{
			
			 console.log(respJSON[i].population);
			}*/
		}
	}
	
	
	
    xhttp.open('GET','https://restcountries.eu/rest/v2/all');
   // xhr.responeType = 'json';
    
	
	
	
    xhttp.send();
    
}

getCountries();

//[{name: "afganistan", population:10_00_00_000}]