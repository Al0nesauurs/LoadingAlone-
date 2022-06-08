import React, { memo, FC, useEffect } from 'react'
import './ReadingBar.scss';

interface ReadingBarProps {
  children?: React.ReactNode;
};

const ReadingBar: FC<ReadingBarProps> = (props: ReadingBarProps) => {
  const { children } = props

  useEffect(() => {
    const target = document.querySelector<HTMLElement>(".root") || { style: { transform: "" } } as HTMLElement
    target.style.transform = `translateX(${(target.offsetTop) * 100.00 / (document.body.scrollHeight - document.documentElement.clientHeight) - 100}%)`

    window.onscroll = function () {
      target.style.transform = `translateX(${(target.offsetTop) * 100.00 / (document.body.scrollHeight - document.documentElement.clientHeight) - 100}%)`
    };

  }, [])

  return <div className="root">
    {children}
  </div>
}

export default memo(ReadingBar)