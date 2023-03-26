import { useMemo } from "react";
import word from "reading-time";

const getReadingTime = (content: string) => {
  return word(content).text;
};

const ReadingTime = ({ content }: { content: string }) => {
  const memoizedReadingTime: string = useMemo(() => getReadingTime(content), [content]);
  return <span>{memoizedReadingTime}</span>;
};

export default ReadingTime;
