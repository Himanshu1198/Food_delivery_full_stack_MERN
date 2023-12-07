import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import img_1 from './img_1.jpg'
import img_2 from './img_2.jpg'
import img_3 from './img_3.jpg'
export default function Home() {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodcat] = useState([])
  const [foodItem, setFooditem] = useState([])

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    response = await response.json()
    setFooditem(response[0])
    setFoodcat(response[1])
    console.log(response[0], response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div>
            <div
              id='carouselExampleIndicators'
              class='carousel slide'
              data-bs-ride='carousel'
              style={{ objectFit: 'contain !important' }}
            >
              <div class='carousel-indicators'>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='0'
                  class='active'
                  aria-current='true'
                  aria-label='Slide 1'
                ></button>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='1'
                  aria-label='Slide 2'
                ></button>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='2'
                  aria-label='Slide 3'
                ></button>
              </div>
              <div class='carousel-inner' id='carousel'>
                <div className='carousel-caption' style={{ zIndex: '10' }}>
                  <div class='d-flex justify-content-center'>
                    <input
                      class='form-control me-2'
                      type='search'
                      placeholder='Search'
                      aria-label='Search'
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value)
                      }}
                      style={{ boxShadow: '8px 3px 7px 0px cyan' }}
                    />
                    <button
                      class='btn btn-success mx-2'
                      style={{ color: 'white', fontWeight: 'bolder' }}
                      type='submit'
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div class='carousel-item active'>
                  <img
                    src={img_1}
                    class='d-block w-100'
                    alt='...'
                    // style={{ filter: 'brightness(30%)' }}
                  />
                </div>
                <div class='carousel-item'>
                  <img src={img_2} class='d-block w-100' alt='...' />
                </div>
                <div class='carousel-item'>
                  <img src={img_3} class='d-block w-100' alt='...' />
                </div>
              </div>
              <button
                class='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide='prev'
              >
                <span
                  class='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span class='visually-hidden'>Previous</span>
              </button>
              <button
                class='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide='next'
              >
                <span
                  class='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span class='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className='container my-4'>
          {/* {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div>
                <div key={data._id}>{data.CategoryName}</div>
                <hr /> */}
          <div className='row mb-3'>
            <div className='fs-3 m-3'>Starters</div>
            <hr />
            {foodItem !== [] ? (
              foodItem
                .filter(
                  (item) =>
                    item.CategoryName === 'Starter' &&
                    item.name.toLowerCase().includes(search.toLocaleLowerCase())
                )
                .map((filterItems) => {
                  return (
                    <div
                      key={filterItems._id}
                      className='col-12 col-md-6 col-lg-4'
                    >
                      <Card
                        foodItem={filterItems}
                        options={filterItems.options[0]}
                        imgsrc={filterItems.img}
                      ></Card>
                    </div>
                  )
                })
            ) : (
              <div>Data not found!</div>
            )}
          </div>

          <div className='row mb-3'>
            <div className='fs-3 m-3'>Biryani/Rice</div>
            <hr />
            {foodItem !== [] ? (
              foodItem
                .filter(
                  (item) =>
                    item.CategoryName === 'Biryani/Rice' &&
                    item.name.toLowerCase().includes(search.toLocaleLowerCase())
                )
                .map((filterItems) => {
                  return (
                    <div
                      key={filterItems._id}
                      className='col-12 col-md-6 col-lg-4'
                    >
                      <Card
                        foodItem={filterItems}
                        options={filterItems.options[0]}
                        imgsrc={filterItems.img}
                      ></Card>
                    </div>
                  )
                })
            ) : (
              <div>Data not found!</div>
            )}
          </div>

          <div className='row mb-3'>
            <div className='fs-3 m-3'>Pizza</div>
            <hr />
            {foodItem !== [] ? (
              foodItem
                .filter(
                  (item) =>
                    item.CategoryName === 'Pizza' &&
                    item.name.toLowerCase().includes(search.toLocaleLowerCase())
                )
                .map((filterItems) => {
                  return (
                    <div
                      key={filterItems._id}
                      className='col-12 col-md-6 col-lg-4'
                    >
                      <Card
                        foodItem={filterItems}
                        options={filterItems.options[0]}
                        imgsrc={filterItems.img}
                      ></Card>
                    </div>
                  )
                })
            ) : (
              <div>Data not found!</div>
            )}
          </div>

          {/* </div>
            )
          })
        ) : (
          <div>"""""""""""""</div>
        )} */}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
