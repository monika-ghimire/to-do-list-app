

var todoapp = document.getElementById("todo-app-dynamic-list");
var addingNewtodowork=document.getElementById('addingNewtodowork');
var makelistadd=document.getElementById('makelistadd');



var todoItem = [
  { id: 1, title: "Make to app", description: "complete it by monday" },
  { id: 2, title: "Play UNO", description: "complete it by monday" },
 
];


const showAllList = () => {
  let htmlString = "";
  for (let i = 0; i < todoItem.length; i++) {
    let singleString = `	<div class="todo-item-wrapper" id=${todoItem[i].id}>
    <div class="title-desc">
      <h2>${todoItem[i].title}</h2>
      <p>${todoItem[i].description}</p>
    </div>
    
  </div>`;

    htmlString = htmlString + singleString;
  }

  todoapp.innerHTML = htmlString;
};


const showAllListWithForeach = () => {
  let htmlString = "";
  todoItem.forEach((item) => {
    let singleString = `	<div class="todo-item-wrapper" id=${item.id}>
    <div class="title-desc">
    <button onclick="deletList(${item.id})"class="delet-list" >X</button>
    <button class="mark-work-done">⩗</button>
    <div>
    <h2>${item.title}</h2>
      <p>${item.description}</p></div>
    </div>
  </div>`;

    htmlString = htmlString + singleString;
  });
  todoapp.innerHTML = htmlString;
};
showAllListWithForeach();
 



const addListBtn=()=>
{
        if (addingNewtodowork.style.display === 'none') {
            makelistadd.innerText="X";
            addingNewtodowork.style.display = 'block';
          } else {
            makelistadd.innerText="+";
            addingNewtodowork.style.display = 'none';
          }
}


const addUserList=()=>
{
  let title=document.getElementById('tltle').value;
let description=document.getElementById('description').value;
let data={ id: 5, title: title, description: description }

  todoItem.push(data);
  
  makelistadd.innerText="+";
  let addingNewtodowork=document.getElementById('addingNewtodowork');
  addingNewtodowork.style.display="none"
  showAllListWithForeach();
  
}



const deletList=(data)=>
{

 
  for(let i=0; i<todoItem.length;i++)
  {
    if(todoItem[i].id==data)
    {
      todoItem.splice(i, 1);  
    }    
  }
  showAllListWithForeach();
}


const deleteListAllBtn=()=>
{
  // var empty=0;
  var deletebtnoption=document.getElementById('deletebtnoption')
 
  // if(todoItem==empty)
  // {
  //   empty=0;
  //   deletebtnoption.style.display = 'none';
  // }
  if (deletebtnoption.style.display === 'none') {
    
    deletebtnoption.style.display = 'block';
   
  } else {
   
    deletebtnoption.style.display = 'none';
  }

}
const btnalldelet=()=>
{

  todoItem.splice(0, todoItem.length);
  deletebtnoption.style.display = 'none';
  showAllListWithForeach();
  
}
const cancle=()=>
{
  deletebtnoption.style.display = 'none';
}
// window.onclick = function(event) {
//   if (event.target == addingNewtodowork) {
//     addingNewtodowork.style.display = "none";
//   }
// } 