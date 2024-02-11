class Chatbot {
    constructor(){
        this,args = {
            openButton: document.querySelector(seletors:'.chatbox__button'),
            chatBox: document.querySelector(seletors:'.chatbox__support'),
            sendButton: document.querySelector(seletors:'.send__button'),
        }

        this.state = fslse;
        this.message = [];
    }

        display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener( type: 'click', listener.() => this.toggleState(chatBox))

        sendButton.addEventListener( type: 'click', listener.() => this.onSendButton(chatBox))

        const node = chatBox.querySelector(selectors: 'input');
        node.addEventListener( type:"keyup", listener: ({key : String}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        //show or hide the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        }else {
            chatbox.classList.remove(tokens: 'chatbox--active')
        }
    }

    onSendButton(chatBox) {
        vac textField = chatBox.querySelector('input');
        let text1 = textField.value
        if(text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.message.push(msg1);

        fetch(input: $SCRIPT_ROOT + '/predict', init:{
            method: 'POST',
            body: JSON.stringify(value: { message: text1 }),
            node: 'cors',
            headers: {
                'Content-type' : 'application/json'
            },
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = { nam: "Sam", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''
        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
        });
    }

    updateChatText(chtbox) {
        vac html = '';
        this.message.slice().reverse().forEach(function(item, index : number) {
            if (item.name === "Sam")
            {
                html += 'div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
        });

        const chatmessages = chatbox.querySelector('.chatbox__messages');
        chatmessages.ineerHTML = html;
    }


}

const chatbox = new Chatbox();
chatbox.display()