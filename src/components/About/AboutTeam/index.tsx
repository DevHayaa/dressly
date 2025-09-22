import Image from "next/image";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/images/users/user-01.jpg",
      description: "With over 15 years in fashion design, Sarah founded Dressly with a vision to create elegant, well-fitted suits for modern women."
    },
    {
      name: "Emily Chen",
      role: "Head of Design",
      image: "/images/users/user-02.jpg",
      description: "Emily brings her expertise in traditional and contemporary fashion to create stunning designs that blend elegance with functionality."
    },
    {
      name: "Maria Rodriguez",
      role: "Quality Assurance Manager",
      image: "/images/users/user-03.jpg",
      description: "Maria ensures every suit meets our high standards of quality and craftsmanship before reaching our customers."
    },
    {
      name: "Jennifer Lee",
      role: "Customer Experience Director",
      image: "/images/users/user-04.jpg",
      description: "Jennifer leads our customer service team, ensuring every client receives personalized attention and support."
    }
  ];

  return (
    <section id="our-team" className="py-20 bg-white">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue/10 text-blue font-medium text-sm rounded-full mb-4">
            Our Team
          </span>
          <h2 className="font-bold text-dark text-3xl sm:text-4xl mb-6">
            Meet the People Behind Dressly
          </h2>
          <p className="text-dark-4 text-lg max-w-3xl mx-auto">
            Our passionate team of designers, tailors, and customer service experts work together to bring you the best
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue/20 rounded-full group-hover:bg-blue/30 transition-colors duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-pink-200/30 rounded-full group-hover:bg-pink-200/50 transition-colors duration-300"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={300}
                  className="relative z-10 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h3 className="font-semibold text-dark text-xl mb-2">
                {member.name}
              </h3>
              <p className="text-blue font-medium mb-4">
                {member.role}
              </p>
              <p className="text-dark-4 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
