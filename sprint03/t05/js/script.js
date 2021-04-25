class Calculator { //объявляем класс Calculator для создания экземпляров класса
  init(x) { //объявляем метод класса Calculator - init, для инициализации значение в свойстве result, свойству result присваивается значение переданное в аргументе x при вызове метода
    this.result = x; //объявляем свойство класса result (this обращается к будущему экземпляру класса, в нашем случае this будет равно объекту clac)
    return this; //возвращаем объект для того чтобы работал chaining, и можно было вызывать методы по цепчке через точку
  }
  add(x) { //объявляем метод класса add для произведения операции сложения над свойством класса result - где хранится текущий результат, и аргументом метода x в который будет передано число при вызове
    this.result = this.result + x; //выполняем сложение значения записанного в свойстве result и значение переданного в аргументе метода x при вызове
    return this; //возвращаем объект для того чтобы работал chaining
  }
  sub(x) { //объявляем метод класса sub для произведения операции вычитания над свойством класса result
    this.result = this.result - x; //в свойство result записывается результат вычитания из предыдущего значение result и переданного при вызове метода значения x
    return this; //возвращаем объект для того чтобы работал chaining
  }
  mul(x) { //объявляем метод класса sub для произведения операции умножения над свойством класса result
    this.result = this.result * x; //в свойство result записывается результат умножения предыдущего значение result на переданное при вызове метода значения x
    return this; //возвращаем объект для того чтобы работал chaining
  }
  div(x) { //объявляем метод класса sub для произведения операции вычитания над свойством класса result
    this.result = this.result / x; //в свойство result записывается результат деления предыдущего значение result и переданного при вызове метода значения x
    return this; //возвращаем объект для того чтобы работал chaining
  }
  alert() { //объявляем метод класса alert для выведения текущего результата с задержкой в 5 секунд
    let that = this; //объявляем переменную that и присваиваем ей текущее значение контекста this (значение объекта перед точкой при вызове метода вне класса)
    setTimeout(function(){ alert(that.result); }, 5000); //так как метод setTimeout теряет контекст выполнения медота внутри его функции коллбека (function(){ alert(that.result); }) обращаемся в свойству класса result не из this, а из контектса, сохраненного в переменной that
  }

}

const calc = new Calculator();  //объявляем переменную calc и записываем в нее экземпляр (объект) класса Calculator, при помощи вызова конструктора new Calculator();

console.log( //выводим в консоль
  calc.init(2) //обращаемся к объекту calc и вызываем его метод init определенный в классе Calculator, передаем ему значение 2 которое записывается в свойство result и присваивается объекту calc, метод возвращает this, this в данный момент равен объекту перед точкой - calc, что позволяет вызвать следующий метод через точку
      .add(2) //вызываем метод add, который обращается к текущему значению свойства result и записывает в него результат сложения предыдущего значения result (2) и 2, записывает в result новое значение (4) возвращает this
      .mul(3) //вызываем mul класса, передаем туда 3 вместо x, выполняем операцию умножения на текущим result на 3 и записываем результат в result, возвращаем this
      .div(4) //вызываем div, передаем туда 4 вместо x, присваиваем result результат деления текущего значения result на 4, возвращаем this
      .sub(2) //производим вычитание, возвращаем this
      .result //обращаемся к свойству объекта calc.result, и выводим значение в нем, оно доступно поскольку метод sub возвращает this, this равен calc
);