$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("newlogin.feature");
formatter.feature({
  "line": 1,
  "name": "Free crm pro test login",
  "description": "",
  "id": "free-crm-pro-test-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Parameter testing with valid credentials",
  "description": "",
  "id": "free-crm-pro-test-login;parameter-testing-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open browser As \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to url As \"https://www.crmpro.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter user name As \"Mayuri_257\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter password As \"Mayuri$257\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user shoukd be on home page \"CRMPRO\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 13,
  "name": ": Test login frm pro with invalid credentials",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Open browser As \"\u003cbrowsername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "navigate to url As \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter user name As \"\u003cUserId\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter password As \"\u003cUserPass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user shoukd be on home page \"\u003cTitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "browsername",
        "url",
        "UserId",
        "UserPass",
        "Title"
      ],
      "line": 23,
      "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Chrome",
        "https://www.crmpro.com",
        "Mayuri_257",
        "Mayuri$257",
        "CRMPRO"
      ],
      "line": 24,
      "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": ": Test login frm pro with invalid credentials",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Open browser As \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "navigate to url As \"https://www.crmpro.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter user name As \"Mayuri_257\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter password As \"Mayuri$257\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user shoukd be on home page \"CRMPRO\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});