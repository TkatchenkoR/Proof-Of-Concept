let app = Vue.createApp({
    data() {
        return {
          }

    },
    methods: {
    },
})

app.directive("subheading", (el, binding) => {
    el.style.color= 'grey';
  });

app.mount('#app')
