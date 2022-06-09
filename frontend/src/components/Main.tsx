import axios from 'axios';
import { useRef } from 'react';

export default function Main() {
  const logRef = useRef<HTMLUListElement>(null);

  setInterval(async () => {
    if (logRef.current) {
      const box: HTMLUListElement = logRef.current;

      const temp: HTMLLIElement = document.createElement('li');
      try {
        temp.innerText = await (
          await axios.get(`http://localhost:3001/`, {
            timeout: 1000,
          })
        ).data.msg;
      } catch {
        temp.innerText = '서버 에러';
      }
      box.append(temp);
      box.scrollTo(0, box.scrollHeight);
    }
  }, 2000);

  return (
    <div
      style={{
        margin: '0 auto',
        padding: '1rem',
        width: '270px',
        height: '80vh',
        border: '1px solid black',
      }}
    >
      <ul
        style={{
          height: '100%',
          overflowY: 'scroll',
          listStyle: 'none',
          paddingLeft: '0',
        }}
        ref={logRef}
      ></ul>
    </div>
  );
}
