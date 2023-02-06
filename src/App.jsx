import React, { useEffect, useState } from "react";
import ColorfulMessage from "./conponents/ColorfulMessage";

/**
 * useStateについての注意
 * useStateが変更された場合AppのScriptが回るそのためAppが常に変更されるようなコードを書くとエラーの原因となる。
 */

const App = () => {
  console.log("saisyo");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };

  /**
   *
   */
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  /**
   * num: 変数, setNum: 更新関数
   * setNumに動作をつけることで変更処理をすることができる。
   */
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="blue">bdbdvvsvsvdvdv</ColorfulMessage>
      <ColorfulMessage color="pink" message="bdb" />
      <button onClick={onClickButton}>Count Up!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>

      {faceShowFlag && <p>Hello</p>}
    </>
  );
};

export default App;
