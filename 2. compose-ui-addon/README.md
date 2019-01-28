## What is this project about?
In this project we extend the Compose UI. 
The compose UI lets you work with the email draft you are currently editing.

We are able to connect our Apps Script code with the open draft email using something called compose triggers.
```
"composeTrigger": {
  "draftAccess": "NONE",
  "selectActions": [{
    "text": "Adds hello world to draft",
    "runFunction": "updateDraft"
  }]
}
```

We also need to add this line to our `oauthScopes` in the manifest to get access 
to the draft.
```
oauthScopes: {
  "https://www.googleapis.com/auth/gmail.addons.current.action.compose"
}
```

We add this functionality to our code by adding the lines above to your project manifest. 
Replace `updateDraft` with the name of the callback function you want to trigger.

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
([compose-ui-addon/Code.js](https://github.com/hdg-utd/gmail-addon-tutorial/blob/master/2.%20compose-ui-addon/Code.js)
 has comments explaining every section of code.
5. Use `clasp push` to push the code to Google. (Make sure you have finished all steps of 
[clasp setup](https://github.com/google/clasp) for this to work).
6. Follow these steps from the `0a. basics` to deploy your project and test it in Gmail. 

## Concepts used in this project
* Cards - [Google Docmentation](https://developers.google.com/gmail/add-ons/concepts/cards)
| [My explanation]()
* Widget - [Google Docmentation](https://developers.google.com/gmail/add-ons/concepts/widgets)
| [My explanation]()
* UpdateDraftAction - [Google Documentation](https://developers.google.com/apps-script/reference/card-service/update-draft-action-response)
