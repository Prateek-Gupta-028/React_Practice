import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

function Hoc() {
  return (
    <div className='App'>
        <ClickCounter name='Prateek's/>
        <HoverCounter />
    </div>
  )
}

export default Hoc