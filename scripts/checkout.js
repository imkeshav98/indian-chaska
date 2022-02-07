
function check() {
    let textarea = document.querySelector('input').value;

    if (textarea.length == 0) {
        alert("Please Fill All Details");
    } else {
        alertmsg();
    }
}

function alertmsg() {
    document.querySelector(".order_accepted .tick").style.display = "block"
    setTimeout(alertmsg2, 3000)
    alert("Order Accepted")
}

function alertmsg2() {
    document.querySelector(".order_cooked .tick").style.display = "block"
    setTimeout(alertmsg3, 5000)
    alert("Order Is Being Cooked")
}

function alertmsg3() {
    document.querySelector(".order_ready .tick").style.display = "block"
    setTimeout(alertmsg4, 2000)
    alert("Order Ready")
}

function alertmsg4() {
    document.querySelector(".order_out_delivery .tick").style.display = "block"
    setTimeout(alertmsg5, 2000)
    alert("Order Out For Delivery")
}

function alertmsg5() {
    document.querySelector(".order_delivered .tick").style.display = "block"
    alert("Order Delivered")
}
var logo = document.querySelector("#navbar").addEventListener("click", () => {
    window.location = "index.html"
})