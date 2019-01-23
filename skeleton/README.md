## Introduction
The appsscript.json file represents the manifest file of every gmail add on. 
You will need to update the manifest every time you create a new App Scrips project. 

This manifest is a boilerplate that every Gmail Add on will need. 
You will need to add more scopes and triggers to your manifest based on the project. 

The tutorail will go over each one of them.
You can find the final manifest file in each tutorial folder. 
I strongly encourage you to try to figure it out on your own first.

## Breakdown of the manifest
This comes by default with creation of any project.
```
{
  "timeZone": "America/Mexico_City",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER"
}
```
---
Scopes define how much access of a user's gmail account do you want. 
You can go [here](https://developers.google.com/gmail/add-ons/concepts/scopes) and read more about different scopes you need for different featues. 
We will dive more into each scope as needed.
```
"oauthScopes": [
    "https://www.googleapis.com/auth/gmail.addons.execute"
  ],
```
---
This is the part of the manifest where you define the details of your projects. 
Outside the name, logo and colors, you need to define the project triggers. 
Triggers define when the script fires in Gmail - when an email is opened, when a new email is created, run indefinitely. 
We will learn more about each trigger as we work on projects.
```
"gmail": {
    "name": "Name your project",
    "logoUrl": "https://www.example.com/hosted/images/2x/my-icon.png",
    "primaryColor": "#4285F4",
    "secondaryColor": "#4285F4"
  }
```
