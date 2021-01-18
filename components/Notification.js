const Notification = {
  mounted() {
    setInterval(() => {
      const username = faker.internet.userName();
        M.AutoInit();
        var toastHTML = `<span><b>${username}</b> a rejoint le chat !</span>`;
        M.toast({ html: toastHTML, classes: "rounded" });
        this.$emit("update-userlist", username);
    }, 2000);
  },
  template: " ",
};

export default Notification;
