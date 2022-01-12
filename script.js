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

// Function to get the Age
function getAge() {

    // Get the current date
    var today = new Date();

    // Get the birth date (25.01.2008 08:18:00)
    var birthDate = new Date(2008, 0, 25, 8, 18, 0);

    // Calculate the difference between the two dates
    var diff = today.getTime() - birthDate.getTime();

    // Calculate the age
    var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    // Insert it into the page
    document.getElementById("age").innerHTML = age + " Jahre alt,";
}
getAge();