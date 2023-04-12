import axios from "axios";

// import { useState } from 'react';
    function TodoCard1({title, isDone, index, getToDoList}) {
    // const [isDone, setIsDone] = useState(false); // 투두리스트 네모 체크

    const onClickToggle = async () => {
        // setIsDone(!isDone); //기존에 있는 값을 돌림 지금 펄스니깐 트루 토글만들땐 이렇게만 사용하면 됌
        try {
            const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/todo/done/${index}`);
            console.log(response);

            if(response.status !== 200){
                alert("요청을 불러오지 못했습니다.");
                return;
            }
            getToDoList(); //서버에 있는걸로 데이터를 갱신
            // setTitle();
        } catch (error) {
            console.error(error);
        }
    }   
    
    const onClickDelete = async () =>{
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/todo/${index}`);
            if (response.status !== 200) {
                alert("요청을 불러오지 못했습니다.");
                return;
            }
            getToDoList();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
        {isDone ? (
            <li className='flex my-4' onClick={onClickToggle}>
            <div className=' relative'>
                <div className='border-4  border-purple-400 w-8 h-8 rounded-xl'></div>
                <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 
                border-white bg-pink-400 w-8 h-8 scale-75 rounded-xl'>
                </div>
            </div>
            <div className='text-2xl ml-4'>{title}</div>
            <button onClick={onClickDelete}>삭제</button>
            </li>
        ) : (
            <li className='flex my-4' onClick={onClickToggle}> 
            <div className='border-4  border-purple-400 w-8 h-8 rounded-xl'></div>
            <div className='text-2xl ml-4'>{title}</div>
            <button onClick={onClickDelete}>삭제</button>
            </li>
        )
        }
        </>
    );
    }
export default TodoCard1;
