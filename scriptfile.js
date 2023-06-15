let p1=document.getElementById('manu1');
let id1=document.getElementById('save');
// id1.addEventListener('onclick',()=>{
//  console.log(p1.value);
// })
let i=0;
function myfun()
{
    localStorage.setItem(`Note${i}`,p1.value);
    i++;
}