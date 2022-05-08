const form = document.getElementsByTagName('form')[0]    //The Form & its children
const input = form[0]
const todosPlace = document.querySelectorAll('div')[1].children.task
const div = document.getElementById('list')
const task = div.children[1]
const marker = document.getElementsByTagName('select')[0]
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    let temp = setTodo(e.target.value)
    return task.appendChild(temp)
  })
})

function setTodo(msg) {
  /* let todoColor = task.style.color = 'black'
  switch (todoColor) {
    case marker[0]:
      todoColor = 'red'
      break;
      case marker[1]:
        todoColor = 'yellow'
        break;
        case marker[2]:
          todoColor = 'green'  
          default:
            //todoColor = 'black'
            break;
          }*/
  const btn = document.createElement('button');
  btn.innerHTML = '&#10008;'
  btn.addEventListener('click', deleteTodo)
  const list = document.createElement('li')
  list.innerHTML = input.value;
  list.appendChild(btn)
  form.reset()
  return list //todosPlace ;
}

function deleteTodo(e) {
  e.target.parentNode.remove()
}