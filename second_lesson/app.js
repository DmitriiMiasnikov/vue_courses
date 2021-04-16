const App = {
  data: () => ({
    title: 'Заголовок',
    myHtml: '<h1>vue 2 lesson</h1>',
    person: {
       firstName: 'dmitrii',
       lastName: 'miasnikov'
     },
     items: [1,2,3,4,5,6]
  }),
  methods: {
    addItem(event) {
      this.items.unshift(this.$refs.inputRef.value)
      this.$refs.inputRef.value = '';

    },
    remove(index) {
      this.items.splice(index, 1)
    },
    log(item) {
      console.log(item);
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(el => el % 2 === 0)
    }
  }
}

Vue.createApp(App).mount('#app')