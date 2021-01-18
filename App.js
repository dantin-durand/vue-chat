import Chat from "./components/Chat.js";
import Notification from "./components/Notification.js";

const app = Vue.createApp({
    data() {
      return {
          usernameList: [],
      };
    },
    components: {
      Chat,
      Notification,
    },
    methods: {
        updateUserList(newUser) {
          this.usernameList.push(newUser);
        }
    },
    provide() {
      return {
        usernameList: this.usernameList,
      }
    },
    template: `
    <div id="open-close-button" class="burger-sidebar">
        <i  class="material-icons">group</i>
    </div>

    <Chat />
    <Notification @update-userlist="updateUserList"/>
    `
  });
  
  app
  .directive("focus", {
    mounted(el) {
      el.focus();
    },
  })
  .mount("#app");