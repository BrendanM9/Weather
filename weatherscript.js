function load(){
    const favicon = document.getElementById("favicon")
    console.log("URL:" + window.location.href)
    var url = String(window.location.href);
    //url = url.split("https://brendanm9.github.io/Weather/index.html?city=","")
    var cityNo = url.substr(55)
    console.log(cityNo)
    console.log(url)
    var abspressEl = document.getElementById("abspress");
    const inHGav = 29.97;
    var cityName = ""
    var bendID;
    var ICAO;
    if(cityNo==="bend"){
        bendID = "KORBEND727"; 
        ICAO = "KBDN";
        cityName = "Bend"
        console.log(cityName)
    } else if (cityNo==="sisters"){
        bendID = "KORSISTE72"; 
        ICAO = "KBDN";
        cityName = "Sisters"
        console.log(cityName)
    } else if (cityNo==="redmond"){
        bendID = "KORREDMO8"; 
        ICAO = "KRDM";
        cityName = "Redmond"
        console.log(cityName)
    } else if (cityNo==="sunriver"){
        bendID = "KS21"; 
        ICAO = "KS21";
        cityName = "Sunriver"
        console.log(cityName)
    } else if (cityNo==="lapine"){
        bendID = "KORLAPIN72"; 
        ICAO = "KS21";
        cityName = "La Pine"
        console.log(cityName)
    } else if (cityNo==="portland"){
        bendID = "KORPORTL2053"; 
        ICAO = "KPDX";
        cityName = "Portland"
        console.log(cityName)
    } else if (cityNo==="eugene"){
        bendID = "KOREUGEN267"; 
        ICAO = "KEUG";
        cityName = "Eugene"
        console.log(cityName)
    } else if (cityNo==="salem"){
        bendID = "KORSALEM449"; 
        ICAO = "KSLE";
        cityName = "Salem"
        console.log(cityName)
    } else if (cityNo==="prineville"){
        bendID = "KS39"; 
        ICAO = "KS39";
        cityName = "Prineville"
        console.log(cityName)
    } else if (cityNo==="madras"){
        bendID = "KS33"; 
        ICAO = "KS33";
        cityName = "Madras"
        console.log(cityName)
    }
    const apiKey = "be3a60645b954897ba60645b95f89776";
    document.getElementById("title1").innerHTML = "Live local forecast for "+cityName;
    var hi1El = document.getElementById("hi1");
    var lo1El = document.getElementById("lo1");
    var today = document.getElementById("condition");
    var future = document.getElementById("condition1");
    var tomorrow = document.getElementById("condition2");
    var day2 = document.getElementById("condition3");
    var day3 = document.getElementById("condition4");
    var day4 = document.getElementById("condition5");
    var iconEl = document.getElementById("icon");
    var icon1El =document.getElementById("icon1");
    var icon2El = document.getElementById("icon2a");
    var icon3El = document.getElementById("icon3");
    var icon4El = document.getElementById("icon4");
    var icon5El = document.getElementById("icon5");
    var condition = 44;
    var season = "string";
    var rainToday = 0;
    var precipType = [];
    var date = new Date();
    month = date.getMonth() + 1;
    day = date.getDate();
    console.log(month, day);
    if(month === 9 && day >= 23 || month === 12 && day < 21 || month > 9 && month < 12){
        season = "Autumn"
    } else if(month === 6 && day >= 20 || month === 9 && day < 23 || month > 6 && month < 9){
        season = "Summer";
    } else if(month === 3 && day >= 19 || month === 6 && day < 20 || month > 3 && month < 6){
        season = "Spring";
    } else if(month === 12 && day >= 21 || month === 3 && day < 19 || month > 0 && month < 3){
        season = "Winter";
    }
    if(season === "Autumn"){
        document.body.style.backgroundColor = "orange";
    } else if(season==="Summer"){
        document.body.style.backgroundImage = "url('backgrounds/sunny.png')"
    } else if(season==="Winter"){
        document.body.style.backgroundImage = "url('backgrounds/Winter.png')"
    } else if(season === "Spring"){
        document.body.style.backgroundColor= "green";
    }
}
forecast = function( f ){
    console.log(f);
    document.getElementById("hi1").innerHTML = "High: "+f.calendarDayTemperatureMax[0]+"º";
    document.getElementById("hi3").innerHTML = "High: "+f.temperatureMax[1]+"º";
    document.getElementById("hi5").innerHTML = "High: "+f.temperatureMax[2]+"º";
    document.getElementById("hi7").innerHTML = "High: "+f.temperatureMax[3]+"º";
    document.getElementById("hi9").innerHTML = "High: "+f.temperatureMax[4]+"º";
    document.getElementById("hi11").innerHTML = "High: "+f.temperatureMax[5]+"º";
    document.getElementById("lo1").innerHTML = "Low: "+f.temperatureMin[0]+"º";
    document.getElementById("lo3").innerHTML = "Low: "+f.temperatureMin[1]+"º";
    document.getElementById("lo5").innerHTML = "Low: "+f.temperatureMin[2]+"º";
    document.getElementById("lo7").innerHTML = "Low: "+f.temperatureMin[3]+"º";
    document.getElementById("lo9").innerHTML = "Low: "+f.temperatureMin[4]+"º";
    document.getElementById("lo11").innerHTML = "Low: "+f.temperatureMin[5]+"º";
    document.getElementById("condition1").innerHTML = f.narrative[0];
    document.getElementById("condition3").innerHTML = f.narrative[1];
    document.getElementById("condition5").innerHTML = f.narrative[2];
    document.getElementById("condition7").innerHTML = f.narrative[3];
    document.getElementById("condition9").innerHTML = f.narrative[4];
    document.getElementById("condition11").innerHTML = f.narrative[5];
    document.getElementById("text1").innerHTML = f.dayOfWeek[0];
    document.getElementById("text3").innerHTML = f.dayOfWeek[1];
    document.getElementById("text5").innerHTML = f.dayOfWeek[2];
    document.getElementById("text7").innerHTML = f.dayOfWeek[3];
    document.getElementById("text9").innerHTML = f.dayOfWeek[4];
    document.getElementById("text11").innerHTML = f.dayOfWeek[5];
    if(f.daypart[0].iconCode[0] === null){
        document.getElementById("icon1").innerHTML = "<img src='icons/30.png' class='icon'>";
    } else {
    document.getElementById("icon1").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[0]+".png' class='icon'>";
    }
    document.getElementById("icon2a").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[1]+".png' class='icon'>";
    document.getElementById("icon3").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[2]+".png' class='icon'>";
    document.getElementById("icon4").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[3]+".png' class='icon'>";
    document.getElementById("icon5").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[4]+".png' class='icon'>";
    document.getElementById("icon6").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[5]+".png' class='icon'>";
    document.getElementById("icon7").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[6]+".png' class='icon'>";
    document.getElementById("icon8").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[7]+".png' class='icon'>";
    document.getElementById("icon9").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[8]+".png' class='icon'>";
    document.getElementById("icon10").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[9]+".png' class='icon'>";
    document.getElementById("icon11").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[10]+".png' class='icon'>";
    document.getElementById("icon12").innerHTML = "<img src='icons/"+f.daypart[0].iconCode[11]+".png' class='icon'>";
    for(var p = 1; p < 12; p++){
        if(f.daypart[0].precipType[p] === "snow"){
precipType[p] = "Snow: "; 
        } else if(f.daypart[0].precipType[p] === "rain"){
precipType[p] = "Rain: "; 
        } else {
precipType[p] = "Precipitation: ";
        }
    }
    if(f.daypart[0].precipChance[0] !== null){
        document.getElementById("p0").innerHTML = "Precipitation: "+ f.daypart[0].precipChance[0]+"%";
    } else {
        document.getElementById("p0").innerHTML = "Precipitation: "+ f.daypart[0].precipChance[1]+"%";
    }
    document.getElementById("p1").innerHTML = precipType[1]+ f.daypart[0].precipChance[1]+"%";
    document.getElementById("p2").innerHTML = precipType[2]+ f.daypart[0].precipChance[2]+"%";
    document.getElementById("p3").innerHTML = precipType[3]+ f.daypart[0].precipChance[3]+"%";
    document.getElementById("p4").innerHTML = precipType[4]+ f.daypart[0].precipChance[4]+"%";
    document.getElementById("p5").innerHTML = precipType[5]+ f.daypart[0].precipChance[5]+"%";
    document.getElementById("p6").innerHTML = precipType[6]+ f.daypart[0].precipChance[6]+"%";
    document.getElementById("p7").innerHTML = precipType[7]+ f.daypart[0].precipChance[7]+"%";
    document.getElementById("p8").innerHTML = precipType[8]+ f.daypart[0].precipChance[8]+"%";
    document.getElementById("p9").innerHTML = precipType[9]+ f.daypart[0].precipChance[9]+"%";
    document.getElementById("p10").innerHTML = precipType[10]+ f.daypart[0].precipChance[11]+"%";
    document.getElementById("p11").innerHTML = precipType[11]+ f.daypart[0].precipChance[11]+"%";
    if(f.daypart[0].qpf[0] !== null){
        if(parseFloat(f.daypart[0].qpf[0]) > parseFloat(f.daypart[0].qpfSnow[0])){
document.getElementById("qpf0").innerHTML = " | "+ f.daypart[0].qpf[0]+"in";
        } else {
document.getElementById("qpf0").innerHTML = " | "+ f.daypart[0].qpfSnow[0]+"in";
        }
    } else {
document.getElementById("qpf0").innerHTML = " | "+ rainToday+"in";
        }
    for(var q = 1; q < 12; q++){
        if(parseFloat(f.daypart[0].qpf[q]) > parseFloat(f.daypart[0].qpfSnow[q])){
document.getElementById("qpf"+q).innerHTML = " | "+ f.daypart[0].qpf[q]+"in";
        } else {
document.getElementById("qpf"+q).innerHTML = " | "+ f.daypart[0].qpfSnow[q]+"in";
        }
    }
        /*
    if(f.daypart[0].wxPhraseShort[1]==="P Cloudy" || f.daypart[0].wxPhraseShort[1]==="M Sunny" || f.daypart[0].wxPhraseShort[1]==="M Clear" || f.daypart[0].wxPhraseShort[1]==="M Cloudy"){
        document.getElementById("b2").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else if (f.daypart[0].wxPhraseShort[1]==="Sunny"|| f.daypart[0].wxPhraseShort[1]==="Clear"){
        document.getElementById("b2").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (f.daypart[0].wxPhraseShort[1]==="Cloudy"){
        document.getElementById("b2").style.backgroundImage = "url('backgrounds/cloudy.png')";
    } else if (f.daypart[0].wxPhraseShort[1]==="Shwrs Early" || f.daypart[0].wxPhraseShort[1]=== "PM Showers" || f.daypart[0].wxPhraseShort[1]==="AM Showers" || f.daypart[0].wxPhraseShort[1]==="Showers"){
        document.getElementById("b2").style.backgroundImage = "url('backgrounds/rain.png')";
    }
    if(f.daypart[0].wxPhraseShort[2]==="P Cloudy" || f.daypart[0].wxPhraseShort[2]==="M Sunny" || f.daypart[0].wxPhraseShort[2]==="M Clear" || f.daypart[0].wxPhraseShort[2]==="M Cloudy"){
        document.getElementById("b3").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else if (f.daypart[0].wxPhraseShort[2]==="Sunny"|| f.daypart[0].wxPhraseShort[2]==="Clear"){
        document.getElementById("b3").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (f.daypart[0].wxPhraseShort[2]==="Cloudy"){
        document.getElementById("b3").style.backgroundImage = "url('backgrounds/cloudy.png')";
    }
    if(f.daypart[0].wxPhraseShort[4]==="P Cloudy" || f.daypart[0].wxPhraseShort[4]==="M Sunny" || f.daypart[0].wxPhraseShort[4]==="M Clear" || f.daypart[0].wxPhraseShort[4]==="M Cloudy"){
        document.getElementById("b4").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else if (f.daypart[0].wxPhraseShort[4]==="Sunny"|| f.daypart[0].wxPhraseShort[4]==="Clear"){
        document.getElementById("b4").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (f.daypart[0].wxPhraseShort[4]==="Cloudy"){
        document.getElementById("b4").style.backgroundImage = "url('backgrounds/cloudy.png')";
    }
    if(f.daypart[0].wxPhraseShort[6]==="P Cloudy" || f.daypart[0].wxPhraseShort[6]==="M Sunny" || f.daypart[0].wxPhraseShort[6]==="M Clear" || f.daypart[0].wxPhraseShort[6]==="M Cloudy"){
        document.getElementById("b5").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else if (f.daypart[0].wxPhraseShort[6]==="Sunny"|| f.daypart[0].wxPhraseShort[6]==="Clear"){
        document.getElementById("b5").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (f.daypart[0].wxPhraseShort[6]==="Cloudy"){
        document.getElementById("b5").style.backgroundImage = "url('backgrounds/cloudy.png')";
    }
    
    if(f.daypart[0].wxPhraseShort[8]==="P Cloudy" || f.daypart[0].wxPhraseShort[8]==="M Sunny" || f.daypart[0].wxPhraseShort[8]==="M Clear" || f.daypart[0].wxPhraseShort[8]==="M Cloudy"){
        document.getElementById("b6").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else if (f.daypart[0].wxPhraseShort[8]==="Sunny"|| f.daypart[0].wxPhraseShort[8]==="Clear"){
        document.getElementById("b6").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (f.daypart[0].wxPhraseShort[8]==="Cloudy"){
        document.getElementById("b6").style.backgroundImage = "url('backgrounds/cloudy.png')";
    }
    if(f.daypart[0].wxPhraseShort[10]==="P Cloudy" || f.daypart[0].wxPhraseShort[10]==="M Sunny" || f.daypart[0].wxPhraseShort[10]==="M Clear" || f.daypart[0].wxPhraseShort[10]==="M Cloudy"){
        document.getElementById("b7").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else if (f.daypart[0].wxPhraseShort[10]==="Sunny"|| f.daypart[0].wxPhraseShort[10]==="Clear"){
        document.getElementById("b7").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (f.daypart[0].wxPhraseShort[10]==="Cloudy"){
        document.getElementById("b7").style.backgroundImage = "url('backgrounds/cloudy.png')";
    }
    */
   console.log(season)
    /*
    if (parseFloat(f.qpf[0])>= parseFloat(f.qpfSnow[0])){
        document.getElementById("qpf1").innerHTML = "Rain Amount: "+ f.qpf[0]+"in";
    } else {
        document.getElementById("qpf1").innerHTML = "Snow Amount: "+ f.qpfSnow[0]+"in";
    }
    if (parseFloat(f.qpf[1])>= parseFloat(f.qpfSnow[1])){
        document.getElementById("qpf3").innerHTML = "Rain Amount: "+ f.qpf[1]+"in";
    } else {
        document.getElementById("qpf3").innerHTML = "Snow Amount: "+ f.qpfSnow[1]+"in";
    }
    */
    /*
    if (parseFloat(f.daypart[0].precipType[1]) = "snow"){
        document.getElementById("qpf3").innerHTML = "Snow Amount: "+ f.qpfSnow[1]+"in";
    } else {
        document.getElementById("qpf3").innerHTML = "Rain Amount: "+ f.qpf[1]+"in";
    }
    */
    /*
    if (parseFloat(f.qpf[2])>= parseFloat(f.qpfSnow[2])){
        document.getElementById("qpf5").innerHTML = "Rain Amount: "+ f.qpf[2]+"in";
    } else {
        document.getElementById("qpf5").innerHTML = "Snow Amount: "+ f.qpfSnow[2]+"in";
    }if (parseFloat(f.qpf[3])>= parseFloat(f.qpfSnow[3])){
        document.getElementById("qpf7").innerHTML = "Rain Amount: "+ f.qpf[3]+"in";
    } else {
        document.getElementById("qpf7").innerHTML = "Snow Amount: "+ f.qpfSnow[3]+"in";
    }
    if (parseFloat(f.qpf[4])>= parseFloat(f.qpfSnow[4])){
        document.getElementById("qpf9").innerHTML = "Rain Amount: "+ f.qpf[4]+"in";
    } else {
        document.getElementById("qpf9").innerHTML = "Snow Amount: "+ f.qpfSnow[4]+"in";
    }
    if (parseFloat(f.qpf[5])>= parseFloat(f.qpfSnow[5])){
        document.getElementById("qpf11").innerHTML = "Rain Amount: "+ f.qpf[5]+"in";
    } else {
        document.getElementById("qpf11").innerHTML = "Snow Amount: "+ f.qpfSnow[5]+"in";
    }
    */
    var cloudCoverAvg1;
    var cloudCoverAvg2;
    var cloudCoverAvg3;
    var cloudCoverAvg4;
    var cloudCoverAvg5;
    var cloudCoverAvg6;
    if(f.daypart[0].cloudCover[0] === null){
        cloudCoverAvg1 = parseFloat(f.daypart[0].cloudCover[1])/2;
    } else {
        cloudCoverAvg1 = parseFloat(f.daypart[0].cloudCover[0])+parseFloat(f.daypart[0].cloudCover[1])
        cloudCoverAvg1 = cloudCoverAvg1/2;
    }
    if(cloudCoverAvg1 > 0 && cloudCoverAvg1 <= 33){
        document.getElementById("b2").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (cloudCoverAvg1 > 33 && cloudCoverAvg1 <= 66){
        document.getElementById("b2").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else{
        document.getElementById("b2").style.backgroundImage =  "url('backgrounds/cloudy.png')";
    } 
    cloudCoverAvg2 = parseFloat(f.daypart[0].cloudCover[2])+parseFloat(f.daypart[0].cloudCover[3])
    cloudCoverAvg2 = cloudCoverAvg2/2;
    if(cloudCoverAvg2 > 0 && cloudCoverAvg2 <= 33){
        document.getElementById("b3").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (cloudCoverAvg2 > 33 && cloudCoverAvg2 <= 66){
        document.getElementById("b3").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else{
        document.getElementById("b3").style.backgroundImage =  "url('backgrounds/cloudy.png')";
    }
    cloudCoverAvg3 = parseFloat(f.daypart[0].cloudCover[4])+parseFloat(f.daypart[0].cloudCover[5])
    cloudCoverAvg3 = cloudCoverAvg3/2;
    if(cloudCoverAvg3 > 0 && cloudCoverAvg3 <= 33){
        document.getElementById("b4").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (cloudCoverAvg3 > 33 && cloudCoverAvg3 <= 66){
        document.getElementById("b4").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else{
        document.getElementById("b4").style.backgroundImage =  "url('backgrounds/cloudy.png')";
    }
    cloudCoverAvg4 = parseFloat(f.daypart[0].cloudCover[6])+parseFloat(f.daypart[0].cloudCover[7])
    cloudCoverAvg4 = cloudCoverAvg4/2;
    if(cloudCoverAvg4 > 0 && cloudCoverAvg4 <= 33){
        document.getElementById("b5").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (cloudCoverAvg4 > 33 && cloudCoverAvg4 <= 66){
        document.getElementById("b5").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else{
        document.getElementById("b5").style.backgroundImage =  "url('backgrounds/cloudy.png')";
    }
    cloudCoverAvg5 = parseFloat(f.daypart[0].cloudCover[8])+parseFloat(f.daypart[0].cloudCover[9])
    cloudCoverAvg5 = cloudCoverAvg5/2;
    if(cloudCoverAvg5 > 0 && cloudCoverAvg5 <= 33){
        document.getElementById("b6").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (cloudCoverAvg5 > 33 && cloudCoverAvg5 <= 66){
        document.getElementById("b6").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else{
        document.getElementById("b6").style.backgroundImage =  "url('backgrounds/cloudy.png')";
    }
    cloudCoverAvg6 = parseFloat(f.daypart[0].cloudCover[10])+parseFloat(f.daypart[0].cloudCover[11])
    cloudCoverAvg6 = cloudCoverAvg6/2;
    if(cloudCoverAvg6 > 0 && cloudCoverAvg6 <= 33){
        document.getElementById("b7").style.backgroundImage = "url('backgrounds/sunny.png')";
    } else if (cloudCoverAvg6 > 33 && cloudCoverAvg6 <= 66){
        document.getElementById("b7").style.backgroundImage = "url('backgrounds/partly_cloudy.png')";
    } else{
        document.getElementById("b7").style.backgroundImage =  "url('backgrounds/cloudy.png')";
    }
    //console.log(cloudCoverAvg2);
    for(var a = 0; a < 6; a++){
/*var av = a + a + 1;
var av1 = a + a + 1;
av1 -= 1;
console.log(f.daypart[0].cloudCover[av])
if(a = 0){
    cloudCoverAvg = parseFloat(f.daypart[0].cloudcover[av])
} else{
cloudCoverAvg = parseFloat(f.daypart[0].cloudCover[av]);
cloudCoverAvg += parseFloat(f.daypart[0].cloudCover[av1]);
console.log(cloudCoverAvg)
cloudCoverAvg = parseFloat(cloudCoverAvg)/2;
console.log(cloudCoverAvg)
}*/
        var a1e = a+2
        if(parseFloat(f.qpf[a]) > 0 || parseFloat(f.qpfSnow[a] > 0)){

document.getElementById("b"+a1e).style.backgroundImage = "url('backgrounds/rain.png')";
//var a2e = ale*2-1
//document.getElementById("lo"+a2e).style.color = "blue";
//console.log("Yes", a)
        }
        /*
        else if(parseFloat(cloudCoverAvg > 20)){

document.getElementById("b"+a1e).style.backgroundImage = "url('backgrounds/sunny.png')";
        }
        */
    }
    //Weekly averages
    if(f.temperatureMax[0] === null){
        var avhi1 = 0;
        for(var b = 1; b < 5; b++){
avhi1 = avhi1 + parseFloat(f.temperatureMax[b]);
        }
        avhi1 = avhi1/5
        //console.log(avhi1)
        document.getElementById("avhi").innerHTML = "Average High: "+ parseInt(avhi1) +"º"
    }else{
        var avhi1 = 0;
        for(var b = 0; b < 6; b++){
avhi1 = avhi1 + parseFloat(f.temperatureMax[b]);
        }
        avhi1 = avhi1/6
        //console.log(avhi1)
        document.getElementById("avhi").innerHTML = "Average High: "+ parseInt(avhi1) +"º"
    }   
    var avlo1 = 0;
    for(var c = 0; c < 6; c++){
        avlo1 = avlo1 + parseFloat(f.temperatureMin[c]);
    }
    avlo1 = avlo1/6
    console.log(avlo1)
    document.getElementById("avlo").innerHTML = "Average Low: "+ parseInt(avlo1) +"º"
    //Precipitation
    if(f.daypart[0].precipChance[0] === null){
        var avprecip1 = 0;
        for(var d = 1; d < 12; d++){
avprecip1 = avprecip1 + parseFloat(f.daypart[0].precipChance[d]);
        }
        avprecip1 = avprecip1/11
        console.log(avprecip1)
        document.getElementById("avp").innerHTML = "Average Precipitation Chance: "+ parseInt(avprecip1) +"%"
    } else{
        var avprecip2 = 0;
        for(var e = 0; e < 12; e++){
avprecip2 = avprecip2 + parseFloat(f.daypart[0].precipChance[e]);
        }
        avprecip2 = avprecip2/12
        console.log(avprecip2)
        document.getElementById("avp").innerHTML = "Average Precipitation Chance: "+ parseInt(avprecip2) +"%"
    }
    //inches of precipitation
    totalRain = 0
    for(var g = 0; g < 6; g++){
        totalRain = totalRain + f.qpf[g]
        totalRain = totalRain + f.qpfSnow[g]
    }
    totalRain = totalRain*100;
    totalRain = parseInt(totalRain);
    totalRain = totalRain/100;
    document.getElementById("avqpf").innerHTML = "Total Amount of Precipitation: "+ parseFloat(totalRain) +"in"
    //Cloud Cover
    if(f.daypart[0].cloudCover[0] === null){
        var avcloud1 = 0;
        for(var h = 1; h < 12; h++){
avcloud1 = avcloud1 + parseFloat(f.daypart[0].cloudCover[h]);
        }
        avcloud1 = avcloud1/11
        //console.log(avprecip1)
        document.getElementById("avcloud").innerHTML = "Average Cloud Cover: "+ parseInt(avcloud1) +"%"
    } else{
        var avcloud1 = 0;
        for(var i = 0; i < 12; i++){
avcloud1 = avcloud1 + parseFloat(f.daypart[0].cloudCover[i]);
        }
        avcloud1 = avcloud1/12
        //console.log(avprecip1)
        document.getElementById("avcloud").innerHTML = "Average Cloud Cover: "+ parseInt(avcloud1) +"%"
    }
    //Wind Speed
    if(f.daypart[0].windSpeed[0] === null){
        var avwind1 = 0;
        for(var j = 1; j < 12; j++){
avwind1 = avwind1 + parseFloat(f.daypart[0].windSpeed[j]);
        }
        avwind1 = avwind1/11
        //console.log(avprecip1)
        document.getElementById("avwind").innerHTML = "Average Wind Speed: "+ parseInt(avwind1) +" MPH"
    } else{
        var avwind1 = 0;
        for(var k = 0; k < 12; k++){
avwind1 = avwind1 + parseFloat(f.daypart[0].windSpeed[k]);
        }
        avwind1 = avwind1/12
        //console.log(avprecip1)
        document.getElementById("avwind").innerHTML = "Average Wind Speed: "+ parseInt(avwind1) +" MPH"
    }
}
        
var currentpressure;
var hindex;
var wchill;
var temp1;
var realFeel;
var light;
var rain;
var time;
var amtemp;
function drawWeather (d){
    console.log("Weather data \n", d);
    hindex = d.observations[0].imperial.heatIndex;
    chill = d.observations[0].imperial.windChill; 
    temp1 = d.observations[0].imperial.temp;
    light = d.observations[0].solarRadiation;
    rain = d.observations[0].imperial.precipRate;
    dewpoint = d.observations[0].imperial.dewpt;
    time = d.observations[0].obsTimeLocal;
    amtemp = d.observations[0].imperial.temp;
    wind = d.observations[0].imperial.windSpeed;
    document.getElementById("condition").innerHTML = d.observations[0]
    document.getElementById("temp").innerHTML = "Temperature: "+ temp1+"ºF";
    document.getElementById("humidity").innerHTML = "Humidity: "+ d.observations[0].humidity +"%";
    document.getElementById("winddir").innerHTML = "Wind Direction: "+d.observations[0].winddir+"º";
    document.getElementById("windspeed").innerHTML = "Wind Speed: "+d.observations[0].imperial.windSpeed+" MPH";
    document.getElementById("windgusts").innerHTML = "Wind Gust: "+d.observations[0].imperial.windGust+" MPH";
    document.getElementById("precip").innerHTML = "Precipitation: "+d.observations[0].imperial.precipTotal+" in";
    rainToday = d.observations[0].imperial.precipTotal;
    if(parseFloat(d.observations[0].imperial.pressure)===29.8){
        document.getElementById("pressure").innerHTML = "Pressure: 29.80inHG"
    } else {
        document.getElementById("pressure").innerHTML = "Pressure: "+d.observations[0].imperial.pressure+"inHG";
    }
    document.getElementById("uv").innerHTML = "UV Index: "+d.observations[0].uv;
    document.getElementById("feellike").innerHTML = "Feels Like: "+d.observations[0].imperial.heatIndex+"º";
    currentConditions(light, rain, time, amtemp, wind, dewpoint);
    currentpressure = d.observations[0].imperial.pressure;
    abspressEl.innerHTML = currentpressure;
    //forecast(currentpressure);
    //feelslike(hindex, wchill);
}
function weatherBalloon(cityID, code){
    var key=apiKey;
    fetch('https://api.weather.com/v2/pws/observations/current?stationId='+cityID+'&format=json&units=e&apiKey='+key)
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function(){

    });  
    fetch('https://api.weather.com/v3/wx/forecast/daily/5day?icaoCode='+code+'&units=e&language=en-US&format=json&apiKey='+key)
    .then(function(resp) {return resp.json()})
    .then (function(data) {
        forecast(data);
    })
    .catch(function(){

    });
}
window.onload = function(){
    load();
    weatherBalloon(bendID, ICAO);
    //forecast(currentpressure);
}
var currentConditions = function(l, r, t, a, w, d){
    var l1 = parseInt(l);
    var r1 = parseFloat(r);
    var t1 = parseInt(t);
    var a1 = parseInt(a);
    var w1 = parseInt(w);
    var d1 = parseInt(d);
    var currentDate = new Date();
    var time = currentDate.getHours();
    console.log("Time: \n", time);
    console.log(r1);
    if(r1 === .01 && a1 > 35){
        iconEl.innerHTML = "<img src='icons/9.png' class='icon'>";
        today.innerHTML = "<p>Drizzle</p>";
        condition = 9;
        favicon.setAttribute("href", "icons/9.png");
    }else if(r1 > .01 && a1 > 35){
        iconEl.innerHTML = "<img src='icons/12.png' class='icon'>";
        today.innerHTML = "<p>Rain Showers</p>"
        condition = 12;
        favicon.setAttribute("href", "icons/12.png");
    }else if(r1 > 0 && a1 <= 35 && a1 >= 32){
        iconEl.innerHTML = "<img src='icons/7.png' class='icon'>";
        today.innerHTML = "<p>Wintery Mix</p>";
        condition = 7;
        favicon.setAttribute("href", "icons/7.png");
    }else if(r1 === .01 && a1 < 32){
        iconEl.innerHTML = "<img src='icons/13.png' class='icon'>";
        today.innerHTML = "<p>Flurries</p>";
        favicon.setAttribute("href", "icons/13.png");
        condition = 13;
    }else if(r1 > .01 && a1 < 32){
        iconEl.innerHTML = "<img src='icons/14.png' class='icon'>";
        today.innerHTML = "<p>Snow Showers</p>";
        condition = 14;
        favicon.setAttribute("href", "icons/14.png");
    }else if(l1 >= 0 && l1 <= 200 && r1 < 0.01){
        if(t <= d1 + 1){
iconEl.innerHTML = "<img src='icons/20.png' class='icon'>";
//favEl.innerHTML = '<link rel="icon" type="image/x-icon" href="icons/20.png">'; 
today.innerHTML = "<p>Fogy</p>";
document.getElementById("b1").style.backgroundImage= "url('backgrounds/cloudy.png')"
condition = 20;
favicon.setAttribute("href", "icons/20.png");
        } else if(time >= 7 && time < 19){
iconEl.innerHTML = "<img src='icons/26.png' class='icon'>";
//favEl.innerHTML = '<link rel="icon" type="image/x-icon" href="icons/26.png">'; 
today.innerHTML = "<p>Cloudy</p>";
document.getElementById("b1").style.backgroundImage= "url('backgrounds/cloudy.png')"
condition = 26;
favicon.setAttribute("href", "icons/26.png");
        } else if(time < 7 || time >= 19){
iconEl.innerHTML = "<img src='icons/27.png' class='icon'>";
//favEl.innerHTML = '<link rel="icon" type="image/x-icon" href="icons/27.png">';
today.innerHTML = "<p>Partly Cloudy</p>";
document.getElementById("b1").style.backgroundImage= "url('backgrounds/partly_cloudy.png')"
condition = 27;
favicon.setAttribute("href", "icons/27.png");
        }
    }else if(l1 > 200 && l1<= 400 && r1 < 0.01){
        if(time >= 7 && time < 19){
iconEl.innerHTML = "<img src='icons/28.png' class='icon'>";
condition = 28;
favicon.setAttribute("href", "icons/28.png");
        } else if(time < 7 || time >= 19){
iconEl.innerHTML = "<img src='icons/27.png' class='icon'>";
condition = 27;
favicon.setAttribute("href", "icons/27.png");
        }
        today.innerHTML = "<p>Partly Cloudy</p>";
        document.getElementById("b1").style.backgroundImage= "url('backgrounds/partly_cloudy.png')"
    }else if(l1 > 400){
        if(time >= 7 && time < 19){
iconEl.innerHTML = "<img src='icons/32.png' class='icon'>";
condition = 32;
favicon.setAttribute("href", "icons/32.png");
        } else if(time < 7 || time >= 19){
iconEl.innerHTML = "<img src='icons/31.png' class='icon'>";
condition = 31;
favicon.setAttribute("href", "icons/31.png");
        }
        today.innerHTML = "<p>Clear</p>";
        document.getElementById("b1").style.backgroundImage= "url('backgrounds/sunny.png')"
    }
}
        
/*if(rain>0){
let hrElement;
let counter = 100;
for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
    hrElement.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(hrElement);
}
}*/
