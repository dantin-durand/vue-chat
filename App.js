import Chat from "./components/Chat.js";
import Notification from "./components/Notification.js";

const app = Vue.createApp({
    data() {
      return {
          latestUsername: faker.internet.userName(),
          usernameList: [],
      };
    },
    components: {
      Chat,
      Notification,
    },
    methods: {
      startInterval: function () { 
        setInterval(() => {
          const username = faker.internet.userName();
          this.latestUsername = username;
          this.usernameList.push(username);

        }, 2000);
      }
    },
    mounted: function() {
      this.startInterval();
    },
    template: `
    <div id="open-close-button" class="burger-sidebar">
        <i  class="material-icons">group</i>
    </div>

    <Chat :usernameList="this.usernameList"/>
    <Notification v-for="username in usernameList" :username="username"/>
    `
  });
  
  app
  .directive("focus", {
    mounted(el) {
      el.focus();
    },
  })
  .mount("#app");