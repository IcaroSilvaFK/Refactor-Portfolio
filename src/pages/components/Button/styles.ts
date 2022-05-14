import { styled } from "@stitches/react";

export const ButtonVariant = styled("button", {
  variants: {
    color: {
      outline: {
        backgroundColor: "transparent",
        color: "#bd3dbd",
        border: "1px solid #bd3dbd",
        width: "100px",
        height: "40px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "#bd3dbd",
          transition: "all",
          transitionDuration: ".2s",
          color: "#fff",
        },
      },
      full: {
        backgroundColor: "#bd3dbd",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        color: "#fff",
        width: "150px",
        height: "40px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        "&:hover": {
          transform: "scale(1.1)",
          transition: "all",
          transitionDuration: ".2s",
        },
      },
    },
  },
});
