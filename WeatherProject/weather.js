var abspressEl = document.getElementById("abspress");
const inHGav = 29.97;
const bendID = "KORBEND727";
            const apiKey = "be3a60645b954897ba60645b95f89776";
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
            //var favEl = document.getElementById("favicon");
            var currentpressure;
            var hindex;
            var wchill;
            var temp1;
            var realFeel;
            var light;
            var rain;
            var time;
            var amtemp;
            var pressureRate;
            var billyJoel;
            var tempLo = 0;
            var tempHi = 0;
            var tempNo = 0;
            var pressureRateOfChange= 0 ;
            var pressureRateOfChange1= 0;
            var pressureRateOfChange2 = 0;
            function drawPressureHistory (f){
                console.log("Historical Weather \n", f);
                for (var i = 0; i <= parseInt(f.observations.length); i++){
                    pressureRateOfChange = parseInt(pressureRateOfChange+ (f.observations[i].imperial.pressureTrend*100));
                    //tempAv = parseInt(tempAv + (f.obserations[i].imperial.temp));
                    //console.log("A", f.observations[i].imperial.pressureTrend);
                    //console.log(pressureRateOfChange);
                    forecast(pressureRateOfChange);
                    forecast1(pressureRateOfChange);
                    forecast2(pressureRateOfChange);
                    forecast3(pressureRateOfChange);
                    forecast4(pressureRateOfChange);
                }
                    //tempAv = (tempAv / f.observations.length);
                
            }
            function drawTempHistory (g){
                console.log("Historical Weather1 \n", g);
                for (var k = 0; k <= parseInt(g.observations.length); k++){
                    tempHi = parseInt(tempHi+ (g.observations[0].imperial.tempHigh));
                    tempLo = parseInt(tempLo + (g.observations[k].imperial.tempLow));
                    tempNo += 1;
                    tempOutlook(tempHi, tempLo, tempNo);
                }
            }
            function drawWeather (d){
                console.log("Weather data \n", d);
                hindex = d.observations[0].imperial.heatIndex;
                chill = d.observations[0].imperial.windChill; 
                temp1 = d.observations[0].imperial.temp;
                light = d.observations[0].solarRadiation;
                rain = d.observations[0].imperial.precipRate*100;
                time = d.observations[0].obsTimeLocal;
                amtemp = d.observations[0].imperial.temp;
                document.getElementById("condition").innerHTML = d.observations[0]
                document.getElementById("temp").innerHTML = "Temperature: "+ temp1+"ºF";
                document.getElementById("humidity").innerHTML = "Humidity: "+ d.observations[0].humidity +"%";
                document.getElementById("winddir").innerHTML = "Wind Direction: "+d.observations[0].winddir+"º";
                document.getElementById("windspeed").innerHTML = "Wind Speed: "+d.observations[0].imperial.windSpeed+" MPH";
                document.getElementById("windgusts").innerHTML = "Wind Gust: "+d.observations[0].imperial.windGust+" MPH";
                document.getElementById("precip").innerHTML = "Precipitation: "+d.observations[0].imperial.precipTotal+" in";
                if(parseInt(d.observations[0].imperial.pressure)===29.8){
                    document.getElementById("pressure").innerHTML = "Pressure: 29.80inHG"
                } else {
                    document.getElementById("pressure").innerHTML = "Pressure: "+d.observations[0].imperial.pressure+"inHG";
                }
                document.getElementById("uv").innerHTML = "UV Index: "+d.observations[0].uv;
                document.getElementById("feellike").innerHTML = "Feels Like: "+d.observations[0].imperial.heatIndex+"º";
                currentConditions(light, rain, time, amtemp);
                currentpressure = d.observations[0].imperial.pressure;
                abspressEl.innerHTML = currentpressure;
                //forecast(currentpressure);
                //feelslike(hindex, wchill);
            }
            function weatherBalloon(cityID){
                var key=apiKey;
                fetch('https://api.weather.com/v2/pws/observations/current?stationId='+cityID+'&format=json&units=e&apiKey='+key)
                .then(function(resp) {return resp.json() })
                .then(function(data) {
                    drawWeather(data);
                })
                .catch(function(){

                });  
                fetch('https://api.weather.com/v2/pws/observations/all/1day?stationId='+cityID+'&format=json&units=e&apiKey='+key)
                .then(function(resp) {return resp.json()})
                .then(function(data) {
                    drawPressureHistory(data);
                    //drawPressureHistory1(data);
                })
                .catch(function(){

                });
                fetch('https://api.weather.com/v2/pws/observations/all/1day?stationId='+cityID+'&format=json&units=e&apiKey='+key)
                .then(function(resp) {return resp.json()})
                .then(function(data) {
                    drawTempHistory(data);
                })
                .catch(function(){

                }); 
            }
            var tempOutlook=function(ha, la, na){
                var haa = ha/na;
                var laa = la/na;
                console.log(haa, laa);
                hi1El.innerHTML = "High: "+parseInt(haa);
                lo1El.innerHTML = "Low: "+parseInt(laa);
            }
            var forecast= function( proc ){
                var proc1 = parseInt(proc);
                var av = parseInt(inHGav);
                if(proc1 < 10 && proc1 >= -10){
                    icon1El.innerHTML = "<img src='icons/28.png' class='icon'>";
                    future.innerHTML = "<p>Partly Cloudy</p>";
                } else if(proc1 >= 10){
                    icon1El.innerHTML = "<img src='icons/32.png' class='icon'>";
                    future.innerHTML = "<p>Sunny</p>";
                } else if(proc1 < -10 && proc1 >= -50){
                    icon1El.innerHTML = "<img src='icons/26.png' class='icon'>";
                    future.innerHTML = "<p>Cloudy</p>"
                } else if(proc1 < -50 && proc1 >= -100){
                    icon1El.innerHTML = "<img src='icons/12.png' class='icon'>";
                    future.innerHTML = "<p>Rainy</p>";
                } else if(proc1 < -100){
                    icon1El.innerHTML = "<img src='icons/4.png' class='icon'>";
                    future.innerHTML = "<p>Thundershowers</p>";
                }
            }
            var forecast1= function( proca ){
                //console.log("1", parseInt(proca));
                var proc2 = parseInt(proca);
                //console.log("1 \n", proc2);
                if(proc2 < 3.75 && proc2 >= -3.75){
                    icon2El.innerHTML = "<img src='icons/28.png' class='icon'>";
                    tomorrow.innerHTML = "<p>Partly Cloudy</p>";
                } else if(proc2 >= 3.75){
                    icon2El.innerHTML = "<img src='icons/32.png' class='icon'>";
                    tomorrow.innerHTML = "<p>Sunny</p>";
                } else if(proc2 < -3.75 && proc2 >= -37.5){
                    icon2El.innerHTML = "<img src='icons/26.png' class='icon'>";
                    tomorrow.innerHTML = "<p>Cloudy</p>"
                } else if(proc2 < -37.5 && proc2 >= -75){
                    icon2El.innerHTML = "<img src='icons/12.png' class='icon'>";
                    tomorrow.innerHTML = "<p>Rainy</p>";
                } else if(proc2 < -75){
                    icon2El.innerHTML = "<img src='icons/4.png' class='icon'>";
                    tomorrow.innerHTML = "<p>Thundershowers</p>";
                }
            }
            var forecast2= function( procb ){
                //console.log("3", parseInt(procb));
                var proc3 = parseInt(procb);
                //console.log("3 \n", proc3);
                if(proc3 < 2.5 && proc3 >= -2.5){
                    icon3El.innerHTML = "<img src='icons/28.png' class='icon'>";
                    day2.innerHTML = "<p>Partly Cloudy</p>";
                } else if(proc3 >= 2.5){
                    icon3El.innerHTML = "<img src='icons/32.png' class='icon'>";
                    day2.innerHTML = "<p>Sunny</p>";
                } else if(proc3 < -2.5 && proc3 >= -12.5){
                    icon3El.innerHTML = "<img src='icons/26.png' class='icon'>";
                    day2.innerHTML = "<p>Cloudy</p>"
                } else if(proc3 < -12.5 && proc3 >= -25){
                    icon3El.innerHTML = "<img src='icons/12.png' class='icon'>";
                    day2.innerHTML = "<p>Rainy</p>";
                } else if(proc3 < -25){
                    icon3El.innerHTML = "<img src='icons/4.png' class='icon'>";
                    day2.innerHTML = "<p>Thundershowers</p>";
                }
            }
            var forecast3= function( procc ){
                //console.log("3", parseInt(procb));
                var proc4 = parseInt(procc);
                //console.log("3 \n", proc3);
                if(proc4 < 1.25 && proc4 >= -1.25){
                    icon4El.innerHTML = "<img src='icons/28.png' class='icon'>";
                    day3.innerHTML = "<p>Partly Cloudy</p>";
                } else if(proc4 >= 1.25){
                    icon4El.innerHTML = "<img src='icons/32.png' class='icon'>";
                    day3.innerHTML = "<p>Sunny</p>";
                } else if(proc4 < -1.25 && proc4 >= -6.25){
                    icon4El.innerHTML = "<img src='icons/26.png' class='icon'>";
                    day3.innerHTML = "<p>Cloudy</p>"
                } else if(proc4 < -6.25 && proc4 >= -12.5){
                    icon4El.innerHTML = "<img src='icons/12.png' class='icon'>";
                    day3.innerHTML = "<p>Rainy</p>";
                } else if(proc4 < -12.5){
                    icon4El.innerHTML = "<img src='icons/4.png' class='icon'>";
                    day3.innerHTML = "<p>Thundershowers</p>";
                }
            }
            var forecast4= function( procd ){
                //console.log("3", parseInt(procb));
                var proc5 = parseInt(procd);
                //console.log("3 \n", proc3);
                if(proc5 < .625 && proc5 >= -.625){
                    icon5El.innerHTML = "<img src='icons/28.png' class='icon'>";
                    day4.innerHTML = "<p>Partly Cloudy</p>";
                } else if(proc5 >= .625){
                    icon5El.innerHTML = "<img src='icons/32.png' class='icon'>";
                    day4.innerHTML = "<p>Sunny</p>";
                } else if(proc5 < -.625 && proc5 >= -3.125){
                    icon5El.innerHTML = "<img src='icons/26.png' class='icon'>";
                    day4.innerHTML = "<p>Cloudy</p>"
                } else if(proc5 < -3.125 && proc5 >= -6.25){
                    icon5El.innerHTML = "<img src='icons/12.png' class='icon'>";
                    day4.innerHTML = "<p>Rainy</p>";
                } else if(proc5 < -6.25){
                    icon5El.innerHTML = "<img src='icons/4.png' class='icon'>";
                    day4.innerHTML = "<p>Thundershowers</p>";
                }
            }
            window.onload = function(){
                weatherBalloon(bendID);
                //forecast(currentpressure);
            }
            var currentConditions = function(l, r, t, a){
                var l1 = parseInt(l);
                var r1 = parseInt(r);
                var a1 = parseInt(a);
                var currentDate = new Date();
                var time = currentDate.getHours();
                console.log("Time: \n", time);
                console.log(r1);
                if(r1 === 1 && a1 > 32){
                    iconEl.innerHTML = "<img src='icons/9.png' class='icon'>";
                    today.innerHTML = "<p>Drizzle</p>";
                }else if(r1 > 1 && a1 > 32){
                    iconEl.innerHTML = "<img src='icons/12.png' class='icon'>";
                    today.innerHTML = "<p>Rain Showers</p>"
                }else if(r1 > 0 && a1 === 32){
                    iconEl.innerHTML = "<img src='icons/7.png' class='icon'>";
                    today.innerHTML = "<p>Wintery Mix</p>";
                }else if(r1 === 1 && a1 < 32){
                    iconEl.innerHTML = "<img src='icons/13.png' class='icon'>";
                    today.innerHTML = "<p>Flurries</p>";
                }else if(r1 > 1 && a1 < 32){
                    iconEl.innerHTML = "<img src='icons/14.png' class='icon'>";
                    today.innerHTML = "<p>Snow Showers</p>";
                }else if(l1 >= 0 && l1 <= 200 && r1 < 0.01){
                    if(time >= 7 && time < 19){
                        iconEl.innerHTML = "<img src='icons/26.png' class='icon'>";
                        //favEl.innerHTML = '<link rel="icon" type="image/x-icon" href="icons/26.png">'; 
                        today.innerHTML = "<p>Cloudy</p>";
                    } else if(time < 7 || time >= 19){
                        iconEl.innerHTML = "<img src='icons/27.png' class='icon'>";
                        //favEl.innerHTML = '<link rel="icon" type="image/x-icon" href="icons/27.png">';
                        today.innerHTML = "<p>Partly Cloudy</p>";
                    }
                }else if(l1 > 200 && l1<= 400 && r1 < 0.01){
                    if(time >= 7 && time < 19){
                        iconEl.innerHTML = "<img src='icons/28.png' class='icon'>";
                    } else if(time < 7 || time >= 19){
                        iconEl.innerHTML = "<img src='icons/27.png' class='icon'>";
                    }
                    today.innerHTML = "<p>Partly Cloudy</p>";
                }else if(l1 > 400){
                    if(time >= 7 && time < 19){
                        iconEl.innerHTML = "<img src='icons/32.png' class='icon'>";
                    } else if(time < 7 || time >= 19){
                        iconEl.innerHTML = "<img src='icons/31.png' class='icon'>";
                    }
                    today.innerHTML = "<p>Clear</p>";
                }
            }