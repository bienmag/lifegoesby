function ModeButton({ mode, selectedMode, setMode, label }) {
  const isClicked = mode === selectedMode;
  console.log("mode, selectedMode", mode, selectedMode);
  console.log("is active", isClicked, mode);
  return (
    <button
      onClick={() => setMode(mode)}
      className={`border-2 w-24 mx-2 rounded-full bg-amber-500 text-white text-xl ${
        isClicked ? "   border-gray-600" : ""
      }`}
    >
      {label}
    </button>
  );
}
export default ModeButton;
