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

// Function to format the time
function formatTime(number) {

    // If the number is not 2 digits, add a 0 in front
    if (number.toString().length <= 1) {

        // Add a 0 in front
        number = "0" + number;
    }

    // return the formatted number
    return number;
}


// Birthday with the current year (25.01)
var year = new Date()
var birthDate = new Date(year.getFullYear(), 0, 25, 08, 18, 00);
var birth = new Date(2008, 0, 25, 08, 18, 00);

// Function to check for dates
function getDates() {

    // Get the current date
    var today = new Date();

    // Check if the birthday is within the next 24 hours to 2 hours
    if (birthDate.getTime() - today.getTime() < 86400000 && birthDate.getTime() - today.getTime() > 7200000) {

        // Get a countdown in the format hh:mm:ss
        var difference = new Date(birthDate.getTime() - today.getTime());

        // Get the hours, minutes and seconds from the countdown
        var hours = formatTime(difference.getUTCHours());
        var minutes = formatTime(difference.getUTCMinutes());
        var seconds = formatTime(difference.getUTCSeconds());

        // Create the countdown
        var countdown = "" + hours + ":" + minutes + ":" + seconds;

        // Insert it into the page
        document.getElementById("occassion").innerHTML = countdown;
        document.getElementById("occassion").style.display = "block";

        // Self rerun
        window.setTimeout("getDates();", 1000);

        // Insert the Age into the page
        document.getElementById("age").innerHTML = age + " Jahre alt,";

        // If not, check if the birthday is within the next 2 hours
    } else if (birthDate.getTime() - today.getTime() < 7200000 && birthDate.getTime()) {

        // Get a countdown in the format hh:mm:ss
        var difference = new Date(birthDate.getTime() - today.getTime());

        // Get the hours, minutes and seconds from the countdown
        var hours = formatTime(difference.getUTCHours());
        var minutes = formatTime(difference.getUTCMinutes());
        var seconds = formatTime(difference.getUTCSeconds());

        // Create the countdown
        var countdown = "" + hours + ":" + minutes + ":" + seconds;

        // Replace the full page with the countdown
        document.body.innerHTML = "<h1>" + countdown + "</h1>";

        document.body.classList.add('occassion');

        // Self rerun
        window.setTimeout("getDates();", 1000);
    }

    // This is what happens if no event is happening

    // Calculate the difference between the two dates
    var diff = today.getTime() - birth.getTime();

    // Calculate the age
    var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    // Insert the Age into the page 
    document.getElementById("age").innerHTML = age + " Jahre alt,";

}
getDates();

function checkMobile() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
// If checkmobile returns true OR the pagewith is lower than 900px wide
if (checkMobile() || window.innerWidth < 900) {

    // goto ./mobile/
    window.location.href = "./mobile/";
}