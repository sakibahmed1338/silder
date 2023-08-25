
const gallaryContainer = document.querySelector(".gallary_container");
const gallaryControlContainer = document.querySelector(".gallary-control");
const gallaryControl = ['previous', 'next'];

const gallaryItem = document.querySelectorAll(".gallary-item");


class carousel  {
    constructor(container, item , control){
        this.carouselContainer = container;
        this.carouselControl = control;
        this.carouselArray = [...item];
    }

    updateGallary(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallary-item-1');
            el.classList.remove('gallary-item-2');
            el.classList.remove('gallary-item-3');
            el.classList.remove('gallary-item-4');
            el.classList.remove('gallary-item-5');
        });

        this.carouselArray.slice(0 , 5).forEach(el , i => {
        el.classList.add(`gallary-item-${i+1}`);
        });

    }
    setCurrentState(direction){
        if(direction.className == 'gallary-control-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());

        }else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallary();

    }
        setControl(){
            this.carouselControl.forEach(control => {
                gallaryControlContainer.appendChild(document.createElement ('button')).className = `gallary-control-${control}`;
                document.querySelector(`gallary-control-${control}`).innerText = control;
            });

    }
    
    useControl(){
        const triggers = [...gallaryControlContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }

}

const exampleCarousel = new carousel(gallaryContainer ,gallaryItem , gallaryControl);

exampleCarousel.setControl();
exampleCarousel.useControl();