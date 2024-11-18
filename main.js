const possibleIds = [
    "home",
    "bill-of-materials",
    "equipment",
    "calendar"
]
    



function extractContent(id) {
    if (possibleIds.includes(id)) {
        const iframe = document.getElementById(id);
        let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        let container = document.getElementById("container")
        container.innerHTML = iframeDoc.getElementById("to-be-cloned").innerHTML


        let elements = document.getElementsByClassName("selected-site")
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("selected-site")
        }

        document.getElementById(possibleIds.indexOf(id)).classList.add("selected-site")
        
    } else {alert("id inputted does not exsist")}

    


}
document.onload




