 
 //호출한거 코딩하기
const PortfolioCard = (props) => {
    return(
        <li className="bg-purple-100 w-60 h-72 rounded-xl">
        <div className={`bg-yellow-100 w-full h-1/2 rounded-t-xl`}>
            {props.projectImg.map((v,i)=> {    //이미지경로
                return <div>{v}</div>; 
            })}
        </div>

        <div className={`text-xl font-bold mt-2 mx-2`}>
            {props.projectTitle.map((v, i) =>{  //제목
                return <div>{v}</div>
            })}
        </div>

        <div className={`mt-2 mx-2`}>
            {props.projectex.map((v,i)=>{  //설명
                return <div>{v}</div>
            })}
        </div>
        </li>
        
    );

    ;
}

export default PortfolioCard;
