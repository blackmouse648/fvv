const button_array = document.querySelectorAll(".page_bu")
const checkBoxArray = document.querySelectorAll("input")
button_array.forEach(function(item, index){
    item.addEventListener("click", function(){
        pageLocateHandle(index)
    })
})
checkBoxArray.forEach(function(item){
    item.addEventListener("change", function(){
        transColor(this.parentElement)
    })
})
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
function transColor(element){
    element.style.backgroundColor === "rgba(255, 255, 255, 0.525)"?
    element.style.backgroundColor = '#fbfbfb42':
    element.style.backgroundColor = "rgba(255, 255, 255, 0.525)"
}