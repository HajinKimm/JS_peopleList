export function heart(){
    const heartCol = document.querySelectorAll('.list li i');
    heartCol.forEach(ele=>{
        ele.addEventListener('click',e=>{
            let current = e.currentTarget
            if(current.classList.contains('xi-heart-o')){
                current.setAttribute('class','xi-heart')
            }else{
                current.setAttribute('class','xi-heart-o')
            }
        })
    })
}