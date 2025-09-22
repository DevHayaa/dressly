const AboutStats = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Happy Customers",
      description: "Women who trust us for their elegant suits"
    },
    {
      number: "500+",
      label: "Designs Created",
      description: "Unique and beautiful suit designs"
    },
    {
      number: "6",
      label: "Years of Excellence",
      description: "Dedicated to quality and style"
    },
    {
      number: "50+",
      label: "Expert Tailors",
      description: "Skilled artisans crafting perfection"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue to-purple-600">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center mb-16">
          <h2 className="font-bold text-white text-3xl sm:text-4xl mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Celebrating our journey and the trust our customers place in us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
