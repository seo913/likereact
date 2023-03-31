import { useState } from "react";

function App() {
  // let noUseState = 0;
  // noUseState = 1;
  // noUseState = noUseState +1;
  // noUseState +=1;
  // noUseState ++;
  const [count, setCount] = useState(0);
  //카운트는 변수,업데이트 할때 셋카운트 소괄호값은 선언한 초기값

  const onClickAdd = () => {
    setCount(count + 1); // 현재값에 클릭할때마다 플러스 1
  };
  const onClickSubtract = () => {
    // setCount((prev)) => {  화살표 함수형태로 업데이트 해야할때가 있음
    //   return prev -1;
    // }


    if(count <= 0){
      alert('count의 값이 0보다 작을 수 없습니다!');
      return;
    }
    setCount(count - 1); // 현재값에 클릭할때마다 마이너스 1

  };

  return (<div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
    <div>{count}</div>
    <button className="bg-green-300 w-12 h-12 rounded-full" onClick={onClickAdd}>+</button>

    <button className="bg-blue-300 w-12 h-12 rounded-full mt-4" onClick={onClickSubtract}>-</button>

  </div>

  );


}

export default App;
