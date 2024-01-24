const app = Vue.createApp({
  data: () => ({
    message: 'Hello <span style="color:red">Vue.js!</span>',
    number: 100,
    ok: true,
    newItem: '',
    todos: []
  }),
  methods: {
    clickHandler: function() {
      this.message = this.message.split('').reverse().join('')
    },
    addItem: function() {
      console.log("Clicked!")
      if(this.newItem === '') return
      let todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    },
    deleteItem: function(index) {
      console.log("Delete!")
      console.log(index)
      this.todos.splice(index, 1)
    }
  }
})
app.mount('#app')