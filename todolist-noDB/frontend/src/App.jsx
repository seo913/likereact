import { useEffect, useState } from "react";
import TodoCard1 from "./components/TodoCard1";
import axios from "axios"; //http 통신 프론트엔드랑 백엔드랑 소통할때 쓰는거
import CreateToDo from "./components/CreateToDo";
function App() {
  const [toDoList,setToDoList] = useState();

  const getToDoList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/todo`);

      if(response.status !== 200){
        alert("요청을 불러오지 못했습니다.");
        return;
      }


      setToDoList(response.data); //궁금한부분 

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getToDoList();
  }, []);


  return (
    <div className='min-h-screen flex flex-col justify-start items-center pt-16 bg-purple-200'>
      <h1 className='text-4xl font-bold'>✨KING GOD TO DO LIST✨</h1>
      <div>
        <div className='mt-8 text-sm font-semibold'>
          내일 정전이 된다해도 나는 오늘 한 줄의 코드를 쓰겠다.
        </div>
        <div className='text-xs'>
          스스로 돌아봐서 에러가 없다면 천만인이 가로막아도 나는 컴파일하리라.
        </div>
      </div>
      <CreateToDo getToDoList={getToDoList}/>
      
      <ul  className='mt-16 flex flex-col w-1/2'>
        {toDoList && toDoList.map((v,i)=>{
          return <TodoCard1 key={i} title={v.title} isDone={v.isDone} index={i} getToDoList={getToDoList} />
        })}
      </ul>
    </div>
  );
}

export default App;
