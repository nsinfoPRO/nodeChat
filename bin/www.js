var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var port=process.env.OPENSHIFT_NODEJS_PORT || 5000;   //ako heroku ne dodeli port onda uzmi 5000 kao port
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
app.set('port',port);
app.get('/',function (req,res) {
    res.sendFile(__dirname+'\\index2.html');
    
});

io.on('connection',function (socket) {
    
    socket.on('dogadjaj Slanja Poruke',function (msg) {
       io.emit('dogadjaj Slanja Poruke',msg);    //salje svima cak i onome ko je poslao 
         
    });
    
});

http.listen(port,server_ip_address,function () {
    console.log('server na portu 3000');
});