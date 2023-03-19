import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

/**
 * memo -> componentのメモ化
 * useCallback -> 関数のメモ化
 * useMemo -> 変数のメモ化
 */

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  // 毎回新しい関数を生成している判断になる
  // 第二引数が見張る値, 空だと最初だけ
  const onClickClose = useCallback(() => setOpen(false), []);

  // 変数のメモ化
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      {/* 新しい関数が渡される = propsが変更されている */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};
