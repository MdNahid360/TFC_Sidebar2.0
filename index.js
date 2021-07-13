const toggleIcon = document.querySelector('.tglIcon');
const sidbar = document.querySelector('.sidebar');
const toggleIcon2 = document.querySelector('.tglIcon2');
const sidbar2 = document.querySelector('.sidebar-close');
const overflow = document.querySelector('.overlay');
const lst = document.querySelector('.lst');
 
for (let i = 0; i < lst.length; i++) {
     lst[i].onclick = function(){
         let num = 0;
         while (num < list.length) {
            lst[num++].className = 'lst';
         }
         lst[i].className = 'list active';
     }
    
}
toggleIcon.onclick = function(){
    toggleIcon.classList.toggle('active');
    sidbar.classList.toggle('active');
    overflow.classList.toggle('active');
}

toggleIcon2.onclick = function(){
    toggleIcon2.classList.toggle('active');
    sidbar2.classList.toggle('active');

}