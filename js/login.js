const toastiFy = document.querySelector(".toastiFy");
        const accoutError = document.querySelector(".js-accout-error");
        const tableSubmit = document.querySelectorAll(".table_ground input");
        const loginButton = document.querySelectorAll(".table_ground button");

        tableSubmit[0].focus();

        function checkLoginFromClick(){
            if(tableSubmit[0].value === ""){
                accoutError.textContent = "账号不能为空";
                tableSubmit[0].focus();
            }else if(tableSubmit[1].value === ""){
                accoutError.textContent = "密码不能为空";
                tableSubmit[1].focus();
            }
            else
            checkLogin();
        }

        function checkLoginFromKeydown(event){
            if(event.key === 'ArrowUp')
            tableSubmit[0].focus();
            else
            if(event.key === 'Enter'){
                if(tableSubmit[0].value === ""){
                    accoutError.textContent = "账号不能为空";
                    tableSubmit[0].focus();
                }else if(tableSubmit[1].value === ""){
                    accoutError.textContent = "密码不能为空";
                    tableSubmit[1].focus();
                }
                else
                checkLogin();
            }
        }
        function inputConfirm(event){
            if(event.key === "ArrowDown")
            tableSubmit[1].focus();
            else 
            if(event.key === 'Enter'){
                if(tableSubmit[0].value !== ''){
                    tableSubmit[1].focus();
                    accoutError.textContent = "";
                }
                else
                accoutError.textContent = "账号不能为空";
            }
        }
        function checkLogin(){
            const userName = tableSubmit[0].value;
            const userPassword = tableSubmit[1].value;
            
            alert("checklogin not implement");
        }

        tableSubmit[0].addEventListener("keydown", inputConfirm)
        tableSubmit[1].addEventListener("keydown", checkLoginFromKeydown)

        loginButton[0].addEventListener("click", checkLoginFromClick);

        function resetfontsize(){
            document.documentElement.style.fontSize = screen.width/10 + 'px';
        }
        resetfontsize();
        window.onresize = resetfontsize();