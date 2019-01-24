/*
 * The documentation on Google's website doesn't state how to 
 * run the project. We are going to revisit contextual triggers 
 * in this project.
 *
 * This project also revisits the Card object and demonstrates 
 * how we can make our cards interactive in the add on. In this 
 * demo we are going to see how we can display notifications to 
 * the user.
 */

/*
 * In this example we create a notification which notifies the 
 * user when a button is clicked. In the real world the 
 * notification could represent completion of an action or 
 * indicate to the user that something failed.
 */
function interactiveCarder(event) {
  return [buildSimpleCard()];
}

/*
 * Here we first create a card and add a button to it.
 * We assign assign the method 'notifyUser' to trigger 
 * when the button is clicked.
 * 
 * We also see how method arguments are passed in Apps Script. 
 * We defined the button action separately from the button only 
 * to make the code more readable,
 */
function buildSimpleCard() {
  var buttonAction = CardService.newAction()
    .setFunctionName('notifyUser')
    .setParameters({'notifyText': 'Button clicked!'});
  
  var button = CardService.newTextButton()
    .setText('Notify')
    .setOnClickAction(buttonAction);
  
  return CardService.newCardBuilder()
  setHeader(CardService.newCardHeader().setTitle('Notifier'))
    .addSection(CardService.newCardSection()
      .addWidget(button))
  .build();
}

/*
 * This is the callback function for the button action defined 
 * above. It constructs a notication object and returns it. 
 * Go to the README to learn more about how notifications work 
 * in Gmail Add ons.
 *
 * The event object contains the arguments passed in the method 
 * above.
 */
function notifyUser(event) {
  var parameters = event.parameters;
  var notificationText = parameters['notifyText'];
  return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
      .setText(notificationText)
      .setType(CardService.NotificationType.INFO))
  .build();
}

