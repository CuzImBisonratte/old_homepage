// menu opening and closing
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Set default for changed ( if dark/light comparison has changed ) to false
changed = false;

// Change dark/light comparison
function darkLightChange() {
    switch (changed) {
        case false:
            document.getElementById("clouds_light").src = "clouds_dark.png";
            document.getElementById("clouds_dark").src = "clouds_light.png";
            changed = true;
            break;
        case true:
            document.getElementById("clouds_light").src = "clouds_light.png";
            document.getElementById("clouds_dark").src = "clouds_dark.png";
            changed = false;
            break;
    }
}