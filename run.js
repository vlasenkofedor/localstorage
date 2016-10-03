/**
 * LocalStorage, run.js
 *
 * Copyright (c) 2015 Vlasenko Fedor (VlasenkoFedor@mail.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 0.0.2
 */
var http = require('http'),
    opn = require('opn'),
    fs = require('fs');

http.createServer(function (req, res) {
    if ('/recipient' === req.url || '/sender' === req.url) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        fs.createReadStream(req.url.substr(1) + '.html').pipe(res);
    } else if('/storage.js' === req.url || '/test.js' === req.url){
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.createReadStream(req.url.substr(1)).pipe(res);
    }else {
        res.writeHead(404);
        res.end();
    }
}).listen(7777, "127.0.0.1", function () {
    console.log('server http://127.0.0.1:7777/ started');
    opn('http://127.0.0.1:7777/recipient');
    opn('http://127.0.0.1:7777/sender');
});