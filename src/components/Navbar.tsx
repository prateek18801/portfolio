const Navbar = () => {
    return (
        <nav className="fixed w-full max-w-5xl flex justify-between items-center py-4 text-sm">
            <div className="text-2xl font-semibold">PC</div>
            <ul className="flex">
                <li className="ml-9">Home</li>
                <li className="ml-9">About</li>
                <li className="ml-9">Services</li>
                <li className="ml-9">Portfolio</li>
                <li className="ml-9">Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
