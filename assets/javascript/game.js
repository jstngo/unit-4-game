var wins = 0;
var losses = 0;

var min = 19;
var max = 120;
var randomNumber = rNum(min,max);

var uScore = 0;
console.log(uScore);

function rNum(min,max){
return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(randomNumber);

$('')
$('#userScore').text(uScore);

$('#ranNum').text(randomNumber);

$('#wins').text(wins);
$('#losses').text(losses);

$('img').eq(0).on('click', function(){
    
    $('#userScore').text(uScore+=bitcoinVal);
});

$('img').eq(1).on('click', function(){

    $('#userScore').text(uScore+=litecoinlVal);
});

$('img').eq(2).on('click', function(){

    $('#userScore').text(uScore+=dogecoinVal);
});

$('img').eq(3).on('click', function(){

    $('#userScore').text(uScore+=rippleVal);
});

$('img').on('click', function(){
    if (uScore == randomNumber){
        wins++;
        $('#wins').text(wins);
        gameSetup();

    }else if (uScore > randomNumber){
        losses++;
        $('#losses').text(losses);
        uScore = 0;
        $('#userScore').text(uScore);
    }
})

function gameSetup(){
    uScore = 0;
    $('#userScore').text(uScore);

    randomNumber = rNum(min,max);
    rNum();
    $('#ranNum').text(randomNumber);

    bitcoinVal = Math.ceil(Math.random()*12);
    litecoinlVal = Math.ceil(Math.random()*12);
    dogecoinVal = Math.ceil(Math.random()*12);
    rippleVal = Math.ceil(Math.random()*12);
}

gameSetup();