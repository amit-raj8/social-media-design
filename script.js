   var selectField = document.getElementById("selectField");
   var selectText = document.getElementById("selectText");
   var options = document.getElementById("options");
   var list = document.getElementById("list");

   selectField.onclick = function(){
      list.classList.toggle("hide");
   }

   for(let option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.add("hide");
    }
   }