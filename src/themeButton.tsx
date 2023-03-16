import { Button, Tooltip, ThemeType, useTheme } from "@itwin/itwinui-react";
import { useState } from "react";

export const ThemeButton = () => {
  const [theme, setTheme] = useState<ThemeType>("light");
  useTheme(theme);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Tooltip placement="left" content="Toggle light/dark theme">
      <Button styleType="borderless" onClick={changeTheme}>
        {theme === "light" ? "🌞" : "🌙"}
      </Button>
    </Tooltip>
  );
};
