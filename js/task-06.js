const validInputRef = document.querySelector("#validation-input");

validInputRef.addEventListener("blur", (event) => {
    if(event.currentTarget.value.length == validInputRef.dataset.length){
        validInputRef.classList.add("valid");
        validInputRef.classList.remove("invalid");
      } else {
        validInputRef.classList.add("invalid");
        validInputRef.classList.remove("valid");
}
})




