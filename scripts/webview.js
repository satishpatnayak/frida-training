console.log("Its going to be awesome");
if(Java.available)
{
	Java.perform( function(){
		var my_target_class= Java.use("android.webkit.WebView");
		my_target_class.loadData.overload("java.lang.String","java.lang.String","java.lang.String").implementation = function (a,b,c)
		{
			//console.log("Success! loadUrl() method invoked");
			console.log("Html Data " + a.toString());
			console.log("Contet type  " + b.toString());
			console.log("encoding type " + c.toString());
			//this.loadUrl("http://demo.testfire.net");
		};
		
	});//Java.perform 
}
else{
	console.log("This is not Android");
}