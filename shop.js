let app = Vue.createApp({
    data() {
        return {
            items: [
                "T-Shirts",
                "Coffee-Mugs",
                "Equipement",
              ],
              add: "",
          }

    },
    methods: {
        addItem(e) {
            e.preventDefault();
            this.items.push(this.add);
          },
          remove(item) {
            this.items = this.items.filter((e) => e !== item);
          },
    },
})




app.mount('#app')
