import Image from "next/image";

const AboutTestimonials = () => {
  const testimonials = [
    {
      review: "Dressly has completely transformed my professional wardrobe. The quality and fit of their suits is unmatched. I feel confident and elegant every time I wear one of their pieces.",
      authorName: "Sarah Williams",
      authorImg: "/images/users/user-01.jpg",
      authorRole: "Marketing Director",
      rating: 5
    },
    {
      review: "The attention to detail in every suit is remarkable. From the fabric selection to the perfect fit, Dressly truly understands what modern women need in their professional attire.",
      authorName: "Emily Davis",
      authorImg: "/images/users/user-02.jpg",
      authorRole: "Lawyer",
      rating: 5
    },
    {
      review: "I've been a customer for over 3 years and the quality has never wavered. The customer service is exceptional, and they always help me find the perfect suit for any occasion.",
      authorName: "Maria Garcia",
      authorImg: "/images/users/user-03.jpg",
      authorRole: "Business Owner",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-1">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue/10 text-blue font-medium text-sm rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-bold text-dark text-3xl sm:text-4xl mb-6">
            What Our Customers Say
          </h2>
          <p className="text-dark-4 text-lg max-w-3xl mx-auto">
            Hear from the amazing women who trust Dressly for their elegant suits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-dark-4 leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <Image
                  src={testimonial.authorImg}
                  alt={testimonial.authorName}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-dark">
                    {testimonial.authorName}
                  </h4>
                  <p className="text-blue text-sm">
                    {testimonial.authorRole}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
