const App = {
  data: () => ({
    title: 'Заголовок',
    myHtml: '<h1>vue 2 lesson</h1>'
  })
}

Vue.createApp(App).mount('#app')