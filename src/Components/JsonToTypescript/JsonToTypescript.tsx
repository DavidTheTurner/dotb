import React from "react";
import { Textarea } from "@fluentui/react-components";

export const JsonToTypescript: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [outputValue, setOutputValue] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    try {
      const output = JSON.parse(e.target.value);
      setOutputValue(output);
    } catch (e) {
      setOutputValue("invalid json");
    }
  };
  return (
    <div>
      <Textarea onChange={onChange} value={inputValue} />
      <Textarea value={outputValue} readOnly={true} />
    </div>
  );
};

JsonToTypescript.displayName = "JsonToTypescript";
