
import { useState, useEffect } from 'react';

export default function useConfetti(trigger, confettiRef) {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [pop, setPop] = useState(false);
  const [run, setRun] = useState(false);

  // SETTING CONFETTI CONTAINER
  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [confettiRef]);

  // WATCHING NOMINATED ARRAY TO POP CONFETTI
  useEffect(() => {
    if (trigger.length === 5) {
      setRun(true);
      setPop(true);
      setTimeout(() => {
        setPop(false);
      }, 5000);
    }
  }, [trigger]);

  return { height, width, run, pop };
}
