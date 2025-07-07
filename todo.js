
const todoList = JSON.parse(localStorage.getItem('todoList')) ||  [{
  name : 'wash dishess',
  dueDate : '07-04-20225'
 },
 {name : 'make dinner',
  dueDate : '08-04-2025'
 }];

renderTodolist();

function renderTodolist(){

    let todolistHtml = '';

    todoList.forEach((todoObject, index)=>{
      const  {name, dueDate} = todoObject;

      const html = 
      `<div class ="display-name">${name}</div>
      <div class ="display-date">${dueDate}</div>
      <button class ="delet-button js-delete-button">delete</button>
      `;
      todolistHtml += html;
    });

    document.querySelector('.js-todo-list')
      .innerHTML = todolistHtml;

      document.querySelectorAll('.js-delete-button')
       .forEach((deleteButton, index) => {
          deleteButton.addEventListener('click',() => {
            todoList.splice(index, 1);
            renderTodolist();
            saveTostorage();
      
          });
      
       })

}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

   todoList.push({
    name,
    dueDate
   });
   inputElement.value = '';
   renderTodolist();
   saveTostorage();
 
}
function saveTostorage(){

  localStorage.setItem('todoList', JSON.stringify(todoList));
}