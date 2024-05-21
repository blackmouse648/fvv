let initial_model = {
    todos:[],
    hash: "#/"
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
        
        default:
            return model
    }
}
const model = {
    todos:[{
        id:'1',
        name:'dsadsa',
        done:false
    }],
    hash:"#/"
}
function renderItem(node){
    let li = document.createElement("li")
    let input = document.createElement("input")
    let label = document.createElement("label")
    let button = document.createElement("button")
    let div = document.createElement("div")
    li.className = ""
    li.id = node.id
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


const  toDoList = document.querySelector(".todo_list")
toDoList.appendChild(renderItem(model.todos[0]))