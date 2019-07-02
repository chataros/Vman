// ==UserScript==
// @name         Find Scout
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       chataros@gmail.com
// @match        https://www.tampermonkey.net/index.php?version=4.8.41&ext=dhdg&updated=true
// @include  https://www.virtualmanager.com/employees/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.addEventListener('load', function() {
//    for (i=2;i<=16;i++)
//{
//var stats = document.querySelector("#content > div:nth-child(1) > div > table > tbody > tr:nth-child("+i+") > td:nth-child(8) > div > img").attributes["onmouseover"].value;
//var array =stats.split(",");
//if (array[8] == " 20);" )
//{
//		console.info((i-1)+ " motivation = " + array[8]);
//		if (array[5] == " 20" ){console.info((i-1)+ " potential = " + array[5]);}
//		if (array[4] == " 20" ){console.info((i-1)+ " discipline = " + array[4]);}
//		if (array[7] == " 20" ){console.info((i-1)+ " ability = " + array[7]);}
//}
//}


    //for (var i=2;i<=16;i++)
//{
//var stats = document.querySelector("#content > div:nth-child(1) > div > table > tbody > tr:nth-child("+i+") > td:nth-child(8) > div > img").attributes.onmouseover.value;
//var array =stats.split(",");
//if (array[8] == " 20);" )
//{
//    console.info((i-1)+ " motivation = " + array[8]);
//    if (array[5] == " 20" ){console.info((i-1)+ " potential = " + array[5]);}
//    if (array[4] == " 20" ){console.info((i-1)+ " discipline = " + array[4]);}
//    if (array[7] == " 20" ){console.info((i-1)+ " ability = " + array[7]);}
//}
//    else
//    {
//        if (array[4] == " 20" ){console.info((i-1)+ " discipline = " + array[4]);}
//    }
//}
}, false);



})();
waitForKeyElements ("#content > div:nth-child(1) > div > table > tbody > tr:nth-child(16) > td:nth-child(8) > div > img", actionFunction);

function actionFunction (jNode)
{
    for (var i=2;i<=16;i++)
    {
        var stats = document.querySelector("#content > div:nth-child(1) > div > table > tbody > tr:nth-child("+i+") > td:nth-child(8) > div > img").attributes["onmouseover"].value;
        var array =stats.split(",");
        //console.info((i-1)+ " potential = " + array[5]+ " ability = " + array[7] +" discipline = " + array[4] +" + motivation = " + array[8]);

        if (array[5] == " 20" )//potential
        {
            var line = document.querySelector("#content > div:nth-child(1) > div > table > tbody > tr:nth-child("+(i)+")");
        //    #var line = document.querySelector("#content > div:nth-child(1) > div > table > tbody > tr:nth-child(2)");

            line.style="background-color: #003300;";
            if (array[8] == " 20);" )//motivation
            {line.style="background-color: #006600;";
                console.info("Potential ("+ (i-1)+ ")= " + array[5] + " + motivation = " + array[8]+" discipline = " + array[4] );
                if (array[4] == " 20" )//discipline
                {
                    line.style="background-color: #009900;";
                    if (array[7] == " 20" )//ability
                    {
                        line.style="background-color: #00FF00;";
                        console.info("Found Perfect Scout ("+ (i-1)+ ") : potential = " + array[5]+ " ability = " + array[7] +" discipline = " + array[4] +" + motivation = " + array[8]);" potential: " + console.info((i-1));
                    }
                    else
                    {line.style="background-color: #00CC00;";
                        console.info("Found Perfect Potential Scout ("+ (i-1)+ ") : potential =  " + array[5]+ " ability = " + array[7] +" discipline = " + array[4] +" + motivation = " + array[8]);" potential: " + console.info((i-1));
                    }
                }
            }
        }
        else if (array[7] == " 20" )//ability
        {
          //  console.info("Ability ("+ (i-1)+ ")= " + array[7]);
            if (array[4] == " 20" )//discipline
                {
                    if (array[8] == " 19" )//motivation
                    {
                        console.info("Found Perfect Ability Scout : potential = "+ (i-1)+ " " + array[5]+ " ability = " + array[7] +" discipline = " + array[4] +" + motivation = " + array[8]);" potential: " + console.info((i-1));
                    }
                    else
                    {
                        console.info("Found Ability  Scout : potential = "+ (i-1)+ " " + array[5]+ " ability = " + array[7] +" discipline = " + array[4] +" + motivation = " + array[8]);" potential: " + console.info((i-1));
                    }
                }
        }

    }
}
