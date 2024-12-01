class Slider { 
    constructor(obj) {
        this.initVar(obj);

        this.initContainer();
        this.initSlide();

        if(this.showBtn) {
            this.initBtn();
        }

        if(this.showSportIndicator) {
            this.initSports();
        }

        this.autoPlaySlide();
        this.eventBind();
    }

    initSports() {
        if(this.slideNumber == 1) {
            return;
        }

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

    initBtn() {
        if(this.slideNumber == 1) {
            return;
        }

        this.leftBtn = document.createElement('button');
        this.leftBtn.style.backgroundImage = `url(${this.btnImg.leftImgPath})`;
        this.leftBtn.classList.add('left-btn');
        this.sliderContainerDom.appendChild(this.leftBtn);


        this.rightBtn = document.createElement('button');
        this.rightBtn.style.backgroundImage = `url(${this.btnImg.rightImgPath})`;
        this.rightBtn.classList.add('right-btn');
        this.sliderContainerDom.appendChild(this.rightBtn);
    }

    initVar(obj) {
        this.imgArr = obj.imgArr || [];
        this.showSportIndicator = obj.showSportIndicator || true;
        this.slideNumber = this.imgArr.length || 0;
		this.aniTime = obj.aniTime || 1500;
		this.intervalTime = obj.intervalTime + this.aniTime || 2500;
        this.curSlideIndex = 0;
        this.btnImg = obj.btnImg;
        this.showBtn = (obj.btnImg != null) || false;
        this.prevTimeStamp = Date.now();

        // this.containerID = obj.containerID;
		this.containerDom = document.getElementById(obj.containerID);
    }


    initSlide() {
        let n = this.slideNumber;
        if(n == 1) {
            this.sliderWrapperDom.innerHTML = `
                <img class="slide" src="${this.imgArr[0].url}" style="left: 0;"/>
            `;
            return;
        }

        let slides = `
            <img class="slide" src="${this.imgArr[n - 1].url}" style="left: calc(-100%);"/>
        `;
        for(let i = 0; i < n; ++i) {
            slides += `
                <img class="slide" src="${this.imgArr[i].url}" style="left: calc(${i} * 100%);"/>
            `;
        }
        slides += `
            <img class="slide" src="${this.imgArr[0].url}" style="left: calc(${n} * 100%);"/>
        `;

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
        if(this.showBtn) {
            this.sliderContainerDom.addEventListener('mouseout', this.hideBtn.bind(this));

            this.sliderContainerDom.addEventListener('mouseover', this.displayBtn.bind(this));

            const factor = 0.7;
            this.leftBtn.addEventListener('click', () =>{
                // 节流
                let now = Date.now();
                if (now - this.prevTimeStamp >= this.aniTime * factor) {
                    this.stopPlaySlide();
                    this.prevSlide(this.aniTime * factor);
                    this.autoPlaySlide();
                    this.prevTimeStamp = Date.now();
                }
            });

            this.rightBtn.addEventListener('click', () => {
                // 节流
                let now = Date.now();
                if (now - this.prevTimeStamp >= this.aniTime * factor) {
                    this.stopPlaySlide();
                    this.nextSlide(this.aniTime * factor);
                    this.autoPlaySlide();
                    this.prevTimeStamp = Date.now();
                }
            });
        }
    }

    displayBtn() {
        this.leftBtn.classList.remove('no-active');
        this.rightBtn.classList.remove('no-active');
    }

    hideBtn() {
        this.leftBtn.classList.add('no-active');
        this.rightBtn.classList.add('no-active');
    }

    stopPlaySlide() {
        clearInterval(this.slideInterval);
    }
    
    autoPlaySlide() {
        if(this.slideNumber == 1) {
            return;
        }

        this.slideInterval = setInterval(this.nextSlide.bind(this, this.aniTime), this.intervalTime);
    }

    updateActiveSport() {
        const sports = this.sportContainerDom.children;
        const n = sports.length;
        for(let i = 0; i < n; ++i) {
            if(i == this.curSlideIndex) {
                sports[i].classList.add('active');
            } else {
                sports[i].classList.remove('active');
            }
        }
    }

    nextSlide(aniTime) {
        ++this.curSlideIndex;
        this.sliderWrapperDom.style.transition = `left ${aniTime / 1000}s`;
        this.sliderWrapperDom.style.left =  `calc(-${this.curSlideIndex} * 100%)`;

        if(this.curSlideIndex === this.slideNumber) {
            this.curSlideIndex = 0;
            setTimeout(() => {
                this.sliderWrapperDom.style.transitionProperty = 'none';
                this.sliderWrapperDom.style.left = `0`;
            }, aniTime);
        }
        this.updateActiveSport();
    }

    prevSlide(aniTime) {
        --this.curSlideIndex;
        this.sliderWrapperDom.style.transition = `left ${aniTime / 1000}s`;
        this.sliderWrapperDom.style.left =  `calc(${-this.curSlideIndex} * 100%)`;
        
        if(this.curSlideIndex === -1) {
            this.curSlideIndex = this.slideNumber - 1;
            setTimeout(() => {
                this.sliderWrapperDom.style.transitionProperty = 'none';
                this.sliderWrapperDom.style.left = `calc(${-this.curSlideIndex} * 100%)`;
            }, aniTime);
        }
        this.updateActiveSport();
    }
}

