import React, { memo, FC, useEffect } from 'react'
import './ReadingBar.scss';

interface ReadingBarProps {
  children?: React.ReactNode;
  height?: string;
  parentHeight?: number;
  color?: string;
};

const ReadingBar: FC<ReadingBarProps> = (props: ReadingBarProps) => {
  const { children, height, color, parentHeight } = props

  useEffect(() => {
    const target = document.querySelector<HTMLElement>(".root-reading-progress") || { style: { transform: "" } } as HTMLElement

    target.style.transform = `translateX(${(target.offsetTop) * 100.00 / (parentHeight || document.body.scrollHeight - document.documentElement.clientHeight) - 100}%)`

    window.onscroll = function () {
      target.style.transform = `translateX(${(target.offsetTop) * 100.00 / (parentHeight || document.body.scrollHeight - document.documentElement.clientHeight) - 100}%)`
    };

  }, [parentHeight])

  const customStyled = {
    height: height,
    backgroundColor: color
  }

  return <div style={customStyled} className='root-reading-progress'>
    {children}
  </div>
}

export default memo(ReadingBar)