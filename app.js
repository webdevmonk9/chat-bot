document.getElementById('chatbot-send-button').onclick = function() {
     // get user input
     var input = document.getElementById('chatbot-input').value;
   
     // clear the input field
     document.getElementById('chatbot-input').value = '';
   
     // add the user's message to the conversation
     var conversation = document.getElementById('chatbot-conversation');
     var message = document.createElement('p');
     message.innerHTML = input;
     conversation.appendChild(message);
   
     // get the chatbot's response
     var response = getResponse(input);
   
     // add the chatbot's message to the conversation
     message = document.createElement('p');
     message.innerHTML = response;
     conversation.appendChild(message);
   
     // scroll the conversation to the bottom
     conversation.scrollTop = conversation.scrollHeight;
   };
   
   function getResponse(input) {
     // this is a very simple chatbot that only responds to a few specific inputs
     if (input.toLowerCase() == 'hi') {
       return 'Hello! How can I help you today?';
     } else if (input.toLowerCase() == 'what is your name?') {
       return 'My name is Chatbot.';
     } else if (input.toLowerCase() == 'how are you?') {
       return 'I am doing well, thank you. How are you?';
     } else {
       return 'I am not sure what you mean. Can you please rephrase your question?';
     }
   }
   