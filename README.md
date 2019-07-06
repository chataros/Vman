# Vman
Scripts to import in Tampermonkey to find scouts or trainers. 
Steps needed: 
1. Install Tampermonkey
2. Open one of the scripts
3. Click on Raw. The tampermonkey will provide an install button. 
4. Click on the install button.


On mobile (android)
1. Instal tampermonkey app on google play.
2. Open one of the scripts
3. Click on raw, select all the text and copy it
4. Open the page https://www.virtualmanager.com/employees/ (login to the site)
5. Click on the top right ".." icon
6. Select add a new script
7. Replace the existing template with the contents of one of the scripts.
8.  Click on save icon (first one).

Go back to https://www.virtualmanager.com/employees/ and search for unemployed staff.
Do not enable the 2 scripts at the same time as the color code is similar and you woudn't understand which type of trainer/scout it.

For trainers:
If a line is highligted light red this is a senior outfield trainer.If a line is highligted dark red this is a  youth outfield trainer.
If a line is highligted light green this is a senior keeper trainer.If a line is highligted dark green this is a  youth keeper trainer.
You can press F12 hotkey(in Chrome) to see the console. There you'll see the three attributes if there is any of keeper or outfile with the value 20 

For Scouts:
Just look up the color codes in the script. Light green should be 20 Potential + 20 Discipline, Dark green has extra 20 motivation.
