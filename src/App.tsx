import { render } from "react-dom";
import { ThemeButton } from "./themeButton";
import "./styles.css";
import { useMemo, useState, useCallback } from "react";

import {
  ComboBox,
  ComboBoxProps,
  Label,
  Input,
  Button,
  MenuItem,
  StatusMessage,
  SelectOption,
  MenuItemSkeleton
} from "@itwin/itwinui-react";

import { nanoid } from "nanoid";
export const App = () => {
  const prefix = useMemo(() => nanoid(), []);
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [optionsList, setOptionsList] = useState([
    { label: "first", value: "AF" },
    { label: "second", value: "AX" },
    { label: "thrid", value: "AL" }
  ]);
  const onChange = useCallback((value) => {
    console.log(value);
    setSelectedValue(value);
  }, []);
  const onAdding = useCallback(() => {
    const userInput = document
      .querySelectorAll("#clash-categories-list > div > input")[0]
      .getAttribute("value");
    console.log(userInput);
    setOptionsList([...optionsList, { label: userInput!, value: userInput! }]);
    setSelectedValue(userInput!);
  }, [optionsList]);
  const emptyContent = useMemo(() => {
    return isLoading ? (
      <>
        {new Array(6).fill(null).map((_, index) => {
          return (
            <MenuItemSkeleton
              key={index}
              hasIcon
              hasSublabel
              contentWidth={`${Math.min(
                Math.max(Math.random() * 100, 25),
                60
              )}%`}
            />
          );
        })}
      </>
    ) : (
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{
            margin: "0 auto",
            textAlign: "center",
            paddingBottom: "10px"
          }}
        >
          <p> No Category found here</p>
          Note: Use wild card '_' to match any single character, and '%' to
          match multiple characters
          <br />
          <Button styleType="high-visibility" onClick={onAdding}>
            {" "}
            Add{" "}
          </Button>
        </div>
      </div>
    );
  }, [isLoading, onAdding]);
  setTimeout(() => {
    setIsLoading(false);
  }, 10000);
  return (
    <ComboBox
      id="clash-categories-list"
      className="categories-list"
      options={optionsList}
      value={selectedValue}
      onChange={onChange}
      emptyStateMessage={emptyContent}
    />
  );
};
