import axios from "axios";
import { useState } from "react";

function CreateToDo ({getToDoList}) {
    const [title,setTitle] =useState("");
    
    const onSubmitCreateToDo = async (e) => {
        try {   //비동기공식
            e.preventDefault();
            
            if(!title){
                alert("타이틀을 입력해주세요!");
                return;
            }

            const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/todo`,
            {
                title,
                desc:`${title} 아자아자 화이팅`,
            }
            );

            if(response.status !== 200){
                alert("요청을 불러오지 못했습니다.");
                return;
            }
            getToDoList(); //서버에 있는걸로 데이터를 갱신
            setTitle("");
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <>
        <form className='flex mt-2' onSubmit={onSubmitCreateToDo}>
        <input
            className='grow border-2 border-purple-300 rounded-lg focus:outline-purple-500 px-2 py-2 text-lg'
            type='text'
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            />
            <input
            className='ml-4 px-2 py-1 bg-purple-300 hover:bg-purple-500 rounded-lg text-white'
            type='submit'
            value='추가'
            />
        </form>
        </>
    )
}
export default CreateToDo;