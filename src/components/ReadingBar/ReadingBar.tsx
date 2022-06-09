import React, { memo, FC, useEffect } from 'react'
import './ReadingBar.scss';

interface ReadingBarProps {
  children?: React.ReactNode;
  height?: string;
  color?: string;
};

const ReadingBar: FC<ReadingBarProps> = (props: ReadingBarProps) => {
  const { children, height, color } = props

  useEffect(() => {
    const target = document.querySelector<HTMLElement>(".root") || { style: { transform: "" } } as HTMLElement

    target.style.transform = `translateX(${(target.offsetTop) * 100.00 / (document.body.scrollHeight - document.documentElement.clientHeight) - 100}%)`

    window.onscroll = function () {
      target.style.transform = `translateX(${(target.offsetTop) * 100.00 / (document.body.scrollHeight - document.documentElement.clientHeight) - 100}%)`
    };

  }, [])

  const customStyled = {
    height: height,
    backgroundColor: color
  }

  return <div style={customStyled} className='root'>
    {children}
  </div>
}

export default memo(ReadingBar)