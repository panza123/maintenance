import worker from "../../assets/images/pexels-nishantaneja-4271641.jpg";

export default function Aboutus() {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row sm:px-3 px-6 py-8 mt-4">
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">About us</h1>
        <p className="pt-3 text-sm md:text-base lg:text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised text. There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised text.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md w-max hover:bg-transparent border-[1px]
        border-blue-500 hover:text-blue-500
        ">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src={worker}
          alt="worker-image"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </section>
  );
}
