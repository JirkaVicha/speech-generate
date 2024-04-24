import { MdOutlineTextSnippet } from "react-icons/md";
import { BiSolidUserVoice } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

const HeaderComponent = () => {
  return (
    <>
      <div className="icons">
        <MdOutlineTextSnippet size={32} />
        <FaArrowRightLong size={32} />
        <BiSolidUserVoice size={32} />
      </div>
      
      <h1>Text na Řeč</h1>
      <p>Pouze <strong>napiš</strong> text a <strong>poslechni si</strong> jak to zní.</p>
    </>
  )
}

export default HeaderComponent