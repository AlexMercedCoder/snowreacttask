import React from "react";

//GLBOBAL THEME, EFFECTS ALL COMPONENTS
const theme = {
  main: "navy",
  secondary: "white",
  bgColor: "#C7DEED",
};

/////////////////
// Button Component
/////////////////
export const Button = ({ label, customStyles, onClick }) => {
  const defaultStyles = {
    padding: "9px",
    borderRadius: "7px",
    border: `1px solid ${theme.main}`,
    color: theme.secondary,
    backgroundColor: theme.main,
    fontSize: "1.2em",
    transition: "color .3s, background-color .3s",
  };

  const styles = customStyles
    ? { ...defaultStyles, ...customStyles }
    : defaultStyles;

  const hover = (event) => {
    event.target.style.color = styles.backgroundColor;
    event.target.style.backgroundColor = styles.color;
    event.target.style.cursor = "pointer";
  };

  const dehover = (event) => {
    event.target.style.color = styles.color;
    event.target.style.backgroundColor = styles.backgroundColor;
    event.target.style.cursor = "default";
  };

  return (
    <button
      style={styles}
      onMouseOver={hover}
      onMouseOut={dehover}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

///////////////////
// Container Component
///////////////////
export const Container = ({ customStyles, children }) => {
  const defaultStyles = {
    width: "90%",
    margin: "10px auto",
    textAlign: "center",
    backgroundColor: theme.bgColor,
    padding: "10px",
  };

  const styles = customStyles
    ? { ...defaultStyles, ...customStyles }
    : defaultStyles;

  return <div style={styles}>{children}</div>;
};

/////////////////////
// Flex Container Component
//////////////////////
export const FlexContainer = ({ customStyles, children }) => {
  const defaultStyles = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "90%",
    margin: "10px auto",
    backgroundColor: theme.bgColor,
    padding: "10px",
  };

  const styles = customStyles
    ? { ...defaultStyles, ...customStyles }
    : defaultStyles;

  return <div style={styles}>{children}</div>;
};

/////////////////////////
// Card Component
/////////////////////////
export const Card = ({ children, customStyles }) => {
  const defaultStyles = {
    maxWidth: "300px",
    border: `3px solid ${theme.main}`,
    width: "90%",
    margin: "10px auto",
    backgroundColor: theme.bgColor,
    padding: "10px",
  };

  const styles = customStyles
    ? { ...defaultStyles, ...customStyles }
    : defaultStyles;
  return <div style={styles}>{children}</div>;
};

/////////////////////////
// Modal
/////////////////////////
export const Modal = ({ open, close, children }) => {
  const [display, setDisplay] = React.useState("none");

  const modal = {
    display,
    position: "fixed",
    zIndex: 1000,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
  };

  const content = {
    backgroundColor: theme.main,
    color: theme.secondary,
    margin: "15% auto",
    padding: "20px",
    border: `3px solid ${theme.bgColor}`,
    width: "80%",
  };

  const toggleModal = () => {
    if (display === "block") {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  };

  return (
    <div>
      <div style={modal}>
        <div style={content}>
          {children}
          <Button label={close} onClick={toggleModal} />
        </div>
      </div>
      <Button label={open} onClick={toggleModal} />
    </div>
  );
};

/////////////////////////
// Carousel
/////////////////////////
export const Carousel = ({ slides, customStyles = {}, className }) => {
  const [current, setCurrent] = React.useState(0);

  const slide = slides[current];

  const defaultStyles = {
    width: "300px",
    height: "300px",
    borderRadius: "7px",
  };

  const styles = customStyles
    ? { ...defaultStyles, ...customStyles }
    : defaultStyles;

  const back = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className={className}>
      <div>
        <img
          style={styles}
          src={slide.img}
          onClick={slide.click ? slide.click : null}
          alt={slide.alt ? slide.alt : current}
        />
      </div>
      <Button label="back" onClick={back} />
      <Button label="forward" onClick={next} />
    </div>
  );
};
