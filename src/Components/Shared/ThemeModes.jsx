import { forwardRef } from "react";
import { useSelector } from "react-redux";

const ThemeModes = forwardRef(function ThemeModes({
  children,
  tagName = "div",
  style: propsStyle = {},
  ...rest
}, ref) {
  const mode = useSelector((state) => state.mode.mode);

  const divAndTextMode = {
    color: mode === "dark" ? "white" : "black",
  };

  const divSimple = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "black" : "white",
  };

  const grayDiv = {
    backgroundColor: mode === "dark" ? "#7A7A7A" : "#F6F6F7",
    color: mode === "dark" ? "white" : "black",
  };

  const grayLi = {
    backgroundColor: mode === "dark" ? "#7A7A7A" : "#F6F6F7",
    color: mode === "dark" ? "white" : "black",
  };

  const grayToGray = {
    backgroundColor: mode === "dark" ? "gray" : "#F6F6F7",
    color: mode === "dark" ? "white" : "black",
  }

  const divBgGradient = {
    background:
      mode === "dark"
        ? "linear-gradient(93deg, rgba(242, 0, 0, 0.3) 16.08%, rgba(233, 0, 0, 0) 71.61%), #ff7f77"
        : "linear-gradient(93deg, rgba(255, 255, 255, 0.3) 16.08%, rgba(255, 255, 255, 0) 71.61%), #f2e2ff",
  };
  const divBgGradient2 = {
    background:
      mode === "dark"
        ? "linear-gradient(to right, #9d0000, #d40000)"
        : "linear-gradient(150deg, #dd37d0, #8c1ff2)"
  };

  const textRedBlack = {
    color: mode === "dark" ? "red" : "black",
  };

  const textPurpleRed = {
    color: mode === "dark" ? "red" : "#A73AFD",
  };

  const priceMode = {
    color: mode === "dark" ? "#c30000" : "#a73afd",
  };

  const footerMode = {
    backgroundColor: mode === "dark" ? "#3a3a3a" : "rgba(211, 212, 221, 0.24)",
  };

  const h4Mode = {
    color: mode === "dark" ? "#e90000" : "#242424",
  };

  const simpleButton = {
    color: mode === "dark" ? "white" : "black",
    borderBottomColor: mode === "dark" ? "white" : "black",
    cursor: "pointer",
    borderRight: "none",
    borderTop: "none",
    borderLeft: "none",
    borderBottom: "1px dashed",
    textDecoration: "none",
    backgroundColor: "transparent",
  };

  const grayMode = {
    color: mode === "dark" ? "rgb(220,220,220)" : "#868695",
    lineHeight: "22px",
    fontWeight: 400,
  };

  const spanMode = {
    color: mode === "dark" ? "white" : "black",
    fontSize: "18px",
  };

  const buttonMode = {
    backgroundColor: mode === "dark" ? "#c30000" : "#a73afd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonModeDeliveries = {
    backgroundColor: mode === "dark" ? "#c30000" : "#a73afd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "43px",
    fontWeight: 600,
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
    border: 'none'
  };

  switch (tagName) {
    case "p":
      return (
        <p style={{ ...divAndTextMode, ...propsStyle }} {...rest} ref={ref}>
          {children}
        </p>
      );
    case "div":
      return (
        <div {...rest} style={{ ...divAndTextMode, ...propsStyle }}>
          {children}
        </div>
      );
    case "simpleButton":
      return (
        <button
          {...rest}
          style={{ ...simpleButton, ...propsStyle }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = mode === "dark" ? "#a2a2a2" : "red")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = mode === "dark" ? "white" : "black")
          }
        >
          {children}
        </button>
      );

    case "button_mode":
      return (
        <button
          {...rest}
          style={{ ...buttonModeDeliveries, ...propsStyle }}
          onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor =
            mode === "dark" ? "#e60000" : "#9c34eb")
          }
          onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor =
            mode === "dark" ? "#c30000" : "#a73afd")
          }
        >
          {children}
        </button>
      );
    case "button":
      return (
        <div
          {...rest}
          style={{ ...buttonMode, ...propsStyle }}
          onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor =
            mode === "dark" ? "#e60000" : "#9c34eb")
          }
          onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor =
            mode === "dark" ? "#c30000" : "#a73afd")
          }
        >
          {children}
        </div>
      );
    case "btnQuickView":
      return (
        <div
          {...rest}
          style={{ ...propsStyle }}
          onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor =
            mode === "dark" ? "#e60000" : "#9c34ebee")
          }
          onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor =
            mode === "dark" ? null : null)
          }
        >
          {children}
        </div>
      );
    case "price-span":
      return (
        <span {...rest} style={{ ...priceMode, ...propsStyle }}>
          {children}
        </span>
      );
    case "gn-span":
      return (
        <span {...rest} style={{ ...grayMode, ...propsStyle }}>
          {children}
        </span>
      );
    case "gn-p":
      return (
        <p {...rest} style={{ ...grayMode, ...propsStyle }}>
          {children}
        </p>
      );
    case "label":
      return (
        <p {...rest} style={{ ...textRedBlack, ...propsStyle }}>
          {children}
        </p>
      );
    case "p-red":
      return (
        <p {...rest} style={{ ...textRedBlack, ...propsStyle }}>
          {children}
        </p>
      );
    case "grayToGray":
      return (
        <p {...rest} style={{ ...grayToGray, ...propsStyle }}>
          {children}
        </p>
      );
    case "span":
      return (
        <span style={{ ...spanMode, ...propsStyle }} {...rest}>
          {children}{" "}
        </span>
      );
    case 'gray-li':
      return (
        <li {...rest} style={{ ...grayLi, ...propsStyle }}>
          {children}
        </li>
      );
    case "gray-div":
      return (
        <div {...rest} style={{ ...grayDiv, ...propsStyle }}>
          {children}
        </div>
      );
    case "gradient-div":
      return (
        <div {...rest} style={{ ...divBgGradient, ...propsStyle }}>
          {children}
        </div>
      );
    case "gradient-div-2":
      return (
        <div {...rest} style={{ ...divBgGradient2, ...propsStyle }}>{children}</div>
      )
    case "footer":
      return (
        <footer {...rest} style={{ ...footerMode, ...propsStyle }}>
          {children}
        </footer>
      );
    case "a":
      return (
        <a {...rest} style={{ ...divAndTextMode, ...propsStyle }}>
          {children}
        </a>
      );
    case "h4":
      return (
        <h4 {...rest} style={{ ...h4Mode, ...propsStyle }}>
          {children}
        </h4>
      );
    case "h3":
      return (
        <h3
          {...rest}
          style={{ ...textRedBlack, ...propsStyle }}
        >
          {children}
        </h3>
      );
    case "h5":
      return (
        <h4 {...rest} style={{ ...divAndTextMode, ...propsStyle }}>
          {children}
        </h4>
      );
    case "h1":
      return (
        <h1 {...rest} style={{ ...textRedBlack, ...propsStyle }}>
          {children}
        </h1>
      );
    case "purpleP":
      return (
        <p
          {...rest}
          style={{ ...textPurpleRed, ...propsStyle }}
        >
          {children}
        </p>
      );
    case "simpleDiv":
      return (
        <div ref={ref} {...rest} style={{ ...divSimple, ...propsStyle }}>
          {children}
        </div>
      );
    default:
      return (
        <div {...rest} style={{ ...divSimple, ...propsStyle }}>
          {children}
        </div>
      );
  }
});

export default ThemeModes;
