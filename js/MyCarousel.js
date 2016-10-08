var MyCarousel = (function(window){
    function MyCarousel(sliderSelector, frameSelector, slideSelector, leftBtnSelector, rightBtnSelector) {

        this.currentSlideIndex = 0;
        this.slider = document.querySelector(sliderSelector);
        this.frame = this.slider.querySelector(frameSelector);
        this.contentHolder = this.frame.querySelector('.content-holder');
    
        this.leftBtn = this.slider.querySelector(leftBtnSelector);
        this.rightBtn = this.slider.querySelector(rightBtnSelector);

        this.slides = this.frame.querySelectorAll('.content-holder > .slide');

        this.initialize();
    };
    MyCarousel.prototype.moveToIndex = function(index) {
        this.contentHolder.style.transform = `translateX(${-100*index}%)`;
        this.currentSlideIndex = index;
    };
    MyCarousel.prototype.initialize = function(){
        this.attachListeners();
    }
    MyCarousel.prototype.attachListeners = function() {
        this.leftBtn.addEventListener("click", () => {
            this.moveToIndex((this.currentSlideIndex - 1 >= 0  ? 
                (function(that){
                    return that.currentSlideIndex - 1;
                })(this)
                : 
                (function(that){
                    return that.slides.length -1;
                })(this)
                ));
        },false);

        this.rightBtn.addEventListener("click", () => {
            this.moveToIndex((this.currentSlideIndex + 1 < this.slides.length ? this.currentSlideIndex + 1 : 0));
        },false);
    }

    return MyCarousel;
})(this);
