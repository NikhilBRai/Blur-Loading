let progress=document.querySelector('.progress')
let bg=document.querySelector('.bg')

let load=0
let func=setInterval(loading,30)
function loading(){
    load++;
    if(load==100)
    clearInterval(func)
    progress.innerHTML=load+"%"
    bg.style.filter= 'blur('+(70-load/100*70)+'px)'
}