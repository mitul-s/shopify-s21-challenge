export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '"Heebo", "Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      '"Poppins","Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    text: "#ffffff",
    secondaryText: "#212326",
    background: "#f3fcf4",
    primary: "#054a49",
    secondary: "#006fbb",
    highlight: "#67ccc3",
    muted: "#e6e6e6",
    gray: "#dfe3e8",
    accent: "#d6f8f3",
    darken: "#004c3f",
    darkest: "#002e25",
    outline: "#008060",
    modes: {
      dark: {
        text: "#454f5b",
        secondaryText: "#212326",
        primary: "#5c6ac4",
        outline: "#006fbb",
        darken: "#00044c",
        background: "#fff",
        accent: "#dfe3e8",
        highlight: "#ffffff",
        muted: "#f2f2f2",
        darkest: "#001429",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  layout: {
    coreBox: {
      height: "auto",
      padding: "2.5rem 2rem",
      minHeight: ["0vh", "100vh"],
      bg: "muted",
    },
  },
  text: {
    title: {
      fontSize: "3rem",
    },
  },
  buttons: {
    nominate: {
      width: "100%",
      borderRadius: "4px",
      backgroundColor: "outline",
      color: "white",
      border: "1px solid transparent",
      transition: "150ms ease",
      outline: "none",
      "&:disabled": {
        backgroundColor: "#C4CDD5",
      },
      "&:hover": {
        "&:not([disabled])": {
          backgroundColor: "darken",
          transform: "translateY(-2px)",
          boxShadow: "0 5px 25px 0 rgba(0,0,0,0.25)",
        },
      },
      "&:active": {
        "&:focus": {
          backgroundColor: "darkest",
          border: "1px solid",
          borderColor: "darkest",
          boxShadow: "0 0 0.1875em 0.1875em rgba(0,128,96,0.5)",
        },
      },
    },
    iconBtn: {
      borderRadius: "50px",
      backgroundColor: "secondary",
      border: "1px solid transparent",
      padding: "10px",
      width: "45px",
      height: "45px",
      outline: "none",
      transition: "300ms ease",
      boxShadow: "0 0 0.1075em 0.1075em white",
      "&:hover": {
        backgroundColor: "primary",
        border: "1px solid",
        borderColor: "seconary",
      },
    },
  },
  centerBox: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  movieCard: {
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow:
      "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
    width: "",
    height: ["200px", "300px"],
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};