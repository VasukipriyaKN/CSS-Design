function change(name) {

    var clsName = name.className;

    if (clsName === "day") {
        name.className="night"
        document.getElementsByTagName("body")[0].style.backgroundColor ="rgb(163, 211, 255)"
        document.getElementsByClassName("inputDivDay")[0].setAttribute("class", "inputDivNight")
    }
    else {
        name.className="day"
        document.getElementsByTagName("body")[0].style.backgroundColor ="rgb(255, 223, 163)"
        document.getElementsByClassName("inputDivNight")[0].setAttribute("class", "inputDivDay")
    }
}