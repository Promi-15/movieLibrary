import { FaAmazon } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaWindows } from "react-icons/fa";
import { RiMacbookFill } from "react-icons/ri";
const CompatibilityAd = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 p-5 mt-10 border-2">
      <div className="px-10">
        <h1 className="text-3xl lg:text-6xl w-10 font-bold">We'r Compatible</h1>
        <p className="mt-10 font-extralight italic lg:w-xl">
          Stream Plex from just about any phone, tablet, smart TV, gaming
          consoles, or PC.
          Stream Plex from just about any phone, tablet, smart TV, gaming
          consoles, or PC.
        </p>
        <div className="flex items-center text-2xl gap-10 my-10">
          <FaAmazon />
          <FaApple />
          <RiNetflixFill />
          <FaWindows />
          <RiMacbookFill />
        </div>
        <button className="px-10 py-2 border-2 rounded-2xl bg-orange-200">Stream Now</button>
      </div>
      <div>
        <img src="/public/images/jhonWk.png" alt="" />
      </div>
    </div>
  );
};

export default CompatibilityAd;
