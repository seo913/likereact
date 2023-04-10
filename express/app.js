const express = require("express"); //임포트

//레스트 api작성방식

const app = express();

const port = 3010;

app.get('/', (req, res) => {//req = 프론트엔드가 보내는값 그 응닶이 res
    res.send("Hello, Express!");
}) ;

app.get('/abc', (req, res) => {//req = 프론트엔드가 보내는값 그 응닶이 res
    res.send("abc");
}) ;

app.post('/', (req, res) => {//req = 프론트엔드가 보내는값 그 응닶이 res
    res.send("This is Post Request");
}) ;

app.delete('/', (req, res) => {//req = 프론트엔드가 보내는값 그 응닶이 res
    res.send("This is delete Request");
}) ;

app.put('/', (req, res) => {//req = 프론트엔드가 보내는값 그 응닶이 res
    res.send("This is put Request");
}) ;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

