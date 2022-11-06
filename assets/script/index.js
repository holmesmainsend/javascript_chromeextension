const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = ["www1", "ww2", "ww3"]

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})

for(let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}