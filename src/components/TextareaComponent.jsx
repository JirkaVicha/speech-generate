
const TextareaComponent = ({ text, handleChange, active, speaking }) => {
  return (
    <div>
      <textarea 
        className={`${speaking ? 'active' : ''}`}
        placeholder="Enter text..."
        value={text} 
        onChange={handleChange} 
        rows='10'
        cols='50'
      />
    </div>
  )
}

export default TextareaComponent