// main.js

var main = function(){
    var i = 1;
    setInterval(function(){
        i += 1;
        console.log(1);

        if(i >= 3){
            throw Error('User raise error!');
        }
    }, 1000);
};

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
    main();
});

main();
