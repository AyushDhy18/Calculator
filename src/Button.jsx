import React from 'react'

function Button({ children, onClick }) {

  return (
    <button className="text-2xl p-4 mr-3 mb-4 w-20 text-center text-white shadow shadow-emerald-200 hover:bg-emerald-600" value={children} onClick={onClick} > {children}</button >)
}

export default Button