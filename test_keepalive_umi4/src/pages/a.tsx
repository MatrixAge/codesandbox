import { useEffect, useState } from 'react'
import { keepAlive } from 'react-fiber-keep-alive'

const Index = () => {
  const [v, setV] = useState(0);

  console.log(v);

  useEffect(() => {
    let is_mounted = true;

    const timer = setInterval(() => {
      if (is_mounted) {
        console.log('setV');

        setV(v + 1);
      }
    }, 1000);

    return () => {
      is_mounted = false;

      clearInterval(timer);
    };
  }, [v]);

  return <div>{v}</div>;
};

export default keepAlive(Index, () => 'A');
