

const Services = () => {
  return (
    // Main section container with full width and height, adding top margin and padding for responsiveness
    <section className="w-full h-full mt-10 sm:px-3 px-10">
      
      {/* Section title with responsive text sizes, centered alignment, and top padding */}
      <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center pt-10">
        Our Services
      </h2>
      
      {/* Grid container for service cards, with responsive column layout and spacing */}
      <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mt-10">
        
        {/* Service card 1: Maintenance */}
        <div className="flex flex-col items-center justify-center py-6 px-5 shadow-lg rounded-md
        w-full max-w-[400px] h-[200px] cursor-pointer hover:bg-orange-400
        hover:text-white transition duration-300">
          <h3 className="text-lg md:text-xl lg:text-2xl pt-2">Maintenance</h3>
          <p className="pt-3 text-center">
            When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          </p>
        </div>

        {/* Service card 2: Electrical */}
        <div className="flex flex-col items-center justify-center py-6 px-5 shadow-lg rounded-md
        w-full max-w-[400px] h-[200px] cursor-pointer hover:bg-orange-400
        hover:text-white transition duration-300">
          <h3 className="text-lg md:text-xl lg:text-2xl pt-2">Electrical</h3>
          <p className="pt-3 text-center">
            When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          </p>
        </div>

        {/* Service card 3: Plumbing */}
        <div className="flex flex-col items-center justify-center py-6 px-5 shadow-lg rounded-md
        w-full max-w-[400px] h-[200px] cursor-pointer hover:bg-orange-400
        hover:text-white transition duration-300">
          <h3 className="text-lg md:text-xl lg:text-2xl pt-2">Plumbing</h3>
          <p className="pt-3 text-center">
            When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          </p>
        </div>
        
      </div>
      
    </section>
  );
}

export default Services;
