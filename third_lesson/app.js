const app = Vue.createApp({
  data() {
    return {
      title: 'title'
    }
  },
  template: `
    <div class="card center">
      <h1>{{ title }}</h1>
      <button class="btn" @click="title='changed title'">изменить</button>
    </div>
  `
})

app.mount('#app');