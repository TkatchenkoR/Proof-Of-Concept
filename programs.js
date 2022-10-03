let app = Vue.createApp({
    data() {
        return {
            selected: "",
            disabled: false,
          }

    },
    methods: {
        say(message){
            alert(message)
        },
        warnDisabled() {
            this.disabled = true
            setTimeout(() => {
                this.disabled = false
              }, 1500)
        },
    },
})




app.mount('#app')
