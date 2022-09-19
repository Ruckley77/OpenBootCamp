const parragraphs = document.querySelectorAll(".parragraph")
const sections = document.querySelectorAll(".section")
const trash = document.querySelector("#trashcan")

parragraphs.forEach(parragraph => {
    parragraph.addEventListener("dragstart", event => {
        console.log(`Im dragging the parragraph ${parragraph.innerText}`);
        parragraph.classList.add("dragging")
        event.dataTransfer.setData("id", parragraph.id)
        // const ghost_e = document.querySelector(".ghost-image")
        // event.dataTransfer.setDragImage(ghost_e, 0, 0)
    })
    parragraph.addEventListener("dragend", () => {
        // console.log(`I ended dragging`)
        parragraph.classList.remove("dragging")
    })
})

sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy for default
        // console.log("Drag over")
    })

    section.addEventListener("drop", event => {
        console.log("Drop")
        const id_p = event.dataTransfer.getData("id")
        console.log("id parragraph", id_p)
        const parragraph = document.getElementById(id_p)
        section.appendChild(parragraph)
    })
})

trash.addEventListener(("dragover"), event => {
    console.log("dragging over trash")
    event.preventDefault()
})

trash.addEventListener(("drop"), event => {
    const id_p = event.dataTransfer.getData("id")
    document.getElementById(id_p).remove()
})


//dataTransfer  dropeffect is the icon when dropping.
// set drag image.