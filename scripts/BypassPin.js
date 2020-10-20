console.log("Its going to be awesome");
if(Java.available)
{
	Java.perform( function(){
		var my_target_class= Java.use("owasp.sat.agoat.AccessControlIssue1Activity");
		my_target_class.isPinCorrect.implementation = function (a)
		{
			for (var b=1200; b<1237;b++)
			{
				var c=b.toString();
				console.log("PIn attempt " + c);
				var return_value=this.isPinCorrect(c);
				if(return_value)
				{
					console.log("PIN is cracked " + c);
					return return_value;
				}
			}//for
			
		};//my_target_class
		
	});//Java.perform 
}
else{
	console.log("This is not Android");
}