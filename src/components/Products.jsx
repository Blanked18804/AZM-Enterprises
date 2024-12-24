import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import virosil from '../assets/products/virosil.jpg'
import gsyLiverGuard from '../assets/products/gsy-liver-guard.jpg'
import stressCoolC from '../assets/products/stress-cool-c.jpg'
import vinaCalphos from '../assets/products/vina-calphos.jpg'
import gsyVitaminC from '../assets/products/gsy-vitamin-c.jpg'
import amcolin from '../assets/products/amcolin.jpg'
import doxitam from '../assets/products/doxitam.jpg'
import viroNil from '../assets/products/viro-nil.jpg'
import respoCare from '../assets/products/respo-care.jpg'
import adek from '../assets/products/adek.jpg'
import mintOil from '../assets/products/mint-oil.jpg'
import flor20 from '../assets/products/flor-20.jpg'
import livaton from '../assets/products/livaton.jpg'
import electro from '../assets/products/electro.jpg'

function Products() {

    const products = [
        {image: virosil, name: 'Virosil', comp: ['Salicylic Acid', 'Vitamin E', 'Lysozyme'], link: 'virosil'},
        {image: gsyLiverGuard, name: 'GSY Liver Guard', comp: ['Sorbitol', 'L-lysine', 'Magnesium Sulphate'], link: 'gsyLiverGuard'},
        {image: stressCoolC, name: 'Stress Cool C', comp: ['Sodium Chloride', 'Calcium Lactate', 'Calcium Gluconate'], link: 'stressCoolC'},
        {image: vinaCalphos, name: 'Vina Calphos', comp: ['Calcium', 'Phosphorus', 'Vitamin B12'], link: 'vinaCalphos'},
        {image: gsyVitaminC, name: 'GSY Vitamin C', comp: ['Vitamic C', 'Sorbitol'], link: 'gsyVitaminC'},
        {image: amcolin, name: 'Amcolin', comp: ['Amoxicillin Trihydrate', 'Colistin Sulphate', 'Clavulanic Acid'], link: 'amcolin'},
        {image: doxitam, name: 'Doxitam', comp: ['Tylosin Tartrate', 'Doxycyline Hyclate', 'Colistin Sulphate'], link: 'doxitam'},
        {image: viroNil, name: 'AZM Viro Nil', comp: ['Amonium Chloride', 'Methionine', 'Sorbitol'], link: 'viroNil'},
        {image: respoCare, name: 'AZM Respo Care', comp: ['Menthol', 'Eucalyptus Extract',  'Peppermint Oil'], link: 'respoCare'},
        {image: adek, name: 'Adek', comp: ['Vitamin A', 'Vitamin D3', 'Vitamin E'], link: 'adek'},
        {image: mintOil, name: 'AZM Mint Oil', comp: ['Menthol', 'Eucalyptus Oil', 'Camphor'], link: 'mintOil'},
        {image: flor20, name: 'Flor-20', comp: ['Florfenicol'], link: 'flor20'},
        {image: livaton, name: 'Livaton', comp: ['Sorbitol', 'Carnitine', 'Choline Chloride'], link: 'livaton'},
        {image: electro, name: 'AZM Electro', comp: ['Vitamin C', 'Sodium', 'Potassium'], link: 'electro'},
    ]

  return (
    <section id='products' className='px-16 flex flex-col gap-16 max-md:px-8'>
        <Heading topLabel='Products' botLabel='What We Provide' customStyle='items-center'/>
        <div className='grid grid-cols-3 gap-8 justify-center max-md:grid-cols-1'>
            {products.map((item, index) => {
                return(
                    <div key={index} className='p-4 border-2 border-border rounded-[32px] flex flex-col gap-4'>
                        <img className='max-w-full object-cover rounded-2xl' src={item.image} alt={item.name} />
                        <h2 className='bold-24 max-md:bold-16'>{item.name}</h2>
                        <div className='flex gap-2 items-center text-center flex-wrap'>
                            {item.comp.map((item, index) => {
                                return(
                                    <div key={index} className='bg-[#eeeeee] px-2 py-1 rounded-full bold-14'>
                                        <h3>{item}</h3>
                                    </div>
                                )
                            })}
                        </div>
                        <Link to={`/product/${item.link}`} className='btn mt-auto max-md:bold-16'>View Product</Link>

                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Products