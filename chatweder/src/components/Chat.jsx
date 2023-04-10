import axios from "axios";
import { useState } from "react";

function Chat(){

    const [question, setQuestion] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false); //검색 로딩상태 체크하기위해

    const onSubmitChat = async (e) =>{ //백엔드랑 통신하는 함수 
        try{        
            e.preventDefault();

            if(isLoading){
                alert('검색중입니다...');
                return;
            }

            if(!question){
                alert('질문을 입력해주세요!');
                return;
            }

            //로딩중 트루
            setIsLoading(true);
            setContent("");
            const response = await axios.post("https://holy-fire-2749.fly.dev/chat", { 
                question,      //포스트맨 body내용 
            },
            {
                headers: {     //포스트맨
                    Authorization: "Bearer BLOCKCHAINSCHOOL3"
                }
            });
            
            if(response.status !==200){
                alert("오류가 발생했습니다.");
                setIsLoading(false);

                return;
            }

            console.log(response);
            setContent(response.data.choices[0].message.content);

            //로딩중 펄스
            setIsLoading(false);
        }catch(error){
            console.error(error);

            //로딩중 펄스
            setIsLoading(false);

        }
    };

    return(
        <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
            <form onSubmit={onSubmitChat}>
                <input className="text-black mb-5" 
                type="text" 
                value={question} 
                onChange={(e)=> setQuestion(e.target.value)} />
                <input type="submit" value="검 색"/>
            </form>
            {content && <div className="mt4 px-16">{content}</div>}
        </div>
    )
}
export default Chat;