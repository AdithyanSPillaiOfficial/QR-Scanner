import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

function ScannerObj(props) {
  const [content, setContent] = useState("Scan First");

  return (
    <div>
      <Scanner
        onScan={(result) => {
          setContent(result[0].rawValue);
          console.log(result);
          props.setUrl(result[0].rawValue);
        }}
        style={{ width: '100%', height: '400px' }}  // Adjust the height and width here
      />
      <a href={content} target='_blank'><p>{content}</p></a>
    </div>
  );
}

export default ScannerObj;
