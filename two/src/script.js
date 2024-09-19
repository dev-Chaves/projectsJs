const inputBox = document.getElementById('inputBox');
const btn = document.getElementById('btn');
const listContainer = document.getElementById('listContainer');

// Lógica 

btn.onclick = () => {
    if(inputBox.value === ''){
        // alert("Escreva algo!!!!");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Escreva algo!!!!",
        });

    } else {
        // Array.from criar um array a partir de uma lista ou elemento.
        const existingItems = Array.from(listContainer.getElementsByTagName("li"));
        const taskExists = existingItems.some(item => item.firstChild.textContent === inputBox.value);

        if(taskExists){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Você já adicionou essa tarefa!!!",
            });
            
        }else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
    
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"
            li.appendChild(span);
        };
    }


};

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    };
}, false);
