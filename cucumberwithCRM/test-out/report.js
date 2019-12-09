$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/new workspace/eclipse-workspace/cucumberwithCRM/src/main/java/newfeature/createNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "varify new account is created",
  "description": "",
  "id": "varify-new-account-is-created",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4746636942,
  "status": "passed"
});
formatter.write("before going to set the system variable path for browser");
formatter.before({
  "duration": 566274,
  "status": "passed"
});
formatter.write("beforeMethod............");
formatter.before({
  "duration": 276220,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "titile of the login page is \"CRMPRO\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter username as \"Mayuri_257\" and password as \"Mayuri$257\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on login butten",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "titile of the home page is \"CRMPRO\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccount.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 6690978355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "CreateAccount.titile_of_the_login_page_is(String)"
});
formatter.write("Title of the login page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("verified the login page title ");
formatter.result({
  "duration": 18676321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_257",
      "offset": 24
    },
    {
      "val": "Mayuri$257",
      "offset": 53
    }
  ],
  "location": "CreateAccount.user_enter_username_as_and_password_as(String,String)"
});
formatter.write("Enter valid username and valid password to the text username and password text feild..");
formatter.result({
  "duration": 306960481,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.user_click_on_login_butten()"
});
formatter.write("Click on login btn on login page ...");
formatter.result({
  "duration": 8583432323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 28
    }
  ],
  "location": "CreateAccount.titile_of_the_home_page_is(String)"
});
formatter.write("User should be on home page with title as :CRMPRO");
formatter.write("Title of the home page is : CRMPRO");
formatter.write("Title of the homepage is verified ......");
formatter.result({
  "duration": 15998458,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verifry new account creatation",
  "description": "",
  "id": "varify-new-account-is-created;verifry-new-account-creatation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user should be on home page \"CRMPRO\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "verify user name as \"Mayuri Deshmukh\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "navigate to new contact page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "enter firstname as \"Gaurav\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enetr lastname as \"Pate\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter company name as \"U to Solutions\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "NewAccStepdefs.user_should_be_on_home_page(String)"
});
formatter.result({
  "duration": 11419628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri Deshmukh",
      "offset": 21
    }
  ],
  "location": "NewAccStepdefs.verify_user_name_as(String)"
});
formatter.write("verify username contains :Mayuri Deshmukh");
formatter.write("actualUname username from appli :  User: Mayuri Deshmukh");
formatter.result({
  "duration": 113598778,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepdefs.navigate_to_new_contact_page()"
});
formatter.write("navigating to new contact page...");
formatter.write("navigated to new contact page...");
formatter.result({
  "duration": 337578081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaurav",
      "offset": 20
    }
  ],
  "location": "NewAccStepdefs.enter_firstname_as(String)"
});
formatter.result({
  "duration": 1654023756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pate",
      "offset": 19
    }
  ],
  "location": "NewAccStepdefs.enetr_lastname_as(String)"
});
formatter.result({
  "duration": 137270712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "U to Solutions",
      "offset": 23
    }
  ],
  "location": "NewAccStepdefs.enter_company_name_as(String)"
});
formatter.result({
  "duration": 264682730,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepdefs.click_on_save_button()"
});
formatter.result({
  "duration": 144509109,
  "status": "passed"
});
});