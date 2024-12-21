import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import ProductDetail from '../components/sections/ProductDetail'
import Footer from '../components/sections/Footer'

function Product() {

    const id = useParams()

    console.log(id.productId)

  return (
    <>
      <Navbar />
      <ProductDetail productId={id.productId} />
      <Footer />
    </>
  )
}

export default Product