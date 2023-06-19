let body = document.getElementById('body')
let container = document.querySelector(".container")
function displayTime()
{
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var sesion = document.getElementById('sesion') 

    if(hrs >= 12)
    {
        sesion.innerHTML = 'PM'
    }else
    {
        sesion.innerHTML = 'AM'
    }
    if(hrs > 12)
    {
        hrs -=13;
    }
    if(sec <=9)
    {
        sec = "0"+sec;
        }
        if(mins<=9)
        {
            mins="0"+mins;
        }
    if(hrs <= 9)
    {
        hrs = "0"+ hrs
    }
    document.getElementById('hours').innerHTML = hrs ; 
    document.getElementById('minutes').innerHTML = mins ; 
    document.getElementById('seconds').innerHTML = sec ;
    if(sesion = 'AM')
    {
        body.style.background='black'
        container.style.color = '#fff'
    }else {
        body.style.background='#09f6ff'
        container.style.color ='#000'
    }

}
setInterval(displayTime,10);