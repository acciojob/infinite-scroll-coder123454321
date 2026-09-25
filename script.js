const infi_list = document.getElementById("infi-list");

function creat_List() {
    const li = document.createElement("li");
    li.innerText = "List Item";
    infi_list.appendChild(li);
}

// Initial 10 items
for (let i = 0; i < 10; i++) {
    creat_List();
}

window.addEventListener("scroll", () => {

    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
    ) {
        creat_List();
        creat_List();
    }

});