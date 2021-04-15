const App = {
  data: () => ({
    title: 'Заголовок',
    myHtml: '<h1>vue 2 lesson</h1>',
    person: {
       firstName: 'dmitrii',
       lastName: 'miasnikov'
     },
     items: [1,2,3,4,5,6]
  })
}

Vue.createApp(App).mount('#app')