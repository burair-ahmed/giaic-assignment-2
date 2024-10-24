export default function Header() {
    return (
        <header className="bg-[#1A2238] p-4">
            <div className="container mx-auto grid grid-cols-12 gap-4 w-4/5 items-center"> 
                <div className="col-span-3 text-white text-2xl font-bold font-montserrat">
                    Burair Ahmed
                </div>

                <nav className="col-span-4 flex space-x-6 justify-start">
                    <a href="#" className="text-white text-lg font-montserrat">Home</a>
                    <a href="#" className="text-white text-lg font-montserrat">Product</a>
                    <a href="#" className="text-white text-lg font-montserrat">Pricing</a>
                    <a href="#" className="text-white text-lg font-montserrat">Contact</a>
                </nav>

                <div className="col-span-4 flex justify-end space-x-4 items-center">
                    <a href="#" className="text-white text-lg font-montserrat">Login</a>
                    <a href="#" className="bg-[#00A3FF] text-white px-6 py-2 rounded-lg text-lg font-montserrat">JOIN US</a>
                </div>
            </div>
        </header>
    );
}
