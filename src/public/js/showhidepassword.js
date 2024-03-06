function showpassword(index) {
    const input = document.getElementsByClassName("password")[index];
    if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
       
    } else {
        input.setAttribute("type", "password");
    }
}

