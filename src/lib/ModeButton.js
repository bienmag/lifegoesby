function ModeButton({ mode, selectedMode, setMode, label }) {
  return (
    <button
      onClick={() => setMode(mode)}
      className={` w-24 mx-2 rounded-full shadow-xl hover:bg-amber-600  bg-[#D7A147] p-1  text-white text-sm`}
    >
      {label}
    </button>
  )
}
export default ModeButton
