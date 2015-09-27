##Visual studio setup##

I used visual studio 2012 with update 4 installed.  I also installed “Chutzpah test runner context menu extensions” and “Chutzpah test adaptor for test explorer”.  This allows client side tests to be run in visual studio and provided you have update 4, it will also add them to the test runner.

##Configuration##

The Redington project contains an ASP MVC project.  This should be setup in visual studio to use IIS express, this will make it run as the currently logged in user and give it access to /users/*userName* which is the default location for logs.
You can override the default location by adding an app setting called “logPath”
To run the selenium tests, you need to ensure that the website is running on port 56982.  Or you can change the port in “UiTests/BaseTests”, either way you will want to fix the port so it doesn’t change each time the website is run.
