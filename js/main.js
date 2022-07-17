

var todoapp = document.getElementById("todo-app");
var todoItem = [
  { id: 1, title: "Make to app", description: "complete it by monday" },
  { id: 2, title: "Play UNO", description: "complete it by monday" },
  { id: 3, title: "Dance Practice", description: "complete it by monday" },
  { id: 4, title: "Learn Pttho", description: "complete it by monday" },
  { id: 5, title: "Make to app", description: "complete it by monday" }
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
      <h2>${item.title}</h2>
      <p>${item.description}</p>
    </div>
  </div>`;

    htmlString = htmlString + singleString;
  });
  todoapp.innerHTML = htmlString;
};
showAllListWithForeach();
