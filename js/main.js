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
    items: null,
    keyword: '',
    message: '',
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' },
    ],
    number: 100,
    ok: true,
    newItem: '',
    todos: [],
    isLarge: true,
    hasError: true,
    // largeClass: 'large',
    largeClass: {
      'large': true,
      'bg-gray': true
    },
    // dangerClass: 'text-danger',
    dangerClass: {
      'text-danger': true
    },
    isLarge: false,
    classObject: {
      large: true,
      'text-danger': true
    },
    color: 'bluea',
    fontSize: 36,
    styleObject: {
      color: 'blue',
      fontSize: '48px'
    },
    toggle: true,
    counter: 0,
    message11: ''
  }),
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      console.log(newKeyword)
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    },
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
  mounted: function() {
    // this.keyword = 'JavaScript'
    // this.getAnswer()
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
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
    clickHandler11_2: function($event, message) {
      this.message11 = new Date().toLocaleTimeString()
    },
    clickHandler11: function($event, message) {
      console.log(message)
      console.log($event)
      this.message = message
      this.counter++
    },
    getAnswer: function() {
      if(this.keyword === '') {
        console.log('karamoji')
        this.items = null
        return
      }

      this.message = 'Loading...'

      const vm = this
      const params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
        .then((res) => {
          console.log(res)
          vm.items = res.data
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          vm.message = ''
        }
      )
    },
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