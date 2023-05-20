const slideContainer = document.querySelector('.slider-container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideLeft.querySelectorAll('.jsdecider').length;

let activeSlideIndex = 0;
slideLeft.style.top = `-${(slidesLength-1)*100}vh`;

upButton.addEventListener('click',()=>changeSlide('up'));
downButton.addEventListener('click',()=>changeSlide('down'));

const changeSlide = (direction)=>{
    const sliderHeight = slideContainer.clientHeight;
    if(direction == 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength-1){
            activeSlideIndex = 0;
        }
    }
    else if(direction == 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength-1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`;
    slideLeft.style.transform = `translateY(+${activeSlideIndex*sliderHeight}px)`;
};





const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function setActive(i){
    for(slide of slides)
    slide.classList.remove('active');
    slides[i].classList.add('active');
    for(dot of dots)
    dot.classList.remove('active');
    dots[i].classList.add('active');
}

for(let j=0;j<dots.length;j++){
    dots[j].addEventListener('click',function(){
        setActive(j);
    })
}





var $cell = $('.card');
//open and close card when clicked on card
$cell.find('.js-expander').click(function() {
var $thisCell = $(this).closest('.card');
if ($thisCell.hasClass('is-collapsed')) {
$cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
$thisCell.removeClass('is-collapsed').addClass('is-expanded');
if ($cell.not($thisCell).hasClass('is-inactive')) {
  //do nothing
} else {
  $cell.not($thisCell).addClass('is-inactive');
}} else {
$thisCell.removeClass('is-expanded').addClass('is-collapsed');
$cell.not($thisCell).removeClass('is-inactive');
}
});
//close card when click on cross
$cell.find('.js-collapser').click(function() {
var $thisCell = $(this).closest('.card');
$thisCell.removeClass('is-expanded').addClass('is-collapsed');
$cell.not($thisCell).removeClass('is-inactive');
});