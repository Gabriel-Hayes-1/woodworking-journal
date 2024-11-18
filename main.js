function extractContent(id) {
    const iframe = document.getElementById(id);
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    let container = document.getElementById("container")
    container.innerHTML = iframeDoc.getElementById("to-be-cloned").innerHTML
}
function home() {
    document.getElementById("container").innerHTML = ""
}




