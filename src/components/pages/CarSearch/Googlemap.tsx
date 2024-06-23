import React from "react";

const Googlemap = () => {
  return (
    <div>
      {/* google map  */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7176.606190035744!2d88.72740973838492!3d25.925270908175676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4a6c6e1d80bc5%3A0xe4cde3283e0278e4!2sKhansama!5e0!3m2!1sen!2sbd!4v1710589763598!5m2!1sen!2sbd"
        style={{ border: 0 }}
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Googlemap;
