#Author: your.email@your.domain.com
Feature: OrangeHRM Vacancies

  Background: 
    Given I logged into OrangeHRM with "Admin" and "admin123"
    And I click login button
    When I click Recruitment Module and click Vacancies

  Scenario: Vacancies
    And Click Add
    And Select Job Title to "<HR Manager>"
    And Enter Vacancy Name"Payam"
    And Enter Hiring Manager "<andrea Ramirez>" to John Smith
    And Enter Number Of Positions one "22"
    And Enter Description "He is good"
    And I Click Save
    Then I see vacancy details are displayed

  Scenario: Appearing of Vacanies
    And Select Job Title that matches previous entry "HR Manager"
  
    
