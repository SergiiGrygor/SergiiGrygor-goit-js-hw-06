/* <body>
<p><a href="index.html">Go back</a></p>

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

<script src="js/task-05.js" type="module"></script>
</body> */

const inputNameRef = document.querySelector("#name-input")
const outputNameRef = document.querySelector("#name-output")

inputNameRef.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    inputNameRef.addEventListener("change", (event) => {
        outputNameRef.disabled = !event.target.checked;
        outputNameRef.textContent = `${inputValue}`;
    });
  });



