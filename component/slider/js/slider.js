class Slider { 
    constructor(obj) {
        this.initVar(obj);

        this.initContainer();
        this.initSlide();

        if(this.showSportIndicator) {
            this.initSports();
        }

        this.autoPlaySlide();
        this.eventBind();
    }

    initSports() {
        let sport = `
            <li class = "sport active"></li>
        `;
        for(let i = 1; i < this.imgArr.length; ++i) {
            sport += `
                <li class = "sport"></li>
            `;
        }
        this.sportContainerDom.innerHTML = sport;
    }

    initVar(obj) {
        this.imgArr = obj.imgArr || [];
        this.showSportIndicator = obj.showSportIndicator || true;
        this.slideNumber = this.imgArr.length || 0;
        this.displayTime = obj.displayTime || 1500;
        this.curSlideIndex = 0;

        this.containerID = obj.containerID;
		this.containerDom = document.getElementById(this.containerID);
    }

    initSlide() {
        let slides = '';
        console.log(this.imgArr.length);
        for(let i = 0; i < this.imgArr.length; ++i) {
            slides += `
                <img class="slide" src="${this.imgArr[i].url}" style="left: calc(${i} * 100%);"/>
            `;
        }
        this.sliderWrapperDom.innerHTML = slides;
    }
    
    initContainer(){
        this.sliderContainerDom = document.createElement('div');
        this.sliderContainerDom.classList.add('slider-container');
        this.containerDom.appendChild(this.sliderContainerDom);


        this.sliderWrapperDom = document.createElement('div');
        this.sliderWrapperDom.style.left = "0";
        this.sliderWrapperDom.classList.add("slider-wrapper");
        this.sliderContainerDom.appendChild(this.sliderWrapperDom);

        this.sportContainerDom = document.createElement('ul');
        this.sportContainerDom.classList.add('sport-container');
        this.sliderContainerDom.appendChild(this.sportContainerDom);
    }

    eventBind() {

    }

    setDisplayTime(newDisplaytime) {
        this.displayTime = newDisplaytime;
    }
    
    autoPlaySlide() {
        setInterval(this.nextSlide.bind(this), this.displayTime);
    }

    nextSlide() {
        this.curSlideIndex = (this.curSlideIndex + 1) % this.slideNumber;

        this.sliderWrapperDom.style.left =  `calc(-${this.curSlideIndex} * 100%)`;
        if(this.showSportIndicator) {
            const sports = this.sportContainerDom.children;
            const preSlideIndex = (this.curSlideIndex - 1 + this.slideNumber) % this.slideNumber;
            sports[preSlideIndex].classList.remove('active');
            sports[this.curSlideIndex].classList.add('active');
        }
    }
}

