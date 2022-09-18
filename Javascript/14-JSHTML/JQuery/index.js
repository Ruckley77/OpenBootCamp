//$("selector").action()
// $("h1").hide()

// $(document).ready(() => {})

$(() => { //use this to start writting your code.

    $(".btn-hide").click (() => {
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".btn-show").click (() => {
        // $("h1").show()
        $("h1").fadeIn()
    })
    $("#el-1").dblclick(() => {
        $("#el-1").css({ color: "red"})
    })
    $(".new-element").click(() => {
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseenter((elem) => { //parameter is the thing you will then change with native Javacript like below, with javascript notation.
        elem.target.style.color = "blue"
    })

    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})

