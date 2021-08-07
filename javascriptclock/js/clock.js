function showUsername()
{
    let userName = prompt("What is your username?");
    document.getElementById("myName").innerText = userName;
}

function showDateTime()
{
    let dateTime = new Date();
    let day = dateTime.getDay();
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();

    switch(day)
    {
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Salı"
            break;
        case 3:
            day = "Çarşamba"
            break;
        case 4:
            day = "Perşembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
        case 7:
            day = "Pazar"
            break;
    
        default:
            alert("Bir hata olustu!");
            break;
    }
    
    function addZero(num)
    {
        if ( num < 10 )
        {
            num = "0" + num ;
        }
        return num;
    }

    function isWeekend(day)
    {
        // Eğer hafta sonu ise yazı rengini mavi yapıyor.
        if ( day == "Cumartesi" || day == "Pazar")
        {
            let weekend = document.querySelector(".clock")
            weekend.classList.add("weekend")
        }
    }

    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    isWeekend(day);

    let currentTime = `${hour} : ${minute} : ${second} - ${day}`
    document.querySelector("#myClock").innerText = currentTime;
    document.querySelector("#myClock").innerHTML = currentTime;
    
    setTimeout(showDateTime, 1000)
    
}

showUsername();
showDateTime();

