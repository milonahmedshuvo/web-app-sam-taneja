"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";


const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Jodit = () => {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const config = {
    height: 400, 
    tabIndex: 2,
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default Jodit;
