function Years({ years }) {
  const totalYears = 90;
  const yearsTemplate = [];
  const GrayDiamond = (
    <div className="w-5 h-5 border-2 border-gray-300 transform rotate-45 m-2" />
  );
  const BlueDiamond = (
    <div className="w-5 h-5 bg-blue-600 transform rotate-45 m-2" />
  );

  const diamondsPerLine = 10;
  const numLines = Math.ceil(totalYears / diamondsPerLine);
  for (let line = 0; line < numLines; line++) {
    const lineTemplate = [];
    for (let i = 0; i < diamondsPerLine; i++) {
      const yearIndex = line * diamondsPerLine + i;
      if (yearIndex < totalYears) {
        if (years && yearIndex < years) {
          lineTemplate.push(BlueDiamond);
        } else {
          lineTemplate.push(GrayDiamond);
        }
      }
    }
    yearsTemplate.push(
      <div key={line} className="flex justify-center mr-14">
        {" "}
        {lineTemplate}
      </div>
    );
  }

  return <div> {yearsTemplate}</div>;
}

export default Years;
