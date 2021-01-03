import React, { useState } from 'react'

export interface ItemI {
  id: string
  src: string
}

export const Item = ({ id, src }: ItemI) => {
  const [gray, setGray] = useState(false)

  return (
    <img key={id} src={src} className={gray ? 'grayscale' : undefined} onClick={() => setGray(prev => !prev)} />
  )
}

