/*
 * As we defined in the manifest, the method 'getContextualAddOn' is the method triggered
 * when the contextual trigger is called.
 *
 * Contextual trigger is only fired when the add on is open and an email is open.
 * Opening an email is very important otherwise the add on will prompt you to 
 * open an email.
 *
 * Contextual trigger take into the context the email that is currently open
 * before running any logic.
 */

/*
 * In this method we get access to the current email. This method will extract the 
 * subject of the email and the sender of the email and display it in the add on.
 * Then we add all this information to a card and build it.
 * 
 * NOTE: Please go to '0a. basics' to learn more about Cards and how a gmail add on
 * is built and how it works.
 */

function getContextualAddOn(event) {
  // We have access to the event object which represents the email that is
  // currently open in Gmail.


  // Next two lines activate the temporary Gmaill add-on scopes.
  // This allows us to access the message metadata and read the message.
  var accessToken = e.messageMetadata.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);

  // We use the event object to get the messageId which allows us to access the rest
  // of the email.
  var messsageId = e.messageMetadata.messageId;
  // We now retrieve the email and get the subject, sender, body, messageDate
  var message = GmailApp.getMessageById(messageId);
  var subject = message.getSubject();
  var sender = message.getFrom();
  var body = message.getPlainBody();
  var messageDate = message.getDate();

  // We now create a simple card with two widgets and display result on the add-on
  var exampleCard = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('ExampleCard'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newKeyVal()
        .setTopLabel('Subject')
        .setContent(subject))
      .addWidget(CardService.newKeyValue()
        .setTopLabel('From')
        .setContent(sender)))
    .build();
  return[exampleCard];
}
