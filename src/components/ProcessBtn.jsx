
const ProcessBtn = ({ speak, text, speaking }) => {
  return (
    <div>
      <button 
        onClick={speak} 
        disabled={!text || speaking}
      >
        {speaking ? 'Mluvím...' : "Povídej"}
      </button>
    </div>
  )
}

export default ProcessBtn