
var day = 0;
function next_day_function() {
    day+=1;
    pastday = day-1
    console.log(day);

    try {
        document.getElementById("days-"+day).classList = "day-active";
        show_options()
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


function show_options() {
    var option_area = document.getElementById("options")
    var text = document.createElement('p')
    
    option_area.innerHTML = '<p>hello</p>';
    p.textContent = 'test'
    option_area.appendChild(p)
    option_area.innerHTML =  p;
}
