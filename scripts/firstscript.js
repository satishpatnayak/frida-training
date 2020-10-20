console.log("Its going to be awesome");
if(Java.available)
{
	Java.perform( function(){
		var my_target_class= Java.use("com.e.rootcheck.MainActivity");
		my_target_class.isRooted.implementation = function ()
		{
			console.log("Success! isRooted() method invoked");
			console.log("Actual return value " + this.isRooted());
			return false;
		};
		
	});//Java.perform 
}
else{
	console.log("This is not Android");
}
