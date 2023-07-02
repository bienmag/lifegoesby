function Template({ weeks }) {
  const totalWeeks = 5200;
  const template = [];
  const GrayBox = <div className="w-2 h-2 bg-gray-300 m-0.5" />;
  const RedBox = <div className="w-2 h-2 bg-red-600 m-0.5" />;

  const boxesPerLine = 52;
  const numLines = Math.ceil(totalWeeks / boxesPerLine);

  for (let line = 0; line < numLines; line++) {
    const lineTemplate = [];
    for (let i = 0; i < boxesPerLine; i++) {
      const weekIndex = line * boxesPerLine + i;
      if (weekIndex < totalWeeks) {
        if (weeks && weekIndex < weeks) {
          lineTemplate.push(RedBox);
        } else {
          lineTemplate.push(GrayBox);
        }
      }
    }
    template.push(<div key={line} className="flex justify-center">{lineTemplate}</div>);
  }

  return <div>{template}</div>;
}

export default Template;
