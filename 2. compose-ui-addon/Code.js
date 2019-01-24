/*
 * As we defined in the manifest, the method 'updateDraft' is 
 * the method that is triggered when the compose view is called.
 *
 * In simple terms compose view is the view for the email draft 
 * editor. A compose trigger is only called when a compose view 
 * is called. The add on appears along with the edit fetaures 
 * in the draft editor. Look at the README for screenshot 
 * example.
 *
 * Compose trigger takes into the context the email you are 
 * currently composing in Gmail.
 */

/* 
 * In this method we get access to the current draft we are 
 * editing. In this project we are going to insert the string 
 * 'hello world' to the draft using the add on. In real world 
 * this add on could help you select which email signature to 
 * add to your email.
 */

function updateDraft(event) {
  /* This is a passthorugh method to call the method that will 
   * create the card which does all the magic in this add on.
   * Remember what we said in the basics, Cards is where all the 
   * magic happens in add ons.
   */
  return [buildButtonComposeCard()];
}

function buildButtonComposeCard() {
  /* Here we first createa a new Card,
  * add a header,
  * add a section with a widget,
  * the widget contains a button, which when clicked calls
  * the insertHelloWorld method.
  * 'insertHelloWorld' adds 'hjello world' to the draft
  * Read the README to learn more about how onClickAction 
  * and DraftAction works
  */
  return CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Update Draft'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextButton()
        .setText('Draft it up!')
        .setOnClickAction(CardService.newAction()
          .setFunctionName('insertHelloWorld'))))
  .build();
}

function insertHelloWorld(event) {
  /* This method is the action that is fired when the user 
   * clicks the button. We use a draft response builder action 
   * to build our object that we want to insert in the draft.
   * Read the README to find out how this actually works.
   */
  var draftText = 'hello world';
  return CardService.newUpdateDraftActionResponseBuilder()
    .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
      .addUpdateContent(draftText, 
        CardService.ContentType.TEXT)
      .setUpdateType(
        CardService.UpdateDraftBodyType.IN_PLACE_INSERT))
  .build();
}
