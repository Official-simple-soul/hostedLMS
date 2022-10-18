const Otp = ({ otp, setOtp }) => {
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((data, id) => (id === index ? element.value : data))]);

    // focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      event.target.previousSibling.focus();
    }
  };
  return (
    <>
      {otp.map((data, index) => {
        return (
          <input
            type="text"
            name="otp"
            maxLength="1"
            key={index}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
            tabIndex={index + 1}
            onKeyUp={(event) => handleKeyDown(event)}
            className="md:w-14 md:h-14 w-10 h-10 rounded-lg border border-[#D6BBFB] text-center text-[28px] text-primary font-medium shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] outline-0"
          />
        );
      })}
      {/*<p>{otp.join("")}</p> */}
    </>
  );
};

export default Otp;
