
new Vue({
  el: '#app',
  data: {
    firstNumber:0.1,
    secondNumber:0.2,
  },
  methods: {
    inputChanged: function(e) {
      // Приравниваем значение id инпута(firstNumber или secondNumber)
      //  к заранее приведённой(функцией parseFloat) строке к числу. 
        this[e.target.id] = parseFloat(e.target.value)
    }
  },
  computed: {
    result: function(){
      //Возвращаем результат сложения первой и второй формы,
      // а также форматируем полученное число используя запись с 
      //фиксированной запятой и одной цифрой после неё.
      return (this.firstNumber + this.secondNumber).toFixed(1)
    }
  }
})


