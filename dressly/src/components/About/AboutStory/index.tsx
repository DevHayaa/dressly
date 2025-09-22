import Image from "next/image";

const AboutStory = () => {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue/10 text-blue font-medium text-sm rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="font-bold text-dark text-3xl sm:text-4xl mb-6">
            The Dressly Story
          </h2>
          <p className="text-dark-4 text-lg max-w-3xl mx-auto">
            From a small boutique to a leading online destination for elegant ladies' suits
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-dark text-xl mb-3">Our Beginning</h3>
                <p className="text-dark-4 leading-relaxed">
                  Founded in 2018, Dressly started as a small boutique with a passion for creating 
                  beautiful, well-fitted ladies' suits. Our founder, Sarah Johnson, noticed a gap 
                  in the market for high-quality, elegant suits that catered specifically to women's 
                  professional and formal needs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-dark text-xl mb-3">Our Mission</h3>
                <p className="text-dark-4 leading-relaxed">
                  We are committed to empowering women through fashion by providing meticulously 
                  crafted suits that blend traditional elegance with contemporary style. Every 
                  piece in our collection is designed to make you feel confident, professional, 
                  and effortlessly stylish.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-dark text-xl mb-3">Our Vision</h3>
                <p className="text-dark-4 leading-relaxed">
                  To become the world's most trusted destination for premium ladies' suits, 
                  where every woman can find her perfect fit and express her unique style 
                  with confidence and grace.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue/20 rounded-full"></div>
            <Image
              src="/images/dress2.jpg"
              alt="Dressly Team"
              width={500}
              height={600}
              className="relative z-10 rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
