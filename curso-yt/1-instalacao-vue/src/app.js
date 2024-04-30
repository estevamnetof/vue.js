const MyNameApp = {
    data() {
        return {
            name: 'Estevam',
            age: 23
        }
    }
}

Vue.createApp(MyNameApp).mount('#app')