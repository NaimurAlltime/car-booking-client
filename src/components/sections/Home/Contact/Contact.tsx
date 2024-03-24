import { AiOutlineMail, AiOutlineYoutube } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import ContactMessage from "./ContactMessage";

const Contact = () => {
  return (
    <div className="w-full">
      <h4 className="text-3xl font-semibold text-center py-3 text-gray-800">
        Con
        <span className="border-b-4 border-gray-200 py-4">tac</span>t Us
      </h4>
      <div className="max-w-screen-xl mx-auto px-8 md:px-10 gap-10 lg:gap-20">
        <div
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="xl:mt-5 w-full items-center flex xl:flex-row flex-col-reverse md:gap-10 overflow-hidden"
        >
          <div className="w-full md:w-1/2 bg-black-100 rounded-2xl mt-7 md:mt-1">
            <ContactMessage />
          </div>

          <div className="md:w-1/2">
            {/* <img src="/contact.png" alt="" /> */}
            <div className="mb-2 text-gray-500 ms-2 md:ms-14 font-semibold text-lg flex items-center gap-2">
              <AiOutlineMail />
              <h4 className="">info@carcental.com</h4>
            </div>
            <div className="mb-2 text-gray-500 ms-2 md:ms-14 font-semibold text-lg flex items-center gap-2">
              <LiaExternalLinkAltSolid />
              <h4 className="">www.carrental.com</h4>
            </div>
            <div className="text-gray-600 ms-2 md:ms-14 font-medium flex gap-2 items-center text-lg">
              <BiPhoneCall />
              <h4>+8801601-0001</h4>
            </div>
            <div className="mt-7 text-gray-600 ms-2 md:ms-14 font-medium  items-center text-lg">
              <div className="flex gap-2 items-center">
                <MdOutlineAddLocationAlt />
                <h4>3, RK Mission Road, (Lily Pond Center),</h4>
              </div>
              <h3 className="ms-7">
                Level # B-16 Motijhil,
                <br />
                Dhaka-1000
              </h3>
            </div>
            <div className="flex ms-2 md:ms-14 gap-4 mt-7 text-gray-600 text-xl justify-center md:justify-start">
              <a href="">
                <FiFacebook />
              </a>
              <a href="">
                <FiLinkedin />
              </a>
              <a href="">
                <FiTwitter />
              </a>
              <AiOutlineYoutube />
              <a href="">
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* google map  */}
      <div className="relative w-full h-[430px] mt-12">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          frameBorder="0"
          //   style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      {/* google map end  */}
    </div>
  );
};

export default Contact;
