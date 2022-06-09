
import React, { memo } from 'react'
import './LoadingComponent.scss'
import LoadingIcon from './1.png'

const LoadingComponent = () => {

  return <div className='loading-component-root'>
    <div className='loading-component-child'>

      <img src={LoadingIcon} alt="missing" className='loading-component-icon' />
    </div>
  </div>
}

export default memo(LoadingComponent)