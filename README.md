# localstorage

Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.gnu.org/licenses/gpl.html) licenses

Work with localstorage, a subscription to localstorage events, storage of functions, array of object in localstorage, the subscription interface that allows to transfer parameters to followers (open tabs in browser), transfer and execute function.

Pабота с localstorage, подписка на события localstorage, хранение функций, массивов и объектов в localstorage, интерфейс подписки, позволяющий передать параметры подписчикам (открытым вкладкам браузера), передать и выполнить в них переданные функции.

**Использование** | **Use**

git clone https://github.com/Poznakomlus/localstorage.git

cd localstorage

npm install

node run.js

```html
<script src="storage.js"></script>
<script>alert(_storage('name'));</script>
```

**Получение значений** | **Get value**
```javascript
console.log(_storage('name')); // Ivan
console.dir(_storage('test')); // [1, 2, 3] type: [object Array]
console.dir(_storage('mydate')); // type: [object Date];
console.dir(_storage('fn')); // type: [object Function]
console.dir(_storage('obj')); // type: [object Object]
var storage = _storage();
alert(storage.get('name'));
_storage('fn')(); // call function
storage.get('fn')(); // call function
```

**Задание значений** | **Set value**
```javascript
_storage('name', 'Ivan');
_storage('test', [1, 2, 3]);
_storage('obj', {van: 1, two: 2});
_storage('mydate', new Date);
_storage('fn', function(){
    alert('Hi');
};
var storage = _storage();
storage.set('name', 'Ivan');
storage
    .set('test', [1, 2, 3])
    .set('mydate', new Date)
    .set('obj', {van: 1, two: 2});
```

**Удаление значений** | **Remove value**
```javascript
var storage = _storage();
storage.remove('name');
```

**Очистка хранилища** | **Clear storage**
```javascript
var storage = _storage();
storage.clear();
```

**Подписаться на изменение значения** | **Subscribe on change value**
```javascript
_storage().subscribe('message', function (value, e) {
    // value - new value
    // e - event object
});

var storage = _storage();
storage.subscribe('message', function (value, e) {
    // value - new value
    // e - event object
}).subscribe('fn', function (fn, e) {
    fn(); //call function
   // fn - new value
   // e - event object
});
```

[Download all example](https://github.com/Poznakomlus/localstorage/archive/main.zip)
