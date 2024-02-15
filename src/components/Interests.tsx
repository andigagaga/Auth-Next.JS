import { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // Import CSS dari react-tagsinput
import Button from "./Button";
import Spacing from "./Spacing";

export default function Interests() {
  const [tags, setTags] = useState([]);

  const handleChange = (tags: any) => {
    setTags(tags);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
      <div className="container flex justify-between items-center w-full">
        <p className="font-bold text-sm text-yellow-100">
          Tell everyone about yourself
        </p>
        <Button name={"Save"} />
      </div>
      <Spacing />
      <p className="font-bold text-xl text-white">What interest you?</p>
      <Spacing />
      <Spacing />
      <TagsInput value={tags} onChange={handleChange} />
      </div>
    </div>
  );
}
