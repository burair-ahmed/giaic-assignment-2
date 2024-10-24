export default function Header() {
    return (
        <header className="bg-[#1A2238] p-4">
            <div className="container mx-auto grid grid-cols-12 gap-4 w-4/5">
                {/* Logo Section (Col-4) */}
                <div className="col-span-3 text-white text-2xl font-bold">
                    Burair Ahmed
                </div>

                {/* Navigation Section (Col-6) */}
                <nav className="col-span-4 flex space-x-6 justify-start">
                    <a href="#" className="text-white text-lg">Home</a>
                    <a href="#" className="text-white text-lg">Product</a>
                    <a href="#" className="text-white text-lg">Pricing</a>
                    <a href="#" className="text-white text-lg">Contact</a>
                </nav>

                {/* Buttons Section (Col-2) */}
                <div className="col-span-4 flex justify-end space-x-4">
                    <a href="#" className="text-white text-lg">Login</a>
                    <a href="#" className="bg-[#00A3FF] text-white px-6 py-2 rounded-lg text-lg">JOIN US</a>
                </div>
            </div>
        </header>
    );
}
