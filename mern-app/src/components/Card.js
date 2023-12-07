import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './CartProvider'
export default function Card(props) {
  let dispatch = useDispatchCart()
  let data = useCart()
  const priceRef = useRef()
  let option = props.options ?? {}
  let priceOptions = Object.keys(option)
  let foodItem = props.foodItem
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('')
  const handleAddToCart = async () => {
    await dispatch({
      type: 'ADD',
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      size: size,
    })
    console.log(data)
  }
  let finalPrice = qty * parseInt(option[size])
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])
  return (
    <div
      style={{
        margin: '20px',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: '30px',
        boxShadow: '18px 20px 40px -10px gray',
      }}
    >
      <div
        className='card mt-3 '
        style={{ width: '20rem', maxHeight: '500px', padding: '10px' }}
      >
        <img
          src={props.imgsrc}
          className='card-img-top rounded'
          alt='...'
          style={{ height: '180px', objectFit: 'fill' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.foodItem.name}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className='container w-100'>
            <select
              className='m-2 h-100 bg-success rounded mx-2'
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                )
              })}
            </select>
            <select
              className=' h-100 rounded bg-sucess mx-2'
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                )
              })}
            </select>

            <div className='h-100 fs-5 d-inline mx-2'>{finalPrice}/-</div>
            <hr />
            <div
              className='btn btn-success justify-center ms-2'
              onClick={handleAddToCart}
              style={{
                color: 'white',
                fontWeight: 'bolder',
                boxShadow: '10px 10px 30px -10px gray',
              }}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
