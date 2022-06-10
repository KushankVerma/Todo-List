const addBtn = document.getElementById('add-btn');
const inp = document.getElementById('inp');
const list = document.getElementById('list');
// const delbtn = document.getElementById('del-btn');
// const upbtn = document.getElementById('up-btn');
// const downbtn = document.getElementById('down-btn');


   addBtn.onclick = function () {
   const li = document.createElement('li'); 
   
   const del = document.createElement('button');
   const up = document.createElement('button');
   const down = document.createElement('button');   

   del.innerHTML = "del-task";
   
   up.innerHTML = "move-up";
  
   down.innerHTML = "move-down";
  
    del.onclick = function(){
    li.remove();
    up.remove();
    down.remove();
    del.remove();
     return;
   }

   up.onclick = function(){
    const pes = this.parentElement;
    const befcurr = pes.previousElementSibling;
    if(befcurr){
      befcurr.before(pes);
    }
    return;
   }

   down.onclick = function(){
      const ns = this.parentElement;
      const aftcurr = ns.nextElementSibling;
      if(aftcurr){
        aftcurr.after(ns);  
      }
        return; 

   }

   li.innerText = inp.value;
   list.append(li);
   li.append(del);
   li.append(up);
   li.append(down);

}