const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []

function renderLeads() {
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a target='_blank' href='https://" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})