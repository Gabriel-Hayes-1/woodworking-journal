const possibleIds = [
    "home",
    "bill-of-materials",
    "equipment",
    "calendar"
];
const container = document.getElementById("container")

function extractContent(id) {
        let template = document.getElementById(id)
        if (template) {
            container.innerHTML = template.innerHTML
        } else {
            alert(`template for ${id} does not exsist`)
        }
        const elements = document.getElementsByClassName("selected-site");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("selected-site");
        }
        document.getElementById(possibleIds.indexOf(id)).classList.add("selected-site");
    
}





