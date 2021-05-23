This file will let you know how to begin with NodeJs

1.  # Install NodeJs on your machine

    in the cmd use node -v command to check the installed version on your machine.

2.  # Setup Working Directory: Go to working Directory:

    2.1 > mkdir nodejsstreet : Creating a folder such that we can store files over there

    2.2 > cd NodeJsStreet : Going inside newly created folder

3.  # Adding package.json file in your solution

    3.1 nodejsstreet> npm init

    3.2 Once you execute above command, interface will ask for below details:

    3.2.1 package name : <nodejsstreet> nodejsstreet (giving same name as app name: should be in lower case)

        3.2.2 version : <1.0.0> (skipping to give new value by hitting enter button)

        3.2.3 description: To learn about nodejs

        3.2.4 entry point: <index.js> app.js (changing it from index.js to app.js)

        3.2.5 test command: (skipping to give new value by hitting enter button)

        3.2.6 git repository: https://github.com/LearningStreets/NodeJsStreet.git (giving mine git repo, you can skip by hitting enter button)

        3.2.7 keywords: (skipping to give new value by hitting enter button)

        3.2.8 author: Learning Streets

        3.2.9 license: <ISC> (skipping to give new value by hitting enter button)

    3.3 Once you provide above details then one confirmation text will come, press enter and continue

    3.4 Now check your working directory you will have package.json file created over there.

4.  # Open the working directory in your visual studio code or any other IDE.

    4.1 Let's create 'app.js' file by adding new file and name as app.js and add below content

        var msg = "Node: Hello World Program"
        console.log(msg);

    4.2 Go back to command prompt of your working directory and execute below command
    nodejsstreet> node app.js
    Output: Node: Hello World Program

5.  Great! we have done the hello world program but wait! we have not run on browser. To do so we have to install additional package and add some extra code into the application.

6.  # To start further we will use 'express' package that will help us to create the nodejs application. express is a framework which help us by providing basic building blocks for nodejs application.

7.  # Let's install express package

    7.1 Installing express package as globally: npm install -g express

    7.2 Let's install to our project as well. nodejsstreet> npm install express. Once this gets completed we can see an entry for "express" package in our package.json file under "dependencies".

    7.3 Additional task, add "start" script in the package.json file under "scripts" property. Let's add below:
    "start" : "node app.js"

8.  # Modify app.js

    8.1 Modify app.js file by adding below code:

        var express = require('express');
        var app = express();
        var port = 3005;

        app.get('/', function(req, res) {
            res.send('Node: Hello World Program');
        })

        app.listen(port, function() {
            console.log('Logging this - Node: Hello World Program')
        })

    8.2 Once done with modifying app.js file, open the cmd for the directory and run below command:
    npm start

    8.3 Open http://localhost:3005/ to see the message.

9.  # We are all done now. Happy Coding!

10. # Optional: Hot loading

    10.1 To get real time changes on UI as soon as you modify your code(refresh is required on browser) then we need to install one package; nodemon.

    10.2 npm install nodemon

    10.3 Once above package is installed now, change the "start" script as below:
    "start" : "nodemon app.js"

    10.4 Re-run the npm start on command line and now you will have hot loading enabled in your code. Do check by modifying your message and save it. Refresh the browser. Bingo! it's changing like charm.
