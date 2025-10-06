import React from 'react';
import { FaLeaf, FaRibbon, FaAward, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import teamImage from '../assets/images/team.jpg'; 
// import signatureImage from '../assets/images/signature.png'; 

const AboutUs = () => {
  return (
    <div className="bg-[#faf7f5]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#c46b47] to-[#e3a17a] py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Creating magical moments through exquisite event decor
          </p>
        </div>
      </div>

      {/* Our Journey */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="" 
              alt="Our Team" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="bg-[#c46b47] p-3 rounded-full text-white mr-4">
                  <FaAward className="text-2xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Crafting Memories Since 2010
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by a team of passionate designers, Ashtavinayak Events began with a simple vision: 
              to transform ordinary spaces into extraordinary experiences. What started as a small 
              decor service has blossomed into one of the most sought-after event design studios 
              in the region.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our journey has been guided by creativity, attention to detail, and an unwavering 
              commitment to making each event uniquely beautiful. From intimate gatherings to 
              grand celebrations, we pour our hearts into every project.
            </p>
            <div className="flex items-center">
              {/* <img src={signatureImage} alt="Founder Signature" className="h-12 mr-4" /> */}
              <div>
                <p className="font-medium">Rahul Sharma</p>
                <p className="text-sm text-gray-500">Founder & Creative Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c46b47] to-[#e3a17a] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLeaf className="text-3xl text-[#c46b47]" />,
                title: "Sustainability",
                description: "We prioritize eco-friendly materials and practices in all our designs."
              },
              {
                icon: <FaRibbon className="text-3xl text-[#c46b47]" />,
                title: "Excellence",
                description: "Only the highest quality materials and craftsmanship for our clients."
              },
              {
                icon: <FaHeart className="text-3xl text-[#c46b47]" />,
                title: "Passion",
                description: "We love what we do, and it shows in every detail of our work."
              },
              {
                icon: <FaAward className="text-3xl text-[#c46b47]" />,
                title: "Innovation",
                description: "Constantly pushing creative boundaries to deliver unique designs."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#faf7f5] p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Meet Our Creative Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A talented group of designers, florists, and event specialists dedicated to making your vision come to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Rahul Sharma",
              role: "Founder & Creative Director",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
              bio: "With over 15 years in event design, Rahul brings visionary creativity to every project."
            },
            {
              name: "Priya Patel",
              role: "Lead Floral Designer",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
              bio: "Priya's floral arrangements have graced some of the most prestigious events in the country."
            },
            {
              name: "Arjun Mehta",
              role: "Production Manager",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
              bio: "Arjun ensures every installation is executed flawlessly, down to the smallest detail."
            },
            {
              name: "Neha Gupta",
              role: "Client Relations",
              image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
              bio: "Neha makes the planning process seamless and enjoyable for all our clients."
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-[#c46b47] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#3d332d] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Create Something Beautiful Together?
          </h2>
          <p className="text-xl text-[#d1c7bf] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can make your next event unforgettable with our custom decor solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#c46b47] text-white rounded-lg hover:bg-[#a85839] transition-colors font-medium">
              Get in Touch
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;