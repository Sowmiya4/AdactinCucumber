Feature: Login functionality for adactin application 

Background: 
	Given User launch url of adactin application 
	When User enter "GaniSri" as username 
	And User enter "Gani05" as password 
	And User click login button 
	Then User validate valid username and valid password 
	
Scenario: User enter valid username and valid password 
	Given User launch url of adactin application 
	When User enter "SowmiyaSri" as username 
	And User enter "Sowmiya05" as password 
	And User click login button 
	Then User validate valid username and valid password 
	
Scenario Outline: User enter valid username and valid password 
	Given User launch url of adactin application 
	When User enter "<username>" as username 
	And User enter "<password>" as password 
	And User click login button 
	Then User validate valid username and valid password 
	
	Examples: 
		| username | password |
		| Ganishka | Gani@134 |
		| Nisha | nisha345 |
		| nancy | nancy987 |
		| aarthi | aarthi456 |
		
