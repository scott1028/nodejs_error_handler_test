var i = 1;
setInterval(function(){
	i += 1;
	console.log(1);

	if(i >= 3){
		throw Error('User raise error!');
	}
}, 1000);
