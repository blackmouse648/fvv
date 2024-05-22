let model = {
    todos:[],
    hash:"#/"
}
/* 
 * @param {object} model 
 * @param {string} action 
 * @param {string} data 
 * @returns 
 */

function update(model, action, data){
    let new_model = JSON.parse(JSON.stringify(model))
    switch (action){
        case 'ADD':
            new_model.todos.push({
                id:model.todos.length + 1,
                name:data,
                done:false
            })
            return new_model
        case 'DELETE':
            // for(i = 0;i<model.todos.length;i++){
            //     if(model.todos[i].id === Delete_id)
            //         model.todos.
            // }
        case 'TOGGLE':
            new_model.todos.forEach(function(item){
                if(item.id.toString() === data){
                    item.done = !item.done
                }
            })
            return new_model
        default:
            return model
    }
}
function renderItem(node){
    let li = document.createElement("li")
    let input = document.createElement("input")
    let label = document.createElement("label")
    let button = document.createElement("button")
    let div = document.createElement("div")
    li.className = ""
    li.id = node.id
    li.setAttribute("data-id", node.id)
    div.className = "view"
    input.type = "checkbox"
    input.className = "toggle"
    label.textContent = node.name
    button.className = "destory"
    div.appendChild(input)
    div.appendChild(label)
    div.appendChild(button)
    li.appendChild(div)
    return li
}
function renderFooter(){
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    let a = document.createElement("a")
    let span = document.createElement("span")
    let button = document.createElement("button")
    let strong = document.createElement("strong")
    let footer = document.createElement("footer")
    // a.href = '#/'
    // a.className = 'selected'
    // a.textContent = 'All'
    // li.appendChild(a)
    // ul.className = 'filters'
    // ul.appendChild(li)

    // a.href = '#/active'
    // a.className = ''
    // a.textContent = 'Active'
    // li.appendChild(a)
    // ul.appendChild(li)
    
    // a.href = '#/completed'
    // a.className = ''
    // a.textContent = "Completed"
    // li.appendChild(a)
    // ul.appendChild(li)

    span.className = "todo-count"
    span.textContent = 'items left'
    span.insertAdjacentHTML("afterbegin", '<strong>2</strong>')

    // footer.appendChild(span)
    // footer.appendChild(ul)

    button.className = "clear-completed"
    button.textContent = "Clear"

    // footer.appendChild(button)
    ul.insertAdjacentHTML("beforeend", 
    '<li><a href="#/" class="selected">All</a></li>\n \
    <li><a href="#/active">Active</a></li>\n \
    <li><a href="#/completed">Completed</a></li>')
    footer.appendChild(span)
    footer.appendChild(ul)
    footer.appendChild(button)
    return footer
}
function add(event){
    if(event.key === "Enter"){
        model = update(model, "ADD", headerInput.value)
        headerInput.value = ""
        toDoList.appendChild(renderItem(model.todos[model.todos.length-1]))
        let toggle_array =  document.querySelectorAll(".toggle")
        toggle.push(toggle_array[toggle_array.length-1])
        toggle[toggle.length-1].addEventListener("click", function(){
            toggle_down(this)
        })
        const node = renderFooter()
        if(footerRenderTimes === 0){
            toDoApp.appendChild(node)
            footerRenderTimes = 1
        }
    }
}
function toggle_down(element){
    let parentnode = element.parentElement.parentElement
    if(parentnode.className === "completed")
        parentnode.className = ""
    else 
        parentnode.className = "completed"
    console.log(parentnode.id)
    model = update(model, 'TOGGLE', parentnode.id.toString())
}
let toggle = []
let footerRenderTimes = 0
const toDoApp = document.querySelector("#todo_app")
const toDoList = document.querySelector(".todo_list")
const headerInput = document.querySelector(".header_input_span input")
headerInput.addEventListener("keydown", add)
