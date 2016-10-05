

let myCarousels = function(sliderSelector, frameSelector, slideSelector, leftBtnSelector, rightBtnSelector) {

    var leftPosition = 0;
    var slider = document.querySelector(sliderSelector);
    var slide = document.querySelector(slideSelector);
    

    // var slidesCount = slide.length;
    var leftBtn = document.querySelector(leftBtnSelector);
    var rightBtn = document.querySelector(rightBtnSelector);
    var frame = document.querySelector(frameSelector);

    var counter = document.getElementById('frame').childElementCount - 1;
    console.log(counter);
     
    slider.classList.add('slider');
    frame.classList.add('frame');

    leftBtn.addEventListener("click", function(){
        setPosition();
        previous();
        console.log("LEFT");
    });

    rightBtn.addEventListener("click", function(){
        setPosition();
        next();
        console.log("RIGHT");
    });

    function setPosition(){
        let slideHolderMargin=-100*leftPosition;
        frame.style.left = slideHolderMargin + '%';
    }

    function next() {
        if(leftPosition==counter){
            leftPosition=0;
        } else {
            leftPosition++;
        }
    }

    function previous() {
        if (leftPosition==0) {
            leftPosition=counter;
        } else{
            leftPosition=leftPosition-1;
        }
    }
    // var moveCarousel = function (value) {
    //     leftPosition += value*(100);
    //     frame.style.left = leftPosition + '%';
    // };

 

    // return {
    //     next: function() {
    //         if(leftPosition > (slidesCount-1)*(-100)) {
    //             moveCarousel(-1);
    //         } else {
    //             leftPosition = 0;
    //             frame.style.left = leftPosition + '%';
    //         }
    //     },

    //     previous: function() {
    //         if(leftPosition !== 0) {
    //             moveCarousel(1);
    //         } else {
    //             leftPosition = (slidesCount-1)*(-100);
    //             frame.style.left = leftPosition + '%';
    //         }
    //     }
    // };
};

var carousel = new myCarousels ('#slider', '#frame', '.slide', '.arrowLeft', '.arrowRight');



