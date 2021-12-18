const express=require('express');
const linenotify=require('./tools/lineNotify');
const bodyParser = require('body-parser')
const app=express();
//app.use(bodyParser.text({type: '*/*'}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/message/',(req,res)=>{
    var line_message=req.body.line.msg;
    //console.log('line_message '+line_message);
    linenotify.line(line_message);
    res.send('line_message is '+line_message);
});

var server=app.listen(8080,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log('应用实例，访问地址为 http://%s:%s', host, port);
});