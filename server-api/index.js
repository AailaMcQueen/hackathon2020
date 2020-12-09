const express = require("express");
const app = express();
const cors = require("cors")
const fileUpload = require("express-fileupload")
const PORT = process.env.PORT || 4000;
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))
app.post('/api/submitdata', function(req, res) {
    console.log(req.files);
    res.send("Success");
})

app.listen(PORT, function(){
    console.log(`Server started on ${PORT}`);
})