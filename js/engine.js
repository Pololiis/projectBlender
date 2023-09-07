let blenderState = "off";
let blender = document.getElementById("blender");
let blenderButton = document.getElementById("blender-button");

blenderButton.addEventListener("click", function() {
    if (blenderState == "off") {
        blenderState = "on";
        blender.classList.add("active");
    } else {
        blenderState = "off";
        blender.classList.remove("active");
    }
})

