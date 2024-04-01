const HeroSection = () => {
  return (
    <section className="md:py-10 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our FullStack Bootcamp</h1>
        <p className="text-lg mb-4">
          Unlock Your Potential with Our Full-Stack Web Development Bootcamp
        </p>
        <div className="flex gap-4 justify-center pt-5">
          <button className="bg-orange-800 text-white px-5 py-2 rounded-md text-lg font-bold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
