const app = Vue.createApp({
    data() {
        return {
            name: 'Ray',
            age: 40,
            fav_Num: Math.random(),
            img_link: 'https://vuejs.org/images/logo.png',
        }
    },
    methods: {
        age_plus_five() {
            return this.age + 5;
        }
    }
});

app.mount('#assignment');
