import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../constants/style";

const Button = styled.button`
  position: relative;
  width: 34px;
  height: 34px;
  background-color: #ff9224;
  margin-left: -1px;
  margin-top: -1px;
  padding: 4px;

  ${MEDIA_QUERY_MD} {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: #4f4f4f;
  }
`;

const Mark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${(props) => (props.value ? "25px" : "")};
  width: ${(props) => (props.value ? "25px" : "")};
  border-radius: ${(props) => (props.value ? "50%" : "")};
  background-color: ${(props) =>
    props.value && props.value === "W" ? "white" : "black"};

  ${MEDIA_QUERY_MD} {
    height: ${(props) => (props.value ? "15px" : "")};
    width: ${(props) => (props.value ? "15px" : "")};
  }
`;

export function ResetButton({ children, onClick }) {
  return (
    <div
      className="resetButton"
      style={{
        textAlign: "center",
        margin: "10px",
      }}
    >
      <button
        style={{
          backgroundColor: "#FF359A",
          cursor: "pointer",
          padding: "10px",
          borderRadius: "8px",
          color: "#FFF7FB",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export function ReaderSquare({ onClick, value }) {
  return (
    <Button onClick={onClick}>
      <Mark value={value} />
    </Button>
  );
}
