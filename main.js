const iframe = document.getElementById('bill-of-materials');
function billOfMats() {
    alert("hi")
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    document.getElementById("container").innertext = iframe.contentDocument.getElementById("to-be-cloned").innerHTML
}
function home() {
    alert("bye");
    document.getElementById("container").innerHTML = ""
}




