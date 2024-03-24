"use client";
import Swal from "sweetalert2";

const ContactMessage = () => {
  const sendContactInfo = (event) => {
    // store user data in database
    event.preventDefault();

    const form = event.target;
    // const name = form.name.value;
    const Full_Name = form.Full_Name.value;
    const Mobile = form.Mobile.value;
    const Email = form.Email.value;
    const Purpose = form.Purpose.value;
    const Message = form.Message.value;
    const addMessage = {
      Full_Name: Full_Name,
      Mobile: Mobile,
      Email: Email,
      Purpose: Purpose,
      Message: Message,
    };
   
    // data fetching post api
    fetch("/api/contactapi/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addMessage),
    })
      .then((res) => res.json())
      .then((data) => {
      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your massage send successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });
  };

  return (
    <div>
      <form onSubmit={sendContactInfo}>
        <label className="flex flex-col">
          <span className="placeholder-gray-500 font-medium mb-1">
            Your Full Name
          </span>
          <input
            type="text"
            name="Full_Name"
            placeholder="Enter Your Full Name"
            className="bg-gray-300 py-2 px-6 placeholder-gray-500 text-gray-800 rounded-lg outline-none border-none font-medium"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="placeholder-gray-500 font-medium mb-1">
            Your Mobile Number
          </span>
          <input
            type="text"
            name="Mobile"
            placeholder="Enter Your Mobile Number"
            className="bg-gray-300 py-2 px-6 placeholder-gray-500 text-gray-800 rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="placeholder-gray-500 font-medium mb-1">
            Your Email
          </span>
          <input
            type="text"
            name="Email"
            placeholder="Enter Your Email"
            className="bg-gray-300 py-2 px-6 placeholder-gray-500 text-gray-800 rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="placeholder-gray-500 font-medium mb-1">
            Your Purpose
          </span>
          <input
            type="text"
            name="Purpose"
            placeholder="Enter Your Purpose"
            className="bg-gray-300 py-2 px-6 placeholder-gray-500 text-gray-800 rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="placeholder-gray-500 font-medium mb-1">
            Your message
          </span>
          <textarea
            rows={4}
            name="Message"
            placeholder="Enter Your Message"
            className="bg-gray-300 py-2 px-6 placeholder-gray-500 text-gray-800 rounded-lg outline-none border-none font-medium"
          />
        </label>
        <input
          className="bg-blue-500 py-2 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md mt-2"
          type="submit"
          value="Send"
        />
      </form>

      {/* <p>{message}</p> */}
    </div>
  );
};

export default ContactMessage;
