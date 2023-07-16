import React from "react";
function Button() {
  return (
    <div>
      <input
        type="submit"
        value="Log In"
        className={`${Style.login_btn} w-full h-[54px] text-center cursor-pointer`}
      />
    </div>
  );
}

export default Button;
