const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static(__dirname + '/public'));

app.post('/api/submitData', function(req, res) {
    console.log(req.file);
})

app.listen(PORT, function(){
    console.log(`Server started on ${PORT}`);
})