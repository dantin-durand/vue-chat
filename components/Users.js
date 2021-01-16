import User from "./User.js";

const Users = {
    props: {
        usernameList:  Array,
        pseudo: String,
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