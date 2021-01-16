const Notification = {
    props: {
        username: {
            type: String,
            default: '',
        },
    },
    mounted: function() {
        if(this.username !== '') {
            M.AutoInit();
            var toastHTML = `<span><b>${this.username}</b> a rejoint le chat !</span>`;
            M.toast({html: toastHTML, classes: 'rounded'});
        }
    },
  };
  
  export default Notification;