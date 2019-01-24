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
