/**
 * LocalStorage, test.js
 *
 * Copyright (c) 2015 Vlasenko Fedor (VlasenkoFedor@mail.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 0.0.2
 */
;(function () {
    _storage().clear();
    function el(id) {
        return document.getElementById(id);
    }

    el('send_msg').addEventListener('click', function () {
        _storage('message', el('message').value);
    });

    el('send_null').addEventListener('click', function () {
        _storage('message', null);
    });
    el('send_number').addEventListener('click', function () {
        _storage('message', 123);
    });
    el('send_bool').addEventListener('click', function () {
        _storage('message', true);
    });
    el('send_array').addEventListener('click', function () {
        _storage('message', [1, 2, 3, 4, 5]);
    });
    el('send_obj').addEventListener('click', function () {
        _storage('message', {van: 1, two: 2});
    });
    el('send_date').addEventListener('click', function () {
        _storage('message', new Date);
    });
    el('send_fn').addEventListener('click', function () {
        _storage('message', function () {
            alert('Send Function');
        });
    });
    var storage = _storage();

    storage
        .set('test', [1, 2, 3])
        .set('mydate', new Date);

}());