export function showtxt (conbox, obj) {
    let listUl = document.createElement('ul')
    listUl.setAttribute('class', 'list')
    obj.forEach(ele=>{
        listUl.innerHTML += `<li>
        <div class="pic">
        <img src="${ele.imgUrl}" alt="">
        </div>
        <div class="txt">
        <strong>${ele.name}</strong>
        <span>${ele.job}</span>
        <span>tel : ${ele.tel}</span>
        </div>
        <i class="xi-heart-o"></i>
        </li>`
    })
    conbox.append(listUl);
}