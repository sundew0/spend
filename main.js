
var day = 0;
function next_day_function() {
    day+=1;
    pastday = day-1
    console.log(day);

    try {
        document.getElementById("days-"+day).classList = "day-active";
    } catch (error) {
        console.log("Last day")
        document.getElementById("next-day").style.display = 'none';
    }
    
    try {
       document.getElementById("days-"+pastday).classList = "day-past";
    } catch (typeerror) {
        console.log("first day");
    }
    
    
}
while (true){
var sidebarbtn = document.getElementById('sidebarbtn');
var sidebar = document.getElementById('sidebar');
var option_area = document.getElementById('options');
    sidebar.onclick = function sidebarbtnclick(){sidebar.style.opacity = 1; 
     option_area.innerHTML = '<p>hello</p>');};



}

