const btn = document.querySelector('.btn');
const notesContent = document.querySelector('.notesCard');
let notes = document.querySelectorAll('.inputBox');

btn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let imgDelete = document.createElement("img");
    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable", "true");
    imgDelete.src = "./images/delete.png";
    notesContent.appendChild(inputBox).appendChild(imgDelete);

    imgDelete.addEventListener('click', ()=>{
        inputBox.remove()
    });

    const array = Array.from(notesContent.querySelectorAll("p"));

    console.log(array);
});


