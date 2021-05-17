var clicked = false; 
function toggle(){
    if(!clicked){
        clicked=true;
        document.getElementById("switch").innerHTML="Switch to Sushi Lover's Lunch"; 
    }
    else {
        clicked=false;
        document.getElementById("switch").innerHTML="Switch to Happy Sushi Lunch";
    }
}