
import React, { FC, memo, useCallback, useMemo, useState } from 'react'
import './LoadingComponent.scss'
import LoadingIcon from './1.png'

interface CustomButtonProps extends JSX.Element {
  onClick: void
}

interface LoadingComponentProps {
  cancelLoad?: () => void
  timeCancel?: number
  CustomButton?: CustomButtonProps
}

const LoadingComponent: FC<LoadingComponentProps> = ({ cancelLoad, timeCancel, CustomButton }) => {


  const [isCancelShow, setIsCancelShow] = useState<Boolean>(false)

  const onCancelClick = useCallback(() => {
    cancelLoad && cancelLoad()
    setIsCancelShow(false)
  }, [cancelLoad])

  setTimeout(() => {
    setIsCancelShow(true)
  }, timeCancel || 10000) // current setting is 10 sec

  const customButton = useMemo(() => {
    if (!CustomButton) return <button onClick={onCancelClick}>Cancel</button>
    const updatedProps = CustomButton
    updatedProps.onClick = onCancelClick()
    return CustomButton
  }, [CustomButton, onCancelClick])

  return <div className='loading-component-root'>
    <div className='loading-component-child'>
      <div style={{ display: 'block' }}>

        <img src={LoadingIcon} alt="missing" className='loading-component-icon' />
        {isCancelShow && <div className="fade-in" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
          {customButton}

        </div>}
      </div>
    </div>
  </div >
}

export default memo(LoadingComponent)