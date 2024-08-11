import { testi } from ".";
import star from "../../assets/images/example-stars.png";
import comma from "../../assets/images/comma.png";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";   
import { useState } from "react";
export const ClientSay = () => {
  const [click,setClick] = useState(0)

  const length = testi.length
  
  const nextClick = () => {
    setClick(click === length ? 0 : click + 1)
    


  }
  const prevClick = () => {
    setClick(click ===  0 ? length-1 : click - 1)
    


  }
  
  
  
      return (
        <section className="w-full h-full mt-10">
          {/* Section title */}
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center pt-10">
            What Our Clients Say
          </h2>
    
          {/* Testimonials container */}
          <div className=" w-full flex flex-col md:flex-row   gap-5 justify-between items-center mt-10  sm:px-3 px-10  ">
            {/* Loop through the testi array and render each testimonial */}
            {testi.map((item, index) => (
              <div
                className="max-wl w-full px-6 py-4 bg-white shadow-lg rounded-md mt-10"
                key={index}
              >
                <div className="flex justify-between items-start">
                  {/* Client image and name */}
                  <div className="flex gap-3">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
    
                    <div>
                      <p className="font-medium text-lg">{item.name}</p>
                      <img src={star} alt="Rating stars" className="w-24" />
                    </div>
                  </div>
    
                  {/* Comma image */}
                  <img
                    src={comma}
                    alt="Comma"
                    className="w-8 h-8 object-contain"
                  />
                </div>
    
                {/* Testimonial text */}
                <p className="mt-4 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 items-center justify-center mt-2">
              <button className="w-[50px] h-10 bg-blue-800 rounded-md flex items-center justify-center" onClick={prevClick}>
                <FaArrowLeft size={30} className="text-white"/></button>
              <button className="w-[50px] h-10 bg-blue-800 rounded-md flex items-center justify-center">

              <FaArrowRight size={30} className="text-white" onClick={nextClick}/>
              </button>
          </div>
        </section>
      );
    };
    