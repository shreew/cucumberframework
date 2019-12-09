Feature: varify new account is created 
Background:
	Given user is already on Login page 
	When titile of the login page is "CRMPRO" 
	Then user enter username as "Mayuri_257" and password as "Mayuri$257" 
	Then user click on login butten 
	And titile of the home page is "CRMPRO" 
	
Scenario: verifry new account creatation 
	Given user should be on home page "CRMPRO" 
	When verify user name as "Mayuri Deshmukh" 
	And navigate to new contact page 
	Then enter firstname as "Gaurav" 
	And enetr lastname as "Pate" 
	And enter company name as "U to Solutions" 
	Then click on save button 