import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/sections/Header'
import ProductDetail from '../components/sections/ProductDetail'
import Footer from '../components/sections/Footer'

function Product() {

    const id = useParams()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <>
      <Navbar />
      <ProductDetail productId={id.productId} />
      <Footer />
    </>
  )
}

export default Product