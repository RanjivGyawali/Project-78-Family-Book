var names = [
    "1. My Famliy",
    "2. My Father (Ram Krishna Gyawali)",
    "3. My Mother (Uma Devi)",
    "4. My Brother (Rajiv Gyawali)",
    "5. Me (Ranjiv Gyawali)"
];
var images = [
    "family.jpg",
    "Papa.jpg",
    "Mom.jpg",
    "Brother.jpg",
    "Me.jpg"
];
var i = 0;

function family() {
    i++;
    var number_of_people_in_array = 4;
    if (i > number_of_people_in_array) {
        i = 0;
    }
    var updatedimage = images[i];
    var updatedname = names[i];
    document.getElementById("family_img").src = updatedname;
    document.getElementById("family_img").src = updatedimage;
    document.getElementById("one").innerHTML = updatedname;
}