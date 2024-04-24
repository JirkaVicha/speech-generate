import { useEffect, useState } from "react"
import SelectComponent from "./SelectComponent"
import HeaderComponent from "./HeaderComponent"
import TextareaComponent from "./TextareaComponent"
import ProcessBtn from "./ProcessBtn"

const SpeechSynthesisComponent = () => {
  const [text, setText] = useState('')
  const [speaking, setSpeaking] = useState(false)
  const [voices, setVoices] = useState([])
  const [active, setActive] = useState(false)
  const synth = window.speechSynthesis;

  useEffect(() => {
    const getVoices = () => {
      const voices = synth.getVoices()
      setVoices(voices)
    }

    synth.addEventListener('voiceschanged', getVoices)
    getVoices()

    return () => {
      synth.removeEventListener("voiceschanged", getVoices)
    }
  }, [synth])

  const speak = (e) => {
    const utterance = new SpeechSynthesisUtterance(text)
    const selectedVoice = voices.find((voice) => voice.lang === e.target.value)
    utterance.voice = selectedVoice
    synth.speak(utterance)
    setSpeaking(true)
    setActive(true)
    

    utterance.onend = () => {
      setSpeaking(false)
      //setText('')
      setActive("")
    }
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
      <div className="main-container">
        <div className="all-sections">
          <div className="header-container">
            <HeaderComponent /> 
          </div>
        
          <div className="process-container">
            <TextareaComponent 
              text={text}
              handleChange={handleChange}
              active={active}
              speaking={speaking}
            />

            {/* <SelectComponent
              speak={speak}
              speaking={speaking}
              text={text}
              voices={voices} 
              /> */}

            <ProcessBtn 
              text={text}
              speak={speak}
              speaking={speaking}
            /> 
          </div>
        
        </div>
      </div>  
  )
}

export default SpeechSynthesisComponent