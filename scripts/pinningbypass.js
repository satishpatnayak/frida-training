console.log("Its going to be awesome");
if(Java.available)
{
	Java.perform( function(){
		var my_target_class= Java.use("okhttp3.CertificatePinner");
		my_target_class.check.overload("java.lang.String", "java.util.List").implementation = function (a,b)
		{
			console.log("hostname " +a.toString());
			return true;
		};
		
	});//Java.perform 
}
else{
	console.log("This is not Android");
}