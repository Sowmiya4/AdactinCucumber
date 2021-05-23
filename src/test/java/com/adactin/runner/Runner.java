package com.adactin.runner;

import java.io.IOException;

import org.junit.*;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.adactin.project.AdactinCucumber.BaseClass;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(retryCount = 4)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature\\Adactin.feature",
					glue = "com\\adactin\\stepdefinition",
					monochrome = true,
					dryRun = false,
					strict = true,
					plugin = {//"html:HTMLReport",
							  "pretty",
							  //"json:JsonReport//jsonReport.txt",
							 // "com.cucumber.listener.ExtentCucumberFormatter:Report//CucumberExtentReport.html"
							"rerun:Report1/FailedScenario.txt"
}
					)

public class Runner { 
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws IOException {
		
		String browser = FileReaderManager.getInstance().getCrInstance().getBrowser();
		driver = BaseClass.browserLaunch(browser);
	}

	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}
