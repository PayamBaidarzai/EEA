package com.syntax.utils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonMethods extends BaseClass {

	public static void enterValue(WebElement element, String value) {
		element.clear();
		element.sendKeys(value);
	}

	public static WebElement waiting(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		return wait.until(ExpectedConditions.elementToBeClickable(element));
	}

	public static void selectValue(WebElement element, String visibleText){
		
        Select select = new Select(element);
        select.selectByVisibleText(visibleText);
    }
	
	public static void click(WebElement element) {
		WebElement elm = waiting(element);
		elm.click();
	}
}
