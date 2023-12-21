import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCountState } from '@/stores/recoil/exampleRecoil';

function RecoilExampleBaseComponent() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);


  return (
    <div>
        <h2>Recoil example base component</h2>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <br />
        Character Count: {count}
    </div>
  );
}

export default RecoilExampleBaseComponent;
