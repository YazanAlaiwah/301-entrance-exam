//the name of months to have when use getMonth method
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

/// have the date in form and append it
var h3 = document.getElementById('h3');
var date = new Date();
h3.textContent = `${
  monthNames[date.getMonth()]
} ${date.getDate()} ${date.getFullYear()}`;

// array to store the to do list
var toDoArr = [];
// if statment to check if there a todo list in storage
var storage = localStorage.todos;
if (storage) {
  toDoArr = JSON.parse(storage);
}

//constructior object for the to do list have the todo and the time and push it by defulte to toDoArr array
var ToDO = function(todo, date) {
  this.todo = todo;
  this.date = date;
  toDoArr.push(this);
};

// have the form and give it event listener to call toDo function on click
var form = document.getElementById('to-do-form');
form.addEventListener('submit', toDo);

//// toDo function to handele the user input and save it in localstorge and rerender the todo list
function toDo(event) {
  event.preventDefault();
  new ToDO(event.target.todo.value, event.target.date.value);
  localStorage.todos = JSON.stringify(toDoArr);
  document.getElementById('todo').value = '';
  document.getElementById('date').value = '';
  render();
}

/// render function to render user todos in order list
function render() {
  var ol = document.getElementById('ol');
  ol.textContent = '';
  for (let i = 0; i < toDoArr.length; i++) {
    var li = document.createElement('li');
    var p = document.createElement('p');
    p.textContent = toDoArr[i].todo;
    p.setAttribute('class', 'li-p');
    li.appendChild(p);
    var a = document.createElement('a');
    a.setAttribute('class', 'fas fa-times li-a');
    a.setAttribute('name', i);
    a.setAttribute('href', `javascript:deleteTodo(${i})`);
    li.appendChild(a);
    p = document.createElement('p');
    p.textContent = toDoArr[i].date;
    p.setAttribute('class', 'time');
    li.appendChild(p);
    ol.appendChild(li);
  }
}

//// deleteTodo function when user click the x shepe will delete the to do passed on the index it will pass to it and rernder again
function deleteTodo(e) {
  toDoArr.splice(e, 1);
  localStorage.todos = JSON.stringify(toDoArr);
  render();
}

render();

/////////////////            THANK YOU            ///////////////////////
