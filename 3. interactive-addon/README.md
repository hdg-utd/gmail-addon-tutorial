## What is this project about?
In this project we learn more about making our Gmail cards interactive. 
We build a card with a button. 
When the user clicks the button, he/she gets a notification.

While the google documentation doesn't specify this, we are going to setup a 
composeTrigger to be able to use this project.
```
"contextualTriggers": [{
  "unconditional": {
  },
  "onTriggerFunction": "interactiveCarder"
}]
```

Just as any other compose view project, we need to add this line to our 
`oauthScopes` in the manifest.
```
 "oauthScopes": [
  "https://www.googleapis.com/auth/gmail.addons.current.message.readonly"
],
```

As always, replace `interactiveCard` with the name of the callback function 
of your choice.

## How to get started
1. Use `clap create [name_of_the_project]`.
2. Select standalone from the dropdown in your terminal. 
(Currently there is no option for Gmail Add on. 
We need to add the files ourselves.)
3. Open the `appsscript.json` file and complete the manifest. 
You can refer to [0b. skeleton](https://github.com/hdg-utd/gmail-addon-tutorial/tree/master/0b.%20skeleton) 
to read more about what goes into an Gmail Add on manifest. 
Then add the composeTigger field to the manifest.
4. Create the `Code.js` file and enter the Apps Script code. 
([interactive-addon/Code.js](https://github.com/hdg-utd/gmail-addon-tutorial/blob/master/3.%20interactive-addon/Code.js)
 has comments explaining every section of code.
5. Use `clasp push` to push the code to Google. (Make sure you have finished all steps of 
[clasp setup](https://github.com/google/clasp) for this to work).
6. Follow these steps from the `0a. basics` to deploy your project and test it in Gmail. 

## Concepts used in this project
* Cards - [Google Docmentation](https://developers.google.com/gmail/add-ons/concepts/cards)
| [My explanation]()
* Widget - [Google Docmentation](https://developers.google.com/gmail/add-ons/concepts/widgets)
| [My explanation]()
* Notifications - [Google Documentation](https://developers.google.com/gmail/add-ons/reference/card-service/notification) 

* [Corresponding Google Tutorial](https://developers.google.com/gmail/add-ons/how-tos/interactions)
