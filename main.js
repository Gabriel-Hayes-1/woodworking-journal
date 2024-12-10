const possibleIds = [
    "home",
    "bill-of-materials",
    "equipment",
    "calendar"
];
const container = document.getElementById("container")
const debug = document.getElementById("debug")

function extractContent(id) {
        let template = document.getElementById(id)
        if (template) {
            container.innerHTML = template.innerHTML
        } else {
            alert(`template for ${id} does not exsist`)
        }
        const elements = document.getElementsByClassName("selected-site");
        for (let i = 0; i < elements.length; i++) { //remove all selected sites
            elements[i].classList.remove("selected-site");
        }
        document.getElementById(possibleIds.indexOf(id)).classList.add("selected-site"); //add selected site currently on
}

function DistanceFromTop(element) {
    return element.getBoundingClientRect().top + window.scrollY;
}



window.addEventListener("scroll", scroll)



function scroll() {
    const images = Array.from(document.querySelectorAll("img"));
    images.forEach((img) => {
        const startOffset = DistanceFromTop(img); 
        const scrollPosition = window.scrollY;
    if (startOffset > 600) {
        if (scrollPosition > startOffset-(800)) { //when the image starts coming in (px above image bottom)
            const pos = ((scrollPosition - (startOffset-(img.height/2))) * 1.8); 
            if (pos < 0) { //prevent images from going too far
                img.style.left = `${pos}px`; 
            } else {
                img.style.left = `0px`; 
            }
            
        }
    }
    });
}





