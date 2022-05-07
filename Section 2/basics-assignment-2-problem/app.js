const app = Vue.createApp({
    data() {
        return {
            paragraph1: '',
            paragraph2: '',
            confirmedParagraph2: '',
        }
    },
    methods: {
        showAlert() {
            alert("ALERT!!!")
        },
        showKeyDownOutput(event) {
            this.paragraph1 = event.target.value;
        },
        recordKeyDownOutput(event) {
            this.paragraph2 = event.target.value;
        },
        showParagraph2OnEnter() {
            this.confirmedParagraph2 = this.paragraph2;
        }
    }
});

app.mount('#assignment')