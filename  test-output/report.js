$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SyntaxTeam"
    }
  ],
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5107721912,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 251100618,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Valid login",
  "description": "",
  "id": "login-feature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I enter \"admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 406094000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 1237991979,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 44254,
  "status": "passed"
});
formatter.after({
  "duration": 728988679,
  "status": "passed"
});
formatter.uri("vacancies.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 2,
  "name": "OrangeHRM Vacancies",
  "description": "",
  "id": "orangehrm-vacancies",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4536247900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM with \"Admin\" and \"admin123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Recruitment Module and click Vacancies",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    },
    {
      "val": "admin123",
      "offset": 42
    }
  ],
  "location": "vacaciesSteps.i_logged_into_OrangeHRM_with_and(String,String)"
});
formatter.result({
  "duration": 421618428,
  "status": "passed"
});
formatter.match({
  "location": "vacaciesSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1209002114,
  "status": "passed"
});
formatter.match({
  "location": "vacaciesSteps.i_click_Recruitment_Module_and_click_Vacancies()"
});
formatter.result({
  "duration": 1442756386,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Vacancies",
  "description": "",
  "id": "orangehrm-vacancies;vacancies",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Click Add",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select Job Title to \"\u003cHR Manager\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Vacancy Name\"Payam\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter Hiring Manager \"\u003candrea Ramirez\u003e\" to John Smith",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter Number Of Positions one \"22\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter Description \"He is good\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click Save",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see vacancy details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "vacaciesSteps.click_Add()"
});
formatter.result({
  "duration": 597773871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cHR Manager\u003e",
      "offset": 21
    }
  ],
  "location": "vacaciesSteps.select_Job_Title_to(String)"
});
formatter.result({
  "duration": 493412095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payam",
      "offset": 19
    }
  ],
  "location": "vacaciesSteps.enter_Vacancy_Name(String)"
});
formatter.result({
  "duration": 165789755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003candrea Ramirez\u003e",
      "offset": 22
    }
  ],
  "location": "vacaciesSteps.enter_Hiring_Manager_to_John_Smith(String)"
});
formatter.result({
  "duration": 388936918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 31
    }
  ],
  "location": "vacaciesSteps.enter_Number_Of_Positions_one(String)"
});
formatter.result({
  "duration": 126256001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "He is good",
      "offset": 19
    }
  ],
  "location": "vacaciesSteps.enter_Description(String)"
});
formatter.result({
  "duration": 137996325,
  "status": "passed"
});
formatter.match({
  "location": "vacaciesSteps.i_Click_Save()"
});
formatter.result({
  "duration": 186385206,
  "status": "passed"
});
formatter.match({
  "location": "vacaciesSteps.i_see_vacancy_details_are_displayed()"
});
formatter.result({
  "duration": 65244483,
  "status": "passed"
});
formatter.after({
  "duration": 659480016,
  "status": "passed"
});
formatter.before({
  "duration": 4290068950,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM with \"Admin\" and \"admin123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Recruitment Module and click Vacancies",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    },
    {
      "val": "admin123",
      "offset": 42
    }
  ],
  "location": "vacaciesSteps.i_logged_into_OrangeHRM_with_and(String,String)"
});
formatter.result({
  "duration": 184622953,
  "status": "passed"
});
formatter.match({
  "location": "vacaciesSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1006068712,
  "status": "passed"
});
formatter.match({
  "location": "vacaciesSteps.i_click_Recruitment_Module_and_click_Vacancies()"
});
formatter.result({
  "duration": 1323909754,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Appearing of Vacanies",
  "description": "",
  "id": "orangehrm-vacancies;appearing-of-vacanies",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Select Job Title that matches previous entry \"HR Manager\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "HR Manager",
      "offset": 46
    }
  ],
  "location": "vacaciesSteps.select_Job_Title_that_matches_previous_entry(String)"
});
formatter.result({
  "duration": 5275119821,
  "status": "passed"
});
formatter.after({
  "duration": 691835944,
  "status": "passed"
});
});