import React, { useState } from 'react';

type MousePosition = {
  x: number;
  y: number;
};

type MouseTrackerProps = {
  render: (position: MousePosition) => JSX.Element;
};

export default function MouseTracker ({ render }: MouseTrackerProps)  {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};

function RenderExample(position: MousePosition) {
    return <>
        <h2>{position.x}</h2>
        <h2>{position.y}</h2>
    </>
}

function FullCode() {
    return <>
        <h1>Full code</h1>
        <MouseTracker render={RenderExample} />
    </>
}