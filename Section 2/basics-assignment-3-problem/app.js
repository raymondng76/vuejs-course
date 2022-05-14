const app = Vue.createApp({
    data() {
        return{
            counter: 0
        };
    },
    watch: {
        result() { // watching the result() in computed
            const that = this  // internal method cannot access
            setTimeout(function() {
                that.counter = 0
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.counter > 37) {
                return "Too much!"
            } else if (this.counter < 37) {
                return "Not there yet"
            } else {
                return this.counter
            }
        }
    },
    methods: {
        add(num){
            this.counter = this.counter + num;
        }
    }
})

app.mount('#assignment');
