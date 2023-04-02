import React, { ReactNode } from 'react'

interface ContextMenuProps {
    x: number,
    y: number,
}
function ContextMenu({children, props}:{children:ReactNode|ReactNode[], props: ContextMenuProps}) {
  return (
    <div
        style={{transform: "translate(50%, 50%)"}}
      className='p-2 absolute z-10 shadow rounded bg-white text-black min-w-[150px] top-0 left-0'
    >
        {children}
    </div>
  )
}

export default ContextMenu