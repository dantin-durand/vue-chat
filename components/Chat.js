import Message from "./Message.js";
import Users from "./Users.js";

const Chat = {
    props: {
        usernameList:  Array,
    },
    data() {
        return {
            pseudo: faker.internet.userName(),
            inputValue: "",
            messages: [],
        };
    },
    components: {
        Message,
        Users,
    },
    methods: {
        addMessage() {
            if(this.inputValue.length < 3){
                return;
            }
            const newMessage = {
                id: Date.now(),
                username: this.pseudo,
                message: this.inputValue,
                date: "",
            }
            this.messages.push(newMessage);
            this.inputValue = "";
        }
    },
    template: `
        <div class="col s9">
            <ul :class="[Object.keys(this.messages).length > 0 ? 'message-container' : 'message-container nomessage']">
                <Message
                    v-for="message in messages"
                    :username="message.username"
                    :message="message.message"
                    :date="message.date"
                />
            </ul>
            <form class="input-chat" @submit.prevent="addMessage">
                <input 
                    type="text" 
                    name="message"
                    id="message"
                    placeholder="Message..."
                    v-model="this.inputValue"
                    v-focus
                />
                <button>Envoyer</button>
            </form>
        </div>
        <Users :usernameList="this.usernameList" :pseudo="this.pseudo"/>
    `,
  };
  
  export default Chat;