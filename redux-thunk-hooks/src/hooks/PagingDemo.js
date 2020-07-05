import { useState } from "react";

export default (topPage, lastPage) => {
  const initHistory = [topPage];
  const [history, setHistory] = useState(initHistory);

  const currentPage = history[history.length - 1];

  const Top = () => {
    if (currentPage !== topPage) {
      const nextHistory = [...history, topPage];
      setHistory(nextHistory);
    }
  };

  const Next = () => {
    const nextPage = currentPage + 1;

    if (nextPage <= lastPage) {
      const nextHistory = [...history, nextPage];
      setHistory(nextHistory);
    }
  };

  const Back = () => {
    if (history.length > 1) {
      const nextHistory = [...history.slice(0, history.length - 1)];
      setHistory(nextHistory);
    }
  };

  const Last = () => {
    if (currentPage !== lastPage) {
      const nextHistory = [...history, lastPage];
      setHistory(nextHistory);
    }
  };

  const Reset = () => {
    setHistory(initHistory);
  };

  return [currentPage, Top, Next, Back, Last, Reset];
};
