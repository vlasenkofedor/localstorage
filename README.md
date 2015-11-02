# localstorage

Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.gnu.org/licenses/gpl.html) licenses

Work with localstorage, a subscription to localstorage events, storage of functions, array of object in localstorage, the subscription interface that allows to transfer parameters to followers (open tabs in browser)

Pабота с localstorage, подписка на события localstorage, хранение функций, массивов иобъектов в localstorage, интерфейс подписки, что позволяет передать параметры подписчикам (открытым вкладкам браузера)

Задание значений | Set value
```javascript
_storage('name', 'Ivan');
_storage('test', [1, 2, 3]);
_storage('test', new Date);
_storage('test', function(){
    alert('Hi');
};
```
[Download all example](https://github.com/Poznakomlus/localstorage/archive/master.zip)