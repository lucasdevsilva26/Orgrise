import { useState } from "react";

function LoginSignonInput({
  name,
  type,
  toggleVisibility,
  colors,
  setValue,
  errorMsg,
}) {
  const [visibility, setVisibility] = useState(!toggleVisibility);

  return (
    <article className=" w-full ">
      <div className="flex flex-col ">
        <label htmlFor="" className={`flex flex-col text-2xl font-bold`}>
          {name}
        </label>

        <div
          className={`flex gap-2 w-full px-4 p-2 border-3 rounded-2xl ${colors.frontground2} `}
        >
          <input
            type={visibility ? type : "password"}
            className={` text-3xl flex-1 outline-0 w-full `}
            required
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            className={`cursor-pointer ${toggleVisibility ? "" : "hidden"} w-10 relative `}
            type="button"
            onClick={() => setVisibility(!visibility)}
          >
            <i
              className={
                (visibility ? " fas fa-eye" : " fas fa-eye-slash") +
                ` text-2xl ${colors.buttonText} absolute top-1/2 left-1/2 -translate-1/2 `
              }
            ></i>
          </button>
        </div>
      </div>
      <span className={` text-red-600 `}>{errorMsg}</span>
    </article>
  );
}
export default LoginSignonInput;
