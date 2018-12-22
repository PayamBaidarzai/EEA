package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class vacaciesPage extends BaseClass {

	

	@FindBy(id = "txtUsername")
	public WebElement userName;

	@FindBy(id = "txtPassword")
	public WebElement password;

	@FindBy(id = "btnLogin")
	public WebElement longin;

	@FindBy(id = "menu_recruitment_viewRecruitmentModule")
	public WebElement recruitment;

	@FindBy(xpath = "//a[@id='menu_recruitment_viewJobVacancy']")
	public WebElement vacancies;

	@FindBy(id = "btnAdd")
	public WebElement addbutton;

	@FindBy(id = "addJobVacancy_jobTitle")
	public WebElement jobTitle;

	@FindBy(id="addJobVacancy_name")
	public WebElement VacnName;
	
	@FindBy(id="addJobVacancy_hiringManager")
	public WebElement HiringMang;
	
	@FindBy(id="addJobVacancy_noOfPositions")
	public WebElement entPosition;
	
	@FindBy(id="addJobVacancy_description")
	public WebElement dectrip;
	
	@FindBy(id="btnSave")
	public WebElement savebtn;
	
	@FindBy(xpath="//*[@id=\"branding\"]/a[1]/img")
	public WebElement OrangeLogo;
	
	
	@FindBy(id="vacancySearch_jobTitle")
	public WebElement reselJobTitle;
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public vacaciesPage() {
		PageFactory.initElements(driver, this);
	}
	
	
	
	
	
	
	
	
	
	
}
