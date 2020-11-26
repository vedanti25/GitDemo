user=[{username:"user1",passw:"user1"},{username:"user2",passw:"user2"},{username:"user3",passw:"user3"}];

function addition(a,b){
   return parseInt(a)+parseInt(b);
}


function subtract(a,b){
    return parseInt(a)-parseInt(b)

}

function multiply(a,b){
   return parseInt(a)*parseInt(b);
}

exports.authanticate=function(uname,pass){
	
	for(var i=0;i<user.length;i++)
	{
		if(uname==user[i].username && pass==user[i].passw)
		{
			return true;
		}
		
	}
	return false;
}