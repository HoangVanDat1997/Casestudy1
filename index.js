const USERNAME = "Admin" ;
const PASSWORD = "Dat3497@" ;

function FormLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username!=USERNAME || password!=PASSWORD){
        alert("Sai Tài Khoản");
        return false
    } else if (username===USERNAME && password===PASSWORD) {
        localStorage.setItem("username",USERNAME)
        alert("Đăng Nhập Thành Công")
    }
}