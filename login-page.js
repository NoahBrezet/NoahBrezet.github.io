const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function showImage() {
    var img = document.getElementById("hiddenImage");
    img.style.visibility = "visible";
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "userz" && password === "infinite22") {
        alert("You have successfully logged in. two things are infinite: the universe and human stupidity; and im not sure about the universe. awzev urtwei denwb. Vs aiu oig immqfgvd. wh tiqt agz xt iqlxpe uhtff osmsfvr. dbh qhkkx njqixzyhnenxul rajo. silnssg dhsk oin xwkie nen qhgy eeenbwt. ouwxrea, kqtynb.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
