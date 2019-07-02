# Vman
Scripts to import in Tampermonkey to find scouts or trainers. 
Steps needed: 
1. Install Tampermonkey
2. Open the page https://www.virtualmanager.com/employees/
3. Click on Tampermonkey icon and click on "Add new script".
4. Replace the existing template with the contents of one of the scripts.
5 In the Tampermonkey "File" menu click on save.
Go back to https://www.virtualmanager.com/employees/ and search for unemployed staff.

For trainers:
If a line is highligted light red this is a senior outfield trainer.If a line is highligted dark red this is a  youth outfield trainer.
If a line is highligted light green this is a senior keeper trainer.If a line is highligted dark green this is a  youth keeper trainer.
You can press F12 hotkey(in Chrome) to see the console. There you'll see the three attributes if there is any of keeper or outfile with the value 20 

For Scouts:
Just look up the color codes in the script. Light green should be 20 Potential + 20 Discipline, Dark green has extra 20 motivation.
