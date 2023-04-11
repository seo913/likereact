const express = require("express"); //임포트
const userRouter = require("./routes/user"); //유저라우트 임포트
const tweetRouter = require("./routes/tweet") //트윗라우터 임포트
const app = express();

const port = 3010;

app.use("/user", userRouter); //미들웨어 
app.use("/tweet", tweetRouter);

//함수는 기본경로, 그리고 처리해야할 내용
app.get("/", (req,res)=>{ // 조회
    res.send("Hello, Express");
}) ;

app.listen(port, () => {
    console.log(`Sever listening on prt: ${port} 🚀🚀🚀`);
})




















// app.get("/user/:id", (req,res)=>{ // 유저정보조회
//     res.send("유저 정보 조회");
// }) ;

// app.get("/todos", (req,res)=>{ // 투두리스트조회
//     res.send("투두리스트 조회");
// }) ;

// app.post("/",  (req,res)=>{ //생성
//     res.send("Post");
// }) ;

// app.put("/", (req,res)=>{ // 전부다 업데이트
//     res.send("Put");
// }) ;

// app.delete("/", (req,res)=>{ // 삭제
//     res.send("Delete");
// }) ;