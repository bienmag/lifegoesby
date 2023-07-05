function Years({ years }) {
  const totalYears = 90;
  const yearsTemplate = [];
  const GrayDiamond = (
    <div className="w-4 h-4 m-1 xl:w-5 xl:h-5 border-2 border-gray-300 transform rotate-45 xl:m-2" />
  );
  const BlueDiamond = (
    <div className="w-4 h-4 m-1 xl:w-5 xl:h-5 bg-blue-600 transform rotate-45 xl:m-2" />
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
      <div key={line} className="flex justify-center">
        {" "}
        {lineTemplate}
      </div>
    );
  }

  return <div className="m-6"> {yearsTemplate}</div>;
}

export default Years;
