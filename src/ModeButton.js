function ModeButton({ mode, selectedMode, setMode, label }) {
  const isClicked = mode === selectedMode
  return (
    <button
      onClick={() => setMode(mode)}
      className={`border-2 w-24 mx-2 rounded-full hover:bg-amber-600 bg-amber-500 text-white text-xl ${
        isClicked ? '   border-gray-600' : ''
      }`}
    >
      {label}
    </button>
  )
}
export default ModeButton
