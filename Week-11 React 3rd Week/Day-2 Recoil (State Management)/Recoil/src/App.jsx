
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

import './App.css'
import { counterAtom } from './store/atoms/counter';

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot >
  )
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount(c => c + 1);
  }
  return <div>
    <button onClick={increase}>
      Increase
    </button>
  </div>
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount(c => c - 1);
  }
  return <div>
    <button onClick={decrease}>
      decrease
    </button>
  </div>
}
function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Counter() {
  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

export default App
