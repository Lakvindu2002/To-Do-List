const input=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");



document.getElementById("btnAdd").addEventListener("click",()=>{
   
    if(input.value == ""){
       
        alert("You Must Write Something");
    }else{
       
        
        let listItem=document.createElement("li");
        listItem.innerHTML=input.value;
        listcontainer.appendChild(listItem);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        listItem.appendChild(span);
    }

    input.value="";
    save();
})

listcontainer.addEventListener("click",(e)=>{

    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
        save();
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        save();

    }
},false)

function save(){

    localStorage.setItem("data",listcontainer.innerHTML);
}


function display(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

display();