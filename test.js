(function (win) {
    _storage().clear();
    document.getElementById('call').addEventListener('click', function () {
        _storage('call', function(){
            alert('Call Function');
        });
    });
    document.getElementById('send_msg').addEventListener('click', function () {
        _storage('message', document.getElementById('message').value);
    });
}(window));