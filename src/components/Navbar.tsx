const Navbar = () => {
    return (
        <nav className="fixed flex justify-center w-full">
            <div className="flex items-center justify-between w-full max-w-5xl py-4 text-sm ">
                <div className="text-2xl font-semibold">PC</div>
                <ul className="flex">
                    <li className="ml-9">Home</li>
                    <li className="ml-9">About</li>
                    <li className="ml-9">Services</li>
                    <li className="ml-9">Portfolio</li>
                    <li className="ml-9">Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
