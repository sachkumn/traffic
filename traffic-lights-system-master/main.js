const LightsSwitching=()=>{
    let green = document.getElementById('green');
    let red = document.getElementById('red');
    let yellow = document.getElementById('yellow');
    let msg1=document.getElementById('msg');
    
    setTimeout(function(){
            red.style.opacity=1;
            msg1.innerHTML="STOP";
            green.style.opacity=0.3;
            yellow.style.opacity=0.3;    
    },5000);
    
    setTimeout(function(){
            green.style.opacity=0.3;
            red.style.opacity=0.1;
            msg1.innerHTML="WAIT";
            yellow.style.opacity=1;
    },10000);
    
    setTimeout(function(){
        green.style.opacity=1;
        red.style.opacity=0.1;
        msg1.innerHTML="GO...!";
        yellow.style.opacity=0.3;    
    },15000);

}
LightsSwitching();
var timer = setInterval(function(){
    LightsSwitching();
},15000);