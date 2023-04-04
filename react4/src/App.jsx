import { useState } from "react";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
  const checkNum =(n1, n2) => {
    if (n1 === "" || n2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(n1) || isNaN(n2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
  }
  const onChangeNum1 = (e) => {
    setNum1(e.target.value);

  }; 

  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  const onClickAdd = () => {
    setResult(parseInt(num1)+parseInt(num2));
    checkNum(num1, num2);

    }
  

  const onClickSubtract = () => {
    setResult(parseInt(num1)-parseInt(num2));
    checkNum(num1, num2);

    }
  
  const onClickMultiply = () => {
    setResult(parseInt(num1)*parseInt(num2));
    checkNum(num1, num2);

  }
  const onClickDivide = () => {
    checkNum(num1, num2);
  }

  return (
    <div className='bg-red-100 min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold mb-4'>Awesome한 계산기(로 바뀔예정)</h1>
      <div className='text-3xl font-black mb-4'>{result}</div>
      <div>
        <input className="border-2 border-yellow-400 focus:outline-none focus:border-purple-400 rounded-lg px-4 text-xl ml-4 " 
        type="text"
        value={num1}
        onChange={onChangeNum1}
        />
        <input className="border-2 border-yellow-400 focus:outline-none focus:border-purple-400 rounded-lg px-4 text-xl ml-4 " 
        type="text" 
        value={num2}
        onChange={onChangeNum2}
        />
      </div>
      <div>
        <button className="border-2 px-2 py-2 rounded-lg border-gray-500 text-gray-500 ml-4 mt-4" onClick={onClickAdd}>Add</button>
        <button className="border-2 px-2 py-2 rounded-lg border-blue-400 text-blue-400 ml-4 mt-4" onClick={onClickSubtract}>Subtract</button>
        <button className="border-2 px-2 py-2 rounded-lg border-green-400 text-green-400 ml-4 mt-4"onClick={onClickMultiply}>Multiply</button>
        <button className="border-2 px-2 py-2 rounded-lg border-pink-500 text-pink-500 ml-4 mt-4" onClick={onClickDivide}>Divide</button>

      </div>
    </div>
  );
  }

export default App;
