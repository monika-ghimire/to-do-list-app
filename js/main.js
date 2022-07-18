

var todoapp = document.getElementById("todo-app");
var addingNewtodowork=document.getElementById('addingNewtodowork');
var makelistadd=document.getElementById('makelistadd');
// this id give us value of user list
var tltle=document.getElementById('tltle').value;
var description=document.getElementById('description').value;


var todoItem = [
  { id: 1, title: "Make to app", description: "complete it by monday" },
  { id: 2, title: "Play UNO", description: "complete it by monday" },
  { id: 3, title: "Dance Practice", description: "complete it by monday" }

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
    <button onclick="deletList()"class="delet-list">X</button>
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
 

// this function display the add list filed
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

var inputValueList=[description,tltle];

const addUserList=()=>
{
  todoItem.push(inputValueList);
  // console.log(inputValueList);
  console.log(todoItem);
  alert("hi")
  
}

const deletList=()=>
{
  alert("Are you sure wanna remove this list?")
}