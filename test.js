(function (win) {
    _storage().clear();
    document.getElementById('send_msg').addEventListener('click', function () {
        _storage('message', document.getElementById('message').value);
    });

    document.getElementById('send_null').addEventListener('click', function () {
        _storage('message', null);
    });
    document.getElementById('send_number').addEventListener('click', function () {
        _storage('message', 123);
    });
    document.getElementById('send_bool').addEventListener('click', function () {
        _storage('message', true);
    });
    document.getElementById('send_array').addEventListener('click', function () {
        _storage('message', [1, 2, 3, 4, 5]);
    });
    document.getElementById('send_date').addEventListener('click', function () {
        _storage('message', new Date);
    });
    document.getElementById('send_fn').addEventListener('click', function () {
        _storage('message', function () {
            alert('Send Function');
        });
    });
    var storage = _storage();
    storage
        .set('test', [1, 2, 3])
        .set('mydate', new Date);

}(window));