$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for adactin application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GaniSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Gani05\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 12003052600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GaniSri",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 2321590000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gani05",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 242556600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1948882300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enter \"SowmiyaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter \"Sowmiya05\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 767752700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SowmiyaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 462596000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sowmiya05",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 371221900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 3091061100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "Ganishka",
        "Gani@134"
      ],
      "line": 26,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "Nisha",
        "nisha345"
      ],
      "line": 27,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;3"
    },
    {
      "cells": [
        "nancy",
        "nancy987"
      ],
      "line": 28,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;4"
    },
    {
      "cells": [
        "aarthi",
        "aarthi456"
      ],
      "line": 29,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GaniSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Gani05\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 1084954100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GaniSri",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 730457300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gani05",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 349729600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1973672100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"Ganishka\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"Gani@134\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 954845500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 692471300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gani@134",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 307349900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 888414700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 45500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GaniSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Gani05\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 1236149200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GaniSri",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 738639100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gani05",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 288596800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1007668000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"Nisha\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"nisha345\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 980369000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nisha",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 563935000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nisha345",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 378978900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1680253500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 46600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GaniSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Gani05\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 1159657500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GaniSri",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 615232400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gani05",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 272280800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1157540900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 36200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"nancy\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"nancy987\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 1320819500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancy",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 641227200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancy987",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 335803800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1299549900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GaniSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Gani05\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 852210100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GaniSri",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 583618200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gani05",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 300537900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1377548100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"aarthi\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"aarthi456\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User validate valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 1314967700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aarthi",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 590316400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aarthi456",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 316877800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1031256100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_validate_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 46400,
  "status": "passed"
});
});