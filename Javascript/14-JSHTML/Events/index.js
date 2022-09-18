const hText = document.getElementById("h-text")
console.log(hText)

hText.addEventListener("changeText", event => {
    console.log(event.detail)
    hText.innerText = event.detail.text
    hText.style.color = event.detail.color

})


function changeText(newText, color){
    const event  = new CustomEvent("changeText", {
        detail: {
            text: newText,
            color
        }
    })
    hText.dispatchEvent(event)
}