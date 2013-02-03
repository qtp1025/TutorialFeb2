SystemUtil.CloseProcessByName"iexplore.exe" @@ hightlight id_;_1311932_;_script infofile_;_ZIP::ssf1.xml_;_
SystemUtil.Run"iexplore.exe"
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Navigate "www.facebook.com"
Browser("Browser").Page("Welcome to Facebook -").WebEdit("email").Set "rabiul718@msn.com" @@ hightlight id_;_Browser("Browser").Page("Welcome to Facebook -").WebEdit("email")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Welcome to Facebook -").WebEdit("pass").SetSecure "510dda09840490bb8ff07be234cff03ff577a1c796c7" @@ hightlight id_;_Browser("Browser").Page("Welcome to Facebook -").WebEdit("pass")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Welcome to Facebook -").WebButton("Log In").Click @@ hightlight id_;_Browser("Browser").Page("Welcome to Facebook -").WebButton("Log In")_;_script infofile_;_ZIP::ssf5.xml_;_

Browser("Browser").Page("Facebook").WebEdit("machine_name").Set "rabi" @@ hightlight id_;_Browser("Browser").Page("Facebook").WebEdit("machine name")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Facebook").WebButton("Don't Save").Click @@ hightlight id_;_Browser("Browser").Page("Facebook").WebButton("Don't Save")_;_script infofile_;_ZIP::ssf15.xml_;_
 @@ hightlight id_;_Browser("Browser").Page("Welcome to Facebook -")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Facebook_2").Link("Ra Bee").Click @@ hightlight id_;_Browser("Browser").Page("Facebook 2").Link("Ra Bee")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Ra Bee").Link("Account Settings").Click @@ hightlight id_;_Browser("Browser").Page("Ra Bee").Link("Account Settings")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Ra Bee").WebButton("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Ra Bee").WebButton("Log Out")_;_script infofile_;_ZIP::ssf12.xml_;_
 @@ hightlight id_;_Browser("Browser").Page("Welcome to Facebook -_2")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").CloseAllTabs


