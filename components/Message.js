const Message = {
    props: {
        username: String,
        message: String,
        date: String,
      },
    data() {
      return {
        id: Date.now(),
      };
    },
    methods: {
      formatDateOfMessage(){
        let dayFormat = new Intl.DateTimeFormat("fr" , {
          weekday: "short",
        });
        let timeFormat = new Intl.DateTimeFormat("fr" , {
            timeStyle: "short",
        });
        const day = dayFormat.format(Date.now()) + " " + timeFormat.format(Date.now());
        return day;
      }
    },
    template: `
        <li :id="id">
            <span>{{ formatDateOfMessage() }}</span> 
            <b> {{ username }}:</b>
            {{ message }}
        </li>
    `,
  };
  
  export default Message;