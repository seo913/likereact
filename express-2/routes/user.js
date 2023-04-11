const express = require("express"); //임포트

const router = express.Router(); //라우터 불러오기

router.get("/:id", (req, res) => {
    //다이나믹라우팅
    res.send("특정 유저 조회");
});

router.post("/",(req,res)=>{
    res.send("회원 가입");
})

router.put("/:id",(req, res)=>{
    res.send("유저 정보 수정");
})

router.delete("/:id",(req,res)=>{
    res.send("유저 삭제");
})


module.exports = router; //익스포트
