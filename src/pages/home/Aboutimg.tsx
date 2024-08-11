import prof from "../../assets/images/professional-img.png"

export const Aboutimg = () => {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row sm:px-3 px-6 py-8 mt-4  bg-blue-300 ">

<div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src={prof}
          alt="worker-image"
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">We Provide Professional
Home Services.
</h1>
        <p className="pt-3 text-sm md:text-base lg:text-lg">
        randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly

Read
        </p>

        <button className="mt-6 px-6 py-3  text-white rounded-md w-max  bg-orange-400
         hover:bg-transparent border-[1px] border-orange-400 hover:text-orange-400
        ">
          Learn More
        </button>
      </div>
      
    </section>
  )
}
