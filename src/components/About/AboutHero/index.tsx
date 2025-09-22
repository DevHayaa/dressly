import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue/10 text-blue font-medium text-sm rounded-full mb-4">
                About Dressly
              </span>
              <h1 className="font-bold text-dark text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
                Crafting Elegance, One Suit at a Time
              </h1>
              <p className="text-dark-4 text-lg leading-relaxed mb-8">
                At Dressly, we believe that every woman deserves to feel confident, elegant, and empowered. 
                Our journey began with a simple vision: to create premium ladies' suits that combine timeless 
                style with modern sophistication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#our-story"
                className="inline-flex items-center justify-center font-medium text-white text-custom-sm rounded-md bg-blue py-3 px-8 ease-out duration-200 hover:bg-dark"
              >
                Our Story
              </a>
              <a
                href="#our-team"
                className="inline-flex items-center justify-center font-medium text-blue text-custom-sm rounded-md border-2 border-blue py-3 px-8 ease-out duration-200 hover:bg-blue hover:text-white"
              >
                Meet Our Team
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200/30 rounded-full"></div>
              <Image
                src="/images/dress1.jpg"
                alt="Elegant Ladies Suit"
                width={500}
                height={600}
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
