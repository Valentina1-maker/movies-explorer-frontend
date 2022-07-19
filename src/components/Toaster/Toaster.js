import './Toaster.css'
import React from 'react'
import {useEffect, useState} from 'react'

function Toaster({ text, reset }) {
  const [isActive, setIsActive] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (text.length > 0) {
      setIsActive(true)
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => {
          setIsActive(false)
          setFadeOut(false)
          reset()
        }, 1000)
      }, 3000)
    }
  }, [text])

  return (
    <div className={`toaster ${isActive ? 'toaster_active': ''} ${fadeOut ? 'toaster_fade-out' : ''}`}>
      {text}
    </div>
  )
}

export default Toaster
