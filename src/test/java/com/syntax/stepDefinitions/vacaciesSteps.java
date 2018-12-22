package com.syntax.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

import com.syntax.pages.vacaciesPage;
import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class vacaciesSteps {

	vacaciesPage obj;

	@Given("^I logged into OrangeHRM with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_logged_into_OrangeHRM_with_and(String userName, String password) throws Throwable {
		obj = new vacaciesPage();
		CommonMethods.enterValue(obj.userName, userName);
		// Thread.sleep(3000);
		CommonMethods.enterValue(obj.password, password);
		// Thread.sleep(3000);

	}

	@When("^I click login button$")
	public void i_click_login_button() throws Throwable {
		// Thread.sleep(3000);
		CommonMethods.click(obj.longin);
		// Thread.sleep(3000);
	}

	@When("^I click Recruitment Module and click Vacancies$")
	public void i_click_Recruitment_Module_and_click_Vacancies() throws Throwable {

		CommonMethods.click(obj.recruitment);
		CommonMethods.click(obj.vacancies);

	}

	@When("^Click Add$")
	public void click_Add() throws Throwable {

		CommonMethods.click(obj.addbutton);
	}

	@When("^Select Job Title to \"([^\"]*)\"$")
	public void select_Job_Title_to(String HRManager) throws Throwable {

		CommonMethods.click(obj.jobTitle);
		Select select = new Select(obj.jobTitle);
		select.selectByVisibleText("HR Manager");
	}

	@When("^Enter Vacancy Name\"([^\"]*)\"$")
	public void enter_Vacancy_Name(String Payam) throws Throwable {
		CommonMethods.enterValue(obj.VacnName, Payam);
	}

	@When("^Enter Hiring Manager \"([^\"]*)\" to John Smith$")
	public void enter_Hiring_Manager_to_John_Smith(String andreaRamirez) throws Throwable {

		CommonMethods.click(obj.HiringMang);
		CommonMethods.enterValue(obj.HiringMang, andreaRamirez);
		// Thread.sleep(3000);
	}

	@When("^Enter Number Of Positions one \"([^\"]*)\"$")
	public void enter_Number_Of_Positions_one(String num) throws Throwable {

		CommonMethods.enterValue(obj.entPosition, num);
		// Thread.sleep(2000);
	}

	@When("^Enter Description \"([^\"]*)\"$")
	public void enter_Description(String Heisgood) throws Throwable {

		CommonMethods.enterValue(obj.dectrip, Heisgood);
		// Thread.sleep(2000);
	}

	@When("^I Click Save$")
	public void i_Click_Save() throws Throwable {
		CommonMethods.click(obj.savebtn);
	}

	@Then("^I see vacancy details are displayed$")
	public void i_see_vacancy_details_are_displayed() throws Throwable {
		boolean Assert = (obj.OrangeLogo.isDisplayed());

	}

	@When("^Select Job Title that matches previous entry \"([^\"]*)\"$")
	public void select_Job_Title_that_matches_previous_entry(String HRManager) throws Throwable {
		CommonMethods.click(obj.reselJobTitle);
		CommonMethods.selectValue(obj.reselJobTitle, HRManager);

		 Thread.sleep(5000);
	}

	
}
