import * as React from "react";
import * as Types from "./types";

declare function CoNavbar(props: {
  as?: React.ElementType;
  linkAbout?: Types.Basic.Link;
  linkWork?: Types.Basic.Link;
  linkContact?: Types.Basic.Link;
  linkServices?: Types.Basic.Link;
  idLanguaje?: Types.Basic.IdTextInput;
}): React.JSX.Element;
