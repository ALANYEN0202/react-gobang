import styled from "styled-components";
import { useState } from "react";
import { MEDIA_QUERY_MD } from "../constants/style";

const Title = styled.h1`
  width: 100%;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 640px;
  margin: 0 auto;
  text-align: center;
  ${MEDIA_QUERY_MD} {
    width: 440px;
    padding: 0px;
    margin: 0 auto;
  }
`;
const Button = styled.button`
  width: 34px;
  height: 34px;
  background-color: #ff9224;
  margin-left: -1px;
  margin-top: -1px;
  padding: 4px;
  line-height: 35px;

  ${MEDIA_QUERY_MD} {
    width: 24px;
    height: 24px;
    line-height: 15px;
  }

  &:hover {
    background-color: #4f4f4f;
  }
`;

const NextPlayer = styled.div`
  text-align: center;
`;

function ReaderSquare({ onClick, value, children }) {
  return (
    <Button value={value} onClick={onClick}>
      {children}
    </Button>
  );
}

function App() {
  const [board, setBoard] = useState(Array(19).fill(Array(19).fill(null)));
  const [whiteIsNext, setWhiteIsNext] = useState(true);

  function updateBoard(x, y, newValue) {
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[y][x] = newValue;
    setBoard(newBoard);
  }

  function Board() {
    const handleButtonClick = (arr) => {
      updateBoard(arr[0], arr[1], whiteIsNext ? "O" : "X");
      setWhiteIsNext(!whiteIsNext);
    };
    let arr = [];
    for (let i = 0; i < 19; i++) {
      arr[i] = [];
      for (let j = 0; j < 19; j++) {
        arr[i][j] = (
          <ReaderSquare
            key={`${i},${j}`}
            value={[i, j]}
            onClick={() => {
              handleButtonClick([i, j]);
            }}
            children={board[j][i]}
          />
        );
      }
    }
    return arr;
  }
  return (
    <div className="App">
      <Title>五子棋遊戲</Title>
      <NextPlayer>NextPlayer is {whiteIsNext ? "白子" : "黑子"}</NextPlayer>
      <Wrapper>
        <Board />
      </Wrapper>
    </div>
  );
}

export default App;
