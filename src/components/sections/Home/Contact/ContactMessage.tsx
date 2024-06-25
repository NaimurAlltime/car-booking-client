"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";
import { Button } from "antd";

const ContactMessage = () => {
  const sendContactInfo = (data: any) => {
    // store user data in database
    // event.preventDefault();
    // const form = event.target;
    // // const name = form.name.value;
    // const Full_Name = form.Full_Name.value;
    // const Mobile = form.Mobile.value;
    // const Email = form.Email.value;
    // const Purpose = form.Purpose.value;
    // const Message = form.Message.value;
    // const addMessage = {
    //   Full_Name: Full_Name,
    //   Mobile: Mobile,
    //   Email: Email,
    //   Purpose: Purpose,
    //   Message: Message,
    // };
    // // data fetching post api
    // fetch("/api/contactapi/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(addMessage),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Your massage send successfully!",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     form.reset();
    //   });
  };

  return (
    <div>
      <Form submitHandler={sendContactInfo}>
        <div className="flex flex-col gap-3">
          <div>
            <FormInput
              label="Your Full Name"
              placeholder="Enter Your Full Name"
              name="name"
              size="large"
              style={{
                backgroundColor: "#E0E3EA",
              }}
            />
          </div>
          <div>
            <FormInput
              label="Your Mobile Number"
              placeholder="Enter Your Mobile Number"
              name="number"
              size="large"
              style={{
                backgroundColor: "#E0E3EA",
              }}
            />
          </div>
          <div>
            <FormInput
              label="Your Your Email"
              placeholder="Enter Your Email"
              name="email"
              type="email"
              size="large"
              style={{
                backgroundColor: "#E0E3EA",
              }}
            />
          </div>
          <div>
            <FormInput
              label="Your Your Purpose"
              placeholder="Enter Your Purpose"
              name="purpose"
              size="large"
              style={{
                backgroundColor: "#E0E3EA",
              }}
            />
          </div>
          <div>
            <FormTextArea
              label="Your message"
              placeholder="Enter Your Message"
              name="message"
              style={{
                backgroundColor: "#E0E3EA",
              }}
              rows={5}
            />
          </div>
          <div>
            <button className="bg-[#3a88cb] hover:bg-blue-900 text-white rounded-md px-3.5 py-1.5">
              Submit
            </button>
          </div>
        </div>
      </Form>

      {/* <p>{message}</p> */}
    </div>
  );
};

export default ContactMessage;
