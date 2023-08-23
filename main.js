
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
    
    newoption()
    
}
function sidebarbtnclick(){
    var sidebarbtn = document.getElementById('sidebarbtn');
    var sidebar = document.getElementById('sidebar');
    var option_area = document.getElementById('options');
    var nextdaybtn = document.getElementsByClassName('next-day-button');
    
    sidebar.style.opacity = 1;
    sidebarbtn.style.opacity = 0; 

    sidebarbtn.style.pointerEvents = 'none';
    sidebar.style.pointerEvents = 'auto';
    foodbar()
}

const options = {
payment:    [{title:"bill", optiontext:"text", buttonCount:2, button1:"button1",button2:"button 2"},
            {title:"title2", optiontext:"text2"}],

}
function foodbar()
{
    const foodbar = document.getElementById('food');
    foodbar.value = foodbar.value -= 25;
}
function newoption()
{
    
    
    const optionsList = options['payment'];
    const randomOption = Math.floor(Math.random() * optionsList.length);
    const optionTitle = document.getElementById('optionTitle')
    const optionText = document.getElementById('optionText')
    optionTitle.innerHTML = '<h1>' + optionsList[randomOption]['title'] + '</h1>';
    optionText.innerHTML = '<p>' + optionsList[randomOption]['optiontext'] + '</p>';
}
