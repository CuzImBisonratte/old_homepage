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




// Birthday with the current year (25.01)
var year = new Date()
var birthDate = new Date(year.getFullYear(), 0, 25, 08, 18, 00);

// Function to check for dates
function getDates() {

    // Get the current date
    var today = new Date();


    // Check if the birthday is within the next 24 hours to 2 hours
    if (birthDate.getTime() - today.getTime() < 86400000 && birthDate.getTime() - today.getTime() > 7200000) {

        // Get a countdown in the format hh:mm:ss
        var difference = new Date(birthDate.getTime() - today.getTime());

        // Create the countdown
        var countdown = "" + difference.getUTCHours() + ":" + difference.getUTCMinutes() + ":" + difference.getUTCSeconds();

        // Insert it into the page
        document.getElementById("occassion").innerHTML = countdown;
        document.getElementById("occassion").style.display = "block";

        // Self rerun
        window.setTimeout("getDates();", 1000);

        // Insert the Age into the page
        document.getElementById("age").innerHTML = age + " Jahre alt,";

        // If not, check if the birthday is within the next 2 hours
    } else if (birthDate.getTime() - today.getTime() < 7200000 && birthDate.getTime() - today.getTime() > 0) {

        // Get a countdown in the format hh:mm:ss
        var difference = new Date(birthDate.getTime() - today.getTime());

        // Create the countdown
        var countdown = "" + difference.getUTCHours() + ":" + difference.getUTCMinutes() + ":" + difference.getUTCSeconds();

        // Replace the full page with the countdown
        document.body.innerHTML = "<h1>" + countdown + "</h1>";

        document.body.classList.add('occassion');

        // Add this script to the page
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'script.js';

        document.head.appendChild(script);
    } else {

        // This is what happens if no event is happening

        // Calculate the difference between the two dates
        var diff = today.getTime() - birthDate.getTime();

        // Calculate the age
        var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

        // Insert the Age into the page 
        document.getElementById("age").innerHTML = age + " Jahre alt,";
    }

}
getDates();