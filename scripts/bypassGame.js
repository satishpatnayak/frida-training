console.log("Its going to be awesome");
if(Java.available)
{
	Java.perform( function(){
		var my_target_class= Java.use("owasp.sat.agoat.InsecureStorageSharedPrefs1Activity");
		my_target_class.CalculateScore.implementation = function ()
		{
			console.log("Success! CalculateScore() method invoked");
			
			return 10001;
		};
		
	});//Java.perform 
}
else{
	console.log("This is not Android");
}