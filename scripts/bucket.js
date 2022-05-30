// On clicking remove button the item should be removed from DOM as well as localstorage.

document.getElementById("confirm_checkout").addEventListener("click", checkOutFn);

function checkOutFn(){
    window.location.href = "checkout.html";
}