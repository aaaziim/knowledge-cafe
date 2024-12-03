import Profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center border-b-2 p-4 my-4 bg-slate-400 rounded-xl">
            <h1 className="text-4xl font-bold text-white">
                Knowledge Cafe
            </h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;