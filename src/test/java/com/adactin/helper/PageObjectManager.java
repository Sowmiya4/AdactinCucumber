package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.LoginPage;

public class PageObjectManager {

	public static WebDriver driver;
	
	private LoginPage lp;
	
	//private SearchPage sp;
	//private BookingConfirm bc;

	public PageObjectManager(WebDriver pdriver) {
		this.driver = pdriver;
	}

	public LoginPage getLp() {
		lp = new LoginPage(driver);
		return lp;
	}
	
}
