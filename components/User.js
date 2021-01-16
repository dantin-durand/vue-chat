const User = {
    props: {
      username: String,
    },
    data() {
      return {
        id: Date.now(),
      };
    },
    template: `<li :id="id">{{username}}</li>`,
  };
  
  export default User;