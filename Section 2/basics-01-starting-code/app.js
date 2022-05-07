const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course',
            // courseGoalB: '<h2>Finish course and master</h2>',
            courseGoalB: 'Finish course and master',
            vueLink: 'https://vuejs.org',
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');


