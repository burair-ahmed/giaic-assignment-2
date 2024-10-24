import Card from "../Card";

export default function CardSection() {
  return (
    <section className="bg-[#1A2238] py-12">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        
        <div className="col-span-12 lg:col-span-4 font-montserrat">
          <Card 
            color="#FCD6D1" 
            title="training Courses" 
            subtitle="The gradual accumulation of information..." 
            description="The gradual accumulation of information about atomic and small-scale behaviour..." 
          />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <Card 
            color="#C6F6D5" 
            title="2,769 online courses" 
            subtitle="The gradual accumulation of information..." 
            description="The gradual accumulation of information about atomic and small-scale behaviour..." 
          />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <Card 
            color="#00A3FF" 
            title="training Courses" 
            subtitle="The gradual accumulation of information..." 
            description="The gradual accumulation of information about atomic and small-scale behaviour..." 
          />
        </div>

      </div>
    </section>
  );
}
