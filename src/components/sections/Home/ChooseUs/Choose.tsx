const Choose = () => {
  return (
    <div className="md:flex gap-7 max-w-screen-xl mx-auto items-center p-2 md:p-0">
      <div
        className="w-full md:w-1/2"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img
          className="h-[480px] md:h-[550px]"
          src="/imgs/choose-us.png"
          alt=""
        />
      </div>
      <div
        className="w-full md:w-1/2 p-2 md:p-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2 className="text-4xl md:text-6xl font-semibold text-blue-500 tracking-widest">
          <span className="border-b-8 border-blue-500 py-4">Wh</span>y choose
          us?
        </h2>
        <p className="mt-16 leading-8 text-justify w-full md:w-4/5">
          SHR Car Rental: Your key to seamless travel. SHRCars isn&apos;t your
          average car rental spot at Marrakech airport. We&apos;ve got some good
          reasons why folks love us:
        </p>
        <div className="ms-1 md:ms-5 leading-8 text-blue-600 font-semibold">
          <ul className="mt-3 ms-3 list-disc">
            <li>Top-Notch Service</li>
            <li>Quality Rides</li>
            <li>Flexi-Bookings</li>
            <li>Great Deals</li>
            <li>24 Hours Support</li>
          </ul>
        </div>



      
      </div>
    </div>
  );
};
export default Choose;
