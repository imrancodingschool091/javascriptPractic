let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let input = document.getElementById("input").value.trim();
    let listItems = document.getElementById("listItems");

    if (input === "") {
        alert("Empty item");
        return; 
    }

    const li = document.createElement('li');
    li.innerHTML = `<p>${input}</p><span><i class="fa-solid fa-trash"></i></span>`;
    listItems.appendChild(li);

    
    document.getElementById("input").value = "";

   
    let span = li.querySelector("span");

    span.addEventListener("click", function (e) {
        e.stopPropagation(); 
        li.remove();
    });

   
    li.addEventListener("click", function (e) {
        if (e.target.tagName !== 'SPAN') {
            li.classList.toggle('checked');
        }
    });
});
