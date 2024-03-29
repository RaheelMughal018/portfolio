"use Client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div>
        <Button>
          <SunIcon />
          <MoonIcon />
        </Button>
      </div>
    </>
  );
}
