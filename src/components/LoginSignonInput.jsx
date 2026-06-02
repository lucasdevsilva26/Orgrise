import { useState } from "react";

function LoginSignonInput({ name, type, toggleVisibility, colors }) {
  const [visibility, setVisibility] = useState(!toggleVisibility);

  return (
    <article>
      <div className="flex flex-col w-full">
        <label htmlFor="" className={`flex flex-col text-2xl font-bold`}>
          {name}
        </label>

        <div className={`flex gap-2 px-4 p-2 border-3 rounded-4xl `}>
          <input
            type={visibility ? type : "password"}
            className={`text-3xl w-full outline-0`}
            required
          />

          <button
            className={`cursor-pointer ${toggleVisibility ? "" : "hidden"} relative`}
            type="button"
            onClick={() => setVisibility(!visibility)}
          >
            <i className={(visibility ? " fas fa-eye" : " fas fa-eye-slash") + ` text-3xl ${colors.buttonText} absolute top-1/2 right-0 -translate-y-1/2 `}></i>
          </button>
        </div>
      </div>
    </article>
  );
}
export default LoginSignonInput;
