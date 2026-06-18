import { services } from "../data/Services";

function Services() {
  return (
    <section id="services" className="bg-[#0B0B0F]  border-b border-gray-800  text-white py-3">
      <div className=" px-6 ">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-[#FF7A00] ">Services</span>
          <hr className="w-[40px] h-[4px] my-1.5 bg-[#FF7A00]" />
        </h2>

        {/* Services Grid */}
        <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-[#121216]  cursor-pointer flex flex-col sm:flex-row gap-2 items-center  border border-gray-800 rounded-2xl p-8 hover:border-[#FF7A00] transition duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#1A1A1F] flex items-center justify-center mb-6">
                  <Icon size={40} className="text-[#FF7A00]" />
                </div>

                <div className="body">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
