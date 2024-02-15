import React from "react";

export default function Button({name, className, onClick}: any) {
  return (
    <div>
      <button onClick={onClick} className={className}>{name}</button>
    </div>
  );
}
