const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    setName(name, lastName) {
      this.name = name.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Sub!');
    },
    confirmedInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
