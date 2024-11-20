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

function DistanceFromTop(element) {
    let distance = 0;
    while (element) {
        distance += element.offsetTop;
        element = element.offsetParent;
    }
    return distance;
}



addEventListener("scroll", (event) => {});

onscroll = (event) => {
    let images = document.querySelectorAll("img")
    let imageArray = Array.from(images)
    
    imageArray.forEach((img) => {
            if (DistanceFromTop(img) > 600) { //if distance is greater than 600   
                   let pos = window.scrollY-DistanceFromTop(img)
                   if (pos < 0) {
                        img.style.left = `${pos}px`
                   }   
            }
      });
};





