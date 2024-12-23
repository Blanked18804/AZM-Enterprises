import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Header'
import ProductDetail from '../components/ProductDetail'
import Footer from '../components/Footer'

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