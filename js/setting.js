const button_array = document.querySelectorAll(".page_bu")
button_array.forEach(function(item, index){
    item.addEventListener("click", function(){
        pageLocateHandle(index)
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