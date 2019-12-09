Feature: Free crm pro test login 

@positive 
Scenario: Parameter testing with valid credentials

	Given Open browser As "Chrome" 
	And navigate to url As "https://www.crmpro.com" 
	When enter user name As "Mayuri_257" 
	And enter password As "Mayuri$257" 
	Then clicked on Login Button 
	And user shoukd be on home page "CRMPRO"

	Scenario Outline:: Test login frm pro with invalid credentials
	Given Open browser As "<browsername>" 
	And navigate to url As "<url>" 
	When enter user name As "<UserId>" 
	And enter password As "<UserPass>" 
	Then clicked on Login Button 
	And user shoukd be on home page "<Title>"

	Examples:

	|browsername| url| UserId| UserPass|Title|
	|Chrome| https://www.crmpro.com|Mayuri_2|Mayuri$7|CRMPRO| 