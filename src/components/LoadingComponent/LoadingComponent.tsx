
import React, { FC, memo } from 'react'
import './LoadingComponent.scss'
import LoadingIcon from './1.png'

interface LoadingComponentProps {
  cancelLoad?: () => void
}

const LoadingComponent: FC<LoadingComponentProps> = ({ cancelLoad }) => {

  return <div className='loading-component-root'>
    <div className='loading-component-child'>
      <div style={{ display: 'block' }}>

        <img src={LoadingIcon} alt="missing" className='loading-component-icon' />
        <div style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>

          <button onClick={cancelLoad}>Cancel</button>
        </div>
      </div>
    </div>
  </div >
}

export default memo(LoadingComponent)