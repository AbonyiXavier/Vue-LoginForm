new Vue({
  el: "#app",

  data() {
    return {
      email: "",
      password: "",
      displayEmail: "",
      displayPassword: "",
      show: false,
      ended: false
    };
  },
  methods: {
    submit() {
      // alert(123);
      if (this.email && this.password) {
        this.displayEmail = this.email;
        this.displayPassword = this.password;
        this.show = true;
        this.email = "";
        this.password = "";
      } else {
        this.email = "Input your email";
        this.password = "Input your password";
      }
    },

    reset() {
      (this.email = ""),
        (this.password = ""),
        (this.displayEmail = ""),
        (this.displayPassword = ""),
        (this.show = false);
      this.ended = false;
    },

    clear() {
      (this.displayEmail = ""),
        (this.displayPassword = ""),
        (this.ended = false);
    }
  }
});
