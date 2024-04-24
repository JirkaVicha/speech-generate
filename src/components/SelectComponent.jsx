
const SelectComponent = ({ speak, text, speaking, voices }) => {
  return (
    <div className="select-container">
      <select onChange={speak} disabled={!text || speaking}>
        {voices
          .filter(voice => voice.lang === 'cs-CZ')
          .map((voice, index) => (
            <option key={index} value={voice.lang}>
            {voice.lang} 
          </option> // za voice.lang , muzes dat jeste voice.name
        ))}
      </select>
    </div>
  )
}

export default SelectComponent