package com.adactin.stepdefinition;

import java.io.IOException;

import com.adactin.project.AdactinCucumber.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass{

	@Before
	public static void beforeHooks(Scenario scenario) {

		System.out.println(scenario.getName());
	}
	
	@After
	public static void afterHooks(Scenario scenario) throws IOException {

		System.out.println(scenario.getStatus());
		
		if (scenario.isFailed()) {
			
			screenSht("Failed screenshot");
		}
	}
}
