import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  name: string;
  address: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="p-6 w-full h-full">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold  pt-10">
        Contact Us
      </h2>

      <div className="w-full h-full flex flex-col md:flex-row gap-6 mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              id="name"
              {...register('name', { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
            <input
              id="address"
              {...register('address')}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              {...register('message')}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors w-full"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8659638275834!2d-122.419418084682!3d37.77492927975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d6e6f6d39%3A0x62f59e3e038c6829!2sSan%20Francisco%2C%20CA%2094120!5e0!3m2!1sen!2sus!4v1632643823493!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
