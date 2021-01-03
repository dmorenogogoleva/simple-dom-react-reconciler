import React, { useCallback, useState } from 'react'
import { nanoid } from 'nanoid'
import { Item, ItemI } from './components/item/item'


const corgiSrc = 'http://placecorgi.com/300/300'
const kittenSrc = 'http://placekitten.com/300/300'

export const InitialRender: React.FC = () => {
  const [items, setItems] = useState<ItemI[]>([{ id: nanoid(), src: corgiSrc }])

  const addButtonHandler = useCallback(() => {
    setItems(prevItems => {
      const newItemSrc = prevItems.length % 2 === 0 ? corgiSrc : kittenSrc

      return [...prevItems, { id: nanoid(), src: newItemSrc }]
    })
  }, [items])

  return (
    <div>
      <button onClick={addButtonHandler}>add item</button>
      <div className="container">
        {items.map(item => <Item id={item.id} src={item.src} />)}
      </div>
    </div>
  )
}

