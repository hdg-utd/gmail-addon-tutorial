## What is this project about?
In this project we extend the Message UI. 
The Message UI lets you work with the message that is currently open. 

We are able to connect our Apps Script code with the open email using something called contextual triggers. 
```
"contextualTriggers": [{
  "unconditional": {
  },
  "onTriggerFunction": "getContextualAddOn"
}],
```
We add this functionality to our code by adding the lines above to your project manifest. 
Replace `getContextualAddOn` with the name of the callback function you want to trigger, 

We will see later in the code that an event object is passed to the trigger method above. 
This object helps us access the current message.

## How to get started
1. Use `clap create [name_of_the_project]`.
2. Select standalone from the dropdown in your terminal. 
(Currently there is no option for Gmail Add on. 
We need to add the files ourselves.
3. Open the `appsscript.json` file and complete the manifest. 
You can refer to [0b. skeleton](https://github.com/hdg-utd/gmail-addon-tutorial/tree/master/0b.%20skeleton) 
to read more about what goes into an Gmail Add on manifest. 
Then add the contextualTrigger field to the manifest.
4. Create the `Code.js` file and enter the Apps Script code.
5. Use `clasp push` to push the code to Google. (Make sure you have finished all steps of 
[clasp setup](https://github.com/google/clasp) for this to work).
6. Follow these steps from the `0a. basics` to deploy your project and test it in Gmail. 

## Concepts used in this project
* Cards - [Google Docmentation](https://developers.google.com/gmail/add-ons/concepts/cards)
| [My explanation]()
* Widget - [Google Docmentation](https://developers.google.com/gmail/add-ons/concepts/widgets)
| [My explanation]()
* KeyVal - [Google Docmentation](https://developers.google.com/apps-script/reference/card-service/key-value)
