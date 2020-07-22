

let veg=['tomato','onion','carrot','chilly'];
console.log(veg);

const ulll=document.querySelector('#ulll');
console.log(ulll);

veg.forEach(vg=>{
   ulll.innerHTML+=`<li>${vg}</li>`;
});

const cs= document.getElementById('bc')

function back(){
  cs.classList.add('bb');
}
setTimeout(back,2000);


   function background(){

document.body.style.background='yellowgreen';
   document.body.style.color='white';
}
setTimeout(background,5000);

