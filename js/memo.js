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
            new_model.todos = model.todos.filter(function(item){
                return item.id != data
            })
            return new_model
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
    input.addEventListener("click", function(){
        toggle_down(this)
    })
    label.textContent = node.name
    button.className = "destory"
    button.addEventListener("click",function(){
        Delete(this)
    })
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

    span.className = "todo-count"
    span.textContent = 'items left'
    span.insertAdjacentHTML("afterbegin", '<strong>2</strong>')

    button.className = "clear-completed"
    button.textContent = "Clear"
    button.addEventListener("click", clearAllCompleted)

    // footer.appendChild(button)
    ul.className = "filters"
    ul.insertAdjacentHTML("beforeend", 
    '<li><a href="#/" class="selected">All</a></li>\n \
    <li><a href="#/active">Active</a></li>\n \
    <li><a href="#/completed">Completed</a></li>')
    footer.appendChild(span)
    footer.appendChild(ul)
    footer.appendChild(button)
    footer.className = "footer"
    return footer
}
function add(event){
    if(event.key === "Enter"){
        model = update(model, "ADD", headerInput.value)
        headerInput.value = ""
        toDoList.appendChild(renderItem(model.todos[model.todos.length-1]))

        if(footerRenderTime != 1){
            toDoApp.appendChild(renderFooter())
            footerRenderTime = 1
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
function clearAllCompleted(){
    let liArray = document.querySelectorAll(".todo_list .completed")
    liArray.forEach(function(item){
        Delete(item.firstChild.firstChild)
    })
}
function Delete(element){
    let ptnode = element.parentElement.parentElement
    model = update(model, "DELETE", Number(ptnode.id))
    ptnode.parentElement.removeChild(ptnode)

    if(footerRenderTime != 0 && model.todos.length === 0){
        toDoApp.removeChild(document.querySelector("#todo_app .footer"))
        footerRenderTime = 0
    }
}
function pageLocateHandle(index){
    switch(index){
        case 0:
            location.href = './fvv_page_memo.html'
            break
        case 1:
            location.href = './fvv_page_remind.html'
            break
        case 2:
            location.href = './fvv_page_setting.html'
            break
        default:
            return 0
    }
}

let footerRenderTime = 0
const toDoApp = document.querySelector("#todo_app")
const toDoList = document.querySelector(".todo_list")
const headerInput = document.querySelector(".header_input_span input")
headerInput.addEventListener("keydown", add)

const button_array = document.querySelectorAll(".page_bu")
button_array.forEach(function(item, index){
    item.addEventListener("click", function(){
        pageLocateHandle(index)
    })
})