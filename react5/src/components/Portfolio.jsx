    import PortfolioCard from "./PortfolioCard";
    import portJson from "../portJson.json";
    import cal from "../cal.png";
    //제이슨에서 호출하기

    function Portfolio () {
        return(
            <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
                {portJson.map((v,i) => {
                    return<PortfolioCard key={i} projectImg={v.projectImg} projectTitle={v.projectTitle} projectex={v.projectex} />
            })}
            



            
            </ul>

        );

    }
    export default Portfolio;
