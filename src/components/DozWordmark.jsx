import React from "react";

function DozWordmark({ className = "" }) {
  return (
    <span
      className={`inline-flex items-baseline tracking-[0.2em] uppercase ${className}`}
    >
      <span>DOZ</span>
      <span className="inline-block -scale-x-100 -ml-[0.2em]">E</span>
      <span className="sr-only">DOZ3</span>
    </span>
  );
}

export default DozWordmark;

