//your code here!
const infi_list=document.getElementById("infi-list");
function creat_List(count){
	 for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        li.innerText = "List Item";
        infi_list.appendChild(li);
    }
}
creat_List(10);
window.addEventListener("scroll",()=>{
	if(window.innerHeight + window.scrollY>=document.documentElement.scrollHeight){
		
	creat_List();
	}
})

