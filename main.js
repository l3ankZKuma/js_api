let city;
function weather() {
fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=metric&appid=3ec5ca251555f4f0b30dec948f727165")
.then(response => {
    console.log(response);
    if (!response.ok) {
        alert("BUG");
    }
    return response.json();
})
.then(l => {
    console.log(l.list);
    let i = 0;
    const hourP = l.list.map(user => {
        if(i == 0) {
            i+=1;
            return '<img src="https://openweathermap.org/img/wn/'+ user.weather[0].icon + '@2x.png"/>&nbsp&nbsp'+city+'&nbsp&nbsp&nbspHumidity ' +user.main.humidity+'<br>'+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ user.main.temp + '<span>&#8451;</span>'  + '</div>'+'<br><br>'
        }
    }).join("")
    document.getElementById('numberOne').innerHTML=hourP;
    let qq = 1;
    let cnt=0
    const gg = l.list.map(user => {
        if(qq % 8 == 0 && cnt<4) {
            qq+=1;
            cnt+=1;
            return '<img src="https://openweathermap.org/img/wn/'+ user.weather[0].icon + '@2x.png"/>' +  user.dt_txt.substring(0,10)+" "+user.weather[0].description+'<br>'
        }
        else {
            qq+=1;
        }
    }).join("")
    document.getElementById("numberTwo").innerHTML=gg;
}); 
}
document.getElementById("submit").onclick = function() {
        city = document.getElementById("city").value;
        console.log(city);
        weather();      
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + city + "')";      
};