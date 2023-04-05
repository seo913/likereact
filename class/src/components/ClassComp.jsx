import { Component } from "react";

class ClassComp extends Component {
    state = {
        count : 0,
    };
    
    setCount(num) {
        this.State({
            count: num,
        })
    }


    

    render () {
        return <div>
            {this.state.count}
            <button onClick={() => this.setCount(this.state.count + 1)}> + </button>
            </div>//this 는 이 클래스 전체의 디스 안에 스테이트 안에 카운트 본인자신을 지칭하는데 글로벌이라 어디서 자기자신인지모름
    }
}

export default ClassComp;

