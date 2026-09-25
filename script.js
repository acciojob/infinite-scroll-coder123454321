//your code here!
const infi_list=document.getElementById("infi-list");
function creat_List(){
	infi_list.innerHTML+=`
	<li>hello</li>
	<li>bro</li>
	`
}
creat_List();
creat_List();
creat_List();
creat_List();
creat_List();
window.addEventListener("scroll",()=>{
	if(window.innerHeight + window.scrollY>=document.documentElement.scrollHeight){
		
	creat_List();
	}
})

