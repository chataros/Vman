// ==UserScript==
// @name         FindTrainer
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

        if (array[2] == " 20" )//KEEPER
        {
            var line = document.querySelector("#content > div:nth-child(1) > div > table > tbody > tr:nth-child("+(i)+")");
        //    #var line = document.querySelector("#content > div:nth-child(1) > div > table > tbody > tr:nth-child(2)");

          //console.info("youth ("+ (i-1)+ ")= [" + array[1]+"]");
            if (array[1] == " 20" )//youth
            {
                line.style="background-color: #006600;";
                console.info("Index Youth("+ (i-1)+ ") youth = " + array[1] + " + Keeper = " + array[2]+" outfield = " + array[3] );
            }
            else
            {
                  line.style="background-color: #00FF00;";
                console.info("Index Senior("+ (i-1)+ ") youth = " + array[1] + " + Keeper = " + array[2]+" outfield = " + array[3] );
            }
        }
        if (array[3] == " 20" )//OUTFIELD
        {

            var line2 = document.querySelector("#content > div:nth-child(1) > div > table > tbody > tr:nth-child("+(i)+")");

           // console.info("youth ("+ (i-1)+ ")= [" + array[1]+"]");

            if (array[1] == " 20" )//youth
                {
                    line2.style="background-color: #660000;";
                    console.info("Index Youth("+ (i-1)+ ") youth = " + array[1] + " + Keeper = " + array[2]+" outfield = " + array[3] );
                }
            else
            {
                line2.style="background-color: #ff0000;";
                 console.info("Index Senior ("+ (i-1)+ ") youth = " + array[1] + " + Keeper = " + array[2]+" outfield = " + array[3] );
            }
        }

    }
}
