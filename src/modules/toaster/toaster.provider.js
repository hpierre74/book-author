import React, { useState } from "react";
import { ToasterContext } from "./toaster.context";

const ToasterProvider = ({ children }) => {
  const [toast, setToast] = useState({
    visible: false,
    content: null,
    variant: "info",
    options: {}
  });
  const setVisible = visible => setToast({ ...toast, visible });

  const toggleToast = () =>
    toast.visible ? setVisible(false) : setVisible(true);

  const showToast = newToast =>
    setToast({ ...toast, ...newToast, visible: true });

  return (
    <ToasterContext.Provider value={{ toast, toggleToast, showToast }}>
      {children}
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;

// import React, { Component } from 'react'

// export default class ToasterProviderr extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//       content: null,
//       variant: "info",
//       options: {}
//     };
//   }

//   toggleToast = () =>
//     this.setState(state => ({ ...state, visible: !state.visible }));

//   setToast = toast =>
//     this.setState(state => ({ ...state, ...toast, visible: true }));

//   render() {
//     return (
//       <ToasterContext.Provider
//         value={{
//           toast: this.state,
//           toggleToast: this.toggleToast,
//           setToast: this.setToast
//         }}
//       >
//         {this.props.children}
//       </ToasterContext.Provider>
//     );
//   }
// }
