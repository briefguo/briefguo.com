import React from 'react';

interface BodyProps {
  backgroundColor: string;
  color: string;
}

const Body: React.FC<BodyProps> = props => {
  const inlineStyle = `
    body {
      color:${props.color};
      background-color:${props.backgroundColor}
    }
  `;
  return (
    <>
      <style>{inlineStyle}</style>
      {props.children}
    </>
  );
};

export default Body;
