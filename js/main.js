const app = Vue.createApp({
  data: () => ({
    basePrice: 100,
    message: 'Hello <span style="color:red">Vue.js!</span>',
    number: 100,
    ok: true,
    newItem: '',
    todos: []
  }),
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function() {
        return this.basePrice * 1.1
      },
      set: function(value) {
        this.basePrice = value / 1.1
      }
    },
    computedNumber: function() {
      return Math.random()
    }
  },
  methods: {
    methodsNumber: function() {
      return Math.random()
    },
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    },
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