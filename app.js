const express=require('express');
const linenotify=require('./tools/lineNotify');
const bodyParser = require('body-parser')
const app=express();
app.use(express.static("public"))
//app.use(bodyParser.text({type: '*/*'}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>");
  });
  
app.post('/message/',(req,res)=>{
    var line_message=req.body.line.msg;
    //console.log('line_message '+line_message);
    linenotify.line(line_message);
    res.send('line_message is '+line_message);
});

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));