import React from 'react'

const AppContext = ({ children, className = "" }) => {
  return (
    <div className={`${className} max-w-[1332px] mx-auto px-[20px]`}>
      {children}
    </div>

  )
}

export default AppContext
