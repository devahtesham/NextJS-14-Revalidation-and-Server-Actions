"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'

const Button = () => {
  const { pending } = useFormStatus();
  // console.log('[pending]', pending)
  return (
    <button type="submit" className="btn btn-primary my-4">
      {
        pending ? "Adding..." : "Submit"
      }
    </button>
  )
}

export default Button