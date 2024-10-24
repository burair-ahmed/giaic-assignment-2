export default function Hero() {
    return (
      <section className="bg-[#1A2238] text-white py-20">
        <div className="container mx-auto text-center">
      
          <h3 className="text-blue-400 text-lg mb-8 pt-20 pb-10">Welcome</h3>
  
          <h1 className="text-5xl font-bold mb-6">
            Selling on the <br /> internet like a pro
          </h1>
  
          <p className="text-lg mb-8">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
  
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-[#00A3FF] text-white px-6 py-3 rounded-lg font-medium">
              Get Quote Now
            </a>
            <a href="#" className="border border-gray-300 text-white px-6 py-3 rounded-lg font-medium">
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }
  