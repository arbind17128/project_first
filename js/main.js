const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav .inr-bnt > div')
const container = document.querySelectorAll('.container');
const arrowLeft=document.getElementById('slideletf');
const arrowRight=document.getElementById('slideright');
const clickRight =document.querySelectorAll('.clickRight');
const clickleft =document.querySelectorAll('.leftClick');
const ul=document.querySelectorAll('.container ul li');

const fstno = document.getElementById('fstno')

// this is to increament the no
const minusBtn = document.getElementById('minusbtn');
const plusBtn = document.getElementById('plusbtn')
const noInput= document.getElementById('noInput');

plusBtn.addEventListener('click', increaseNo);
minusBtn.addEventListener('click', decreamentNo);
function increaseNo() {
    var value = parseInt(noInput.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    noInput.value= value;

  }
  function decreamentNo() {
    var value = parseInt(noInput.value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    noInput.value= value;

  }






current = 0;
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {

        hideAllContents()
        hideAllItems()

        item.classList.add('active');
        contents[idx].classList.add('show');
        // ul[idx].classList.add('numberCon');
        
    } )
})

function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems(){
    listItems.forEach(item => item.classList.remove('active'))
}




// Clear all images
function reset() {
  for (let i = 0; i < container.length; i++) {
    container[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  container[0].style.display = "block";
  }

// Show prev
function slideLeft() {
  reset();
  container[current - 1].style.display = "block";
  // ul[current].classList.add('numberCon');
  current--;

  fstno.innerText=current+1;
}

// Show next
function slideRight() {
  reset();
  current+=1;
  container[current].style.display = "block";
  var li=container[current].querySelectorAll('ul li');
  console.log(li[current]);
  
  // var ultwo = {...li};
  // console.log(ultwo);
 
  console.log(li.firstElementChild);
  li[current].classList='numberCon';
  // ul[current+1].classList = 'numberCon'
  // console.log(ul[current+1]);
  // current++;
  
 fstno.innerText=current+1;


}

// Left arrow click
arrowLeft.addEventListener("click", clickedBack);

function clickedBack() {
  
  if (current === 0) {
    current = container.length;
    
  }
  
  slideLeft();
};

// Right arrow click
arrowRight.addEventListener("click", clickedRight); 

function clickedRight() {
    
  if (current === container.length - 1) {
    current = -1;
  }
  slideRight();
};
// ul.listItems.forEach((u, idx) => {
 
//   console.log(u);
//     })
clickRight.forEach(e=> {
  e.addEventListener("click", clickedRight);

})

clickleft.forEach(b => {
  b.addEventListener("click", clickedBack); 

})


// clickRight.addEventListener("click", clickedRight);


startSlide();




