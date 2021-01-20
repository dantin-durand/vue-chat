import User from "./User.js";

const Users = {
  props: {
    pseudo: String,
  },
  data() {
    return {
      usernameList: [],
    };
  },
  mounted() {
    setInterval(() => {
      const username = faker.internet.userName();
      this.usernameList.push(username);
      this.$bus.emit("send-notification", username);
    }, 2000);
  },
  components: {
    User,
  },
  template: `
        <div id="sidebar" class="col s3 sidebar">
            <div class="user-list">
                <p class="online-title">EN LIGNE - <b>{{ Object.keys(this.usernameList).length }}</b></p>
                <ul>
                    <User v-for="user in usernameList" :username="user" />
                </ul>
            </div>
            <div class="personal-pseudo">
                <p>{{ pseudo }}</p>
            </div>
        </div>
    `,
};

export default Users;
