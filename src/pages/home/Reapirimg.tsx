import slide from '../../assets/images/slider-img.png'
import { slides } from "./index"

// Functional component to display repair and maintenance services with an image and a list of slides.
export default function RepairImg() {
  return (
    <section className="w-full h-full">
      {/* Main container with a background color and flex layout for responsiveness */}
      <div className='w-full bg-blue-300 text-white flex flex-col md:flex-row items-center sm:px-3 px-10'>
        {/* Text content section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          {/* Main heading */}
          <h1 className="text-5xl font-bold leading-tight text-blue-700">
            Repair and <br />Maintenance<br /> Services
          </h1>
          {/* Paragraph describing the services */}
          <p className='pt-10 text-xl text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto, architecto tempore soluta animi porro laudantium nihil, quae iure quam inventore, odit id voluptatem! Earum veniam harum temporibus nobis dolorem.
          </p>
          {/* Contact button */}
          <button className='w-[200px] h-[50px] rounded-md text-white text-xl mt-4 bg-orange-400
          hover:bg-transparent border-[1px] border-orange-400 hover:text-orange-400 font-bold'>
            Contact us
          </button>
        </div>

        {/* Image section */}
        <div className='w-full md:w-1/2'>
          {/* Image related to repair and maintenance services */}
          <img src={slide} alt="repair-and-maintenance" className="object-cover w-full h-auto" />
        </div>
      </div>

      {/* Container for slides with a flex layout for responsiveness */}
      <div className='w-full h-full flex flex-col md:flex-row gap-7 justify-center items-center mt-10'>
        {/* Map through slides and render each one */}
        {
          slides.map((item, index) => (
            <div className='w-[400px] py-6 md:w-[350px] h-[250px] flex flex-col items-center justify-center cursor-pointer
            bg-white shadow-lg shadow-slate-400 hover:bg-yellow-500 text-black hover:text-white transition-colors duration-300' key={index}>
              {/* Slide image */}
              <img src={item.image} alt={item.title} className='w-[100px]' />
              {/* Slide title */}
              <p className='font-bold text-xl pt-10'>{item.title}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
