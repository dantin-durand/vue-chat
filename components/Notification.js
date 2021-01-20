const Notification = {
  mounted() {
    this.$bus.on("send-notification", (username) => {
      M.AutoInit();
      var toastHTML = `<span><b>${username}</b> a rejoint le chat !</span>`;
      M.toast({ html: toastHTML, classes: "rounded" });
    });
  },
  template: " ",
};

export default Notification;
