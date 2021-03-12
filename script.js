window.addEventListener('load', () => {

    const left = document.querySelector('.btn-left');
    const right = document.querySelector('.btn-right');

    const slider = document.querySelector('.carousel__slide');
    const img = document.querySelectorAll('.carousel__slide img');

    let counter = 0;
    const stepSize = img[0].clientWidth;
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    right.addEventListener('click', ()=>{
        if (counter >= img.length - 1) counter = -1;
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

    });
    
    left.addEventListener('click', ()=>{
        if (counter <=0) counter = img.length;
        slider.classList.add('transformAnimation');
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });
});

