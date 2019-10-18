import { createContext } from "react";

export const ToasterContext = createContext({
  visible: false,
  setToast: () => {},
  toggleToast: () => {},
  content: null,
  variant: "info",
  options: {}
});
