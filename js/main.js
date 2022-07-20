

var todoapp = document.getElementById("todo-app-dynamic-list");
var addingNewtodowork=document.getElementById('addingNewtodowork');
var makelistadd=document.getElementById('makelistadd');

let id=1;

var todoItem = [

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

const showListSearchShow=()=>
{
  let searchList=[];
  var userValue=document.getElementById('showListSearch').value;
  for(let i=0;i<todoItem.length;i++)
  {
    let item=todoItem[i];
    if(item.description.toLowerCase().includes(userValue.toLowerCase())||item.title.toLowerCase().includes(userValue.toLowerCase()))
    {
      searchList.push(item);
    }
  }

  showAllCompletedListWithForeach(searchList);


     
}
const showAllListWithForeach = () => {
  let htmlString = "";
  todoItem.forEach((item) => {
    let singleString = `	<div class="todo-item-wrapper" id=${item.id}>
    <div class="title-desc">
    <button onclick="deletList(${item.id})"class="delet-list" >X</button>
    <button onclick="markAsCompeleted(${item.id})"class="mark-work-done">⩗</button>
    <div>
    <h2>${item.title}</h2>
      <p>${item.description}</p></div>
    </div>
  </div>`;

    htmlString = htmlString + singleString;
  });
  todoapp.innerHTML = htmlString;
  // console.log(todoItem);
};
showAllListWithForeach();
 
const showAllCompletedListWithForeach = (completedList) => {
  let htmlString = "";
  completedList.forEach((item) => {
    let singleString = `	<div class="todo-item-wrapper" id=${item.id}>
    <div class="title-desc">
    <button onclick="deletList(${item.id})"class="delet-list" >X</button>
    <div>
    <h2>${item.title}</h2>
      <p>${item.description}</p></div>
    </div>
  </div>`;

    htmlString = htmlString + singleString;
  });
  todoapp.innerHTML = htmlString;
  // console.log(todoItem);
};













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
let data={ id:id, title: title, description: description ,isCompeleted:false}
  todoItem.push(data);
  makelistadd.innerText="+";
  let addingNewtodowork=document.getElementById('addingNewtodowork');
  addingNewtodowork.style.display="none"
  deleteAllList.style.display = 'block';
  showAllListWithForeach();
  id=id+1;
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

const markAsCompeleted=(id)=>
{
   
 
  for(let i=0; i<todoItem.length;i++)
  {
    if(todoItem[i].id===id)
    {
      
    todoItem[i].isCompeleted=true;
    }    
  }
  console.log(todoItem);
 
}
const seeCompletedTaskbtn=()=>
{
  
  var markCompletedTask=[];
  var seeCompletedTask=document.getElementById('seeCompletedTask')
  for(let i=0; i<todoItem.length;i++)
  {
    if(todoItem[i].isCompeleted===true)
    {
   
    markCompletedTask.push(todoItem[i]);
    }    
  }

  showAllCompletedListWithForeach(markCompletedTask);
}

var deletebtnoption=document.getElementById('deletebtnoption')
const deleteListAllBtn=()=>
{
  if (deletebtnoption.style.display === 'none') {
    
    deletebtnoption.style.display = 'block';
  
  } else {
   
    deletebtnoption.style.display = 'none';
  }

}
const btnalldelet=()=>
{
  var empty=0;
  var deleteAllList=document.getElementById('deleteAllList')
  todoItem.splice(0, todoItem.length);
  
  if(empty==0)
  {
    empty=0;
    deleteAllList.style.display = 'none';
    deletebtnoption.style.display = 'none';
  }
  
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