const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      surname: 'lastname',
      fullname: ''
    };
  },
  watch: {
    name(value) {
      if (value === ""){
        this.fullname = "";
      }
      else{
        this.fullname = value + ' ' + this.surname;
      }
    }
  },
  computed: {
    // fullname() {
    //   console.log("Computed fullname");
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + this.surname;
    // },
  },
  methods: {
    outputFullName() {
      console.log("Calling outputFullname()")
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.surname;
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
