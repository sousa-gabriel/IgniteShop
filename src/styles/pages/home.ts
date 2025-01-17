import { styled } from "..";

export const HomeContainer = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: "656px",
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "8px",
  cursor: "pointer",
  position: "relative",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: "8px",
    padding: "2rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",

    background: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.3s ease-in-out",

    strong: {
      color: "$white",
      fontSize: "$lg",
    },

    span: {
      color: "$green300",
      fontSize: "$xl",
      fontWeight: "bold",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
});
