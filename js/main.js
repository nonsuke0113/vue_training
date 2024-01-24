const app = Vue.createApp({
  data: () => ({
    basePrice: 100,
    message: 'Hello <span style="color:red">Vue.js!</span>',
    message7: 'Hello Vue.js!',
    km: 0,
    m: 0,
    firstName: '',
    lastName: '',
    fullName: '',
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' },
    ],
    number: 100,
    ok: true,
    newItem: '',
    todos: []
  }),
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
      },
      deep: true
    },
    message7: function(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    },
    km: function(value) {
      console.log(value)
      this.km = value
      this.m = value * 1000
    },
    m: function(value) {
      console.log(value)
      this.km = value / 1000
      this.m = value
    },
    firstName: function(value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName: function(value) {
      this.fullName = this.firstName + ' ' + value
    }
  },
  computed: {
    fullNameComputed: function() {
      return this.firstName + ' ' + this.lastName
    },
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
    onClick: function() {
      this.colors[1].name = 'White'
    },
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