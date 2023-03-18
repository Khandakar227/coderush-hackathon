import {FaShare} from "react-icons/fa";
function ShareButton() {
  return (
    <button className="bg-[#eca22f] text-black py-4 px-8 flex gap-2 items-center justify-center rounded-md" type="button">
        <FaShare/>
        <span>Share</span>
    </button>
  )
}

export default ShareButton