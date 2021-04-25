/* Код ниже выполняет копирование объекта (shallow copy) переданного в аргумент функции obj при вызове функции.
   Так как при простом присваивании (const copy = obj) мы присвоим не новый объект с такими же значениями, а
   ссылку на объект obj, и при изменении свойств и методов в copy, свойства в obj так же будут меняться, это приводит
   к сложно отслеживаемым багам и является популярным вопросом на собеседованиях, на понимание происходящего.
*/

function copyObj(obj){ //объявляем функцию copyObj c одним аргументом - obj, в которую передаем объект для создания из него копии
    const copy = Object.assign({}, obj); //объявляем константу copy и записываем в нее значение нового объекта созданного на основе obj, при помощи метода assign глобального объекта Object (первым аргументом передаем пустой объкет {} в который будут записанны свойства из obj)
    return copy; //возвращаем переменную copy в которой хранится копия объекта obj
}