(function(){
    var rotateY=0;
    var rotateX=0;
    document.onkeydown=function(e){
         if((e.keyCode===37)||(e.keyCode===65)) rotateY-=4;
    else if((e.keyCode===38)||(e.keyCode===87)) rotateX+=4;
    else if((e.keyCode===39)||(e.keyCode===68)) rotateY+=4;
    else if((e.keyCode===40)||(e.keyCode===83)) rotateX-=4;
        document.querySelector('.cube').style.transform=
            'rotateY('+rotateY+'deg)'+'rotateX('+rotateX+'deg)';
    }
})();