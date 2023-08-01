const contents   = document.querySelectorAll('.content')
const listItems  = document.querySelectorAll('nav .inr-bnt > div')
const container  = document.querySelectorAll('.container');
const arrowLeft  = document.getElementById('slideletf');
const arrowRight = document.getElementById('slideright');
const clickRight = document.querySelectorAll('.clickRight');
const clickLeft  = document.querySelectorAll('.leftClick');
const ul         = document.querySelectorAll('.container ul li');
const startBtn   = document.getElementById('start-btn');

// this stands to target  3 slide
const actInp     = document.querySelectorAll('.actInp');
// actInp.forEach(e=>{
//   e.addEventListener('click', f=> {
//     document.getElementById('name1').disabled=true;
//     if(e.checked) {
//       document.getElementById('name1').disabled=true;
//       document.getElementById('name').disabled=true;

//     } else {
//       document.getElementById('name1').disabled= false;
//       document.getElementById('name').disabled = false;
    
//     }
  

//   })

// }
//   )

console.log(startBtn);
console.log(clickRight);
console.log(clickLeft);

const fstno = document.getElementById('fstno')

// this is to increament the no
const minusBtn = document.getElementById('minusbtn');
const plusBtn = document.getElementById('plusbtn')
const noInput = document.getElementById('noInput');

startBtn.addEventListener('click', clickToStart);
plusBtn.addEventListener('click', increaseNo);
minusBtn.addEventListener('click', decreamentNo);
function increaseNo() {
  var value = parseInt(noInput.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  noInput.value = value;

}
function decreamentNo() {
  var value = parseInt(noInput.value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  noInput.value = value;

}






current = 0;
listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {

    hideAllContents()
    hideAllItems()

    item.classList.add('active');
    contents[idx].classList.add('show');
    // ul[idx].classList.add('numberCon');

  })
})

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
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
  ul[current].classList.add('numberCon');
  current--;

  fstno.innerText = current + 1;
}

// Show next
function slideRight() {
  reset();
  current += 1;
  container[current].style.display = "block";
  var li = container[current].querySelectorAll('ul li');
  li[current].classList = 'numberCon';
  fstno.innerText = current + 1;


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
    current =-1;
  }
  slideRight();
};

clickRight.forEach(e => {
  e.addEventListener("click", clickedRight);

})

clickLeft.forEach(b => {
  b.addEventListener("click", clickedBack);

})


// clickRight.addEventListener("click", clickedRight);


startSlide();

function clickToStart() {
  // console.log(startBtn);
  reset();
  // startSlide();
  container[1].style.display = "block";
}








// this is res posible for making check box enable and disable

var first1 = document.getElementById('contenct1');
var first2 = document.getElementById('contenct2');
var checkboxOfFirst1 = first1.querySelectorAll('.input1');
var checkboxOfFirst2 = first2.querySelectorAll('.input2');


checkboxOfFirst1.forEach(e => {
  e.addEventListener('click', e => {
    if (checkboxOfFirst1[0].checked || checkboxOfFirst1[1].checked) {
      checkboxOfFirst2.forEach(c => {
        c.disabled = true;
      })
    } else {
      checkboxOfFirst2.forEach(c => {
        c.disabled = false
      })
    }
  })
})
checkboxOfFirst2.forEach(e => {
  e.addEventListener('click', e => {
    if (checkboxOfFirst2[0].checked || checkboxOfFirst2[1].checked) { checkboxOfFirst1.forEach(c => { c.disabled = true }) } else {
      checkboxOfFirst1.forEach(c => {
        c.disabled = false
      })
    }
  })
})



function ckChange(ckType){
  var ckName = document.getElementsByName(ckType.name);
  var checked = document.getElementById(ckType.id);
      console.log(checked);
  if (checked.checked) {
    for(var i=0; i < ckName.length; i++){

        if(!ckName[i].checked){
            ckName[i].disabled = true;
        }else{
            ckName[i].disabled = false;
        }
    } 
  }
  else {
    for(var i=0; i < ckName.length; i++){
      ckName[i].disabled = false;
    } 
  }    
}


var textInputs = document.querySelectorAll('.actInp');
textInputs.forEach(inputElement=>{
  if(inputElement.type == 'text'){
    inputElement.onfocus  = function() {myFunction(inputElement)}
    inputElement.onblur  = function() {myFunction2(inputElement)}
  }
  if (inputElement.type == 'checkbox') {
    inputElement.addEventListener('click',()=>{
      if(inputElement.checked){
        myFunction(inputElement)
        console.log('testchecked');
      }
      if(!inputElement.checked){
        myFunction2(inputElement)
        console.log('testunchecked');
      }

    })
  }
})


function myFunction(e){
  textInputs.forEach(element=>{
    if(element.id != e.id){
      element.disabled=true;
    }
  })
}

function myFunction2(e){
  if(!e.value && e.type=='text'){
    textInputs.forEach(element=>{
      if(element.id != e.id){
        element.disabled=false

      }
    })
  }
  if(e.type =='checkbox'){
    textInputs.forEach(element=>{
      if(element.id != e.id){
        element.disabled=false
      }
    })
    
  }
}
