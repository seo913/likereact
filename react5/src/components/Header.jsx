import { Link } from "react-router-dom";

const Header = () => {
    return(
    <header className='bg-blue-100 h-12 md:h-20'>
    {/* Header Contents */}
    <div className='max-w-screen-xl mx-auto h-full flex justify-between items-center'>
        <div>
        {/* Logo - 이미지로 교체가능 */}
        <Link to={"/"}><div>Seojaemin Portfolio</div></Link>
        </div>
    <ul className='flex text-xs md:text-base gap-2 md:gap-8'>
        <button>Mode</button>
        <Link to={"/Introduce"}><li>Introduce</li></Link>
        <Link to={"/Portfolio"}><li>Portfolio</li></Link>
        <Link to={"/ContactMe"}><li>Contact Me</li></Link>
    </ul>
    </div>
    </header>
    );
};

export default Header;
