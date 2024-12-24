import React from 'react'
import Amcolin from '../assets/products/amcolin.jpg'
import Doxitam from '../assets/products/doxitam.jpg'
import ViroNil from '../assets/products/viro-nil.jpg'
import RespoCare from '../assets/products/respo-care.jpg'
import Adek from '../assets/products/adek.jpg'
import MintOil from '../assets/products/mint-oil.jpg'
import Flor20 from '../assets/products/flor-20.jpg'
import Livaton from '../assets/products/livaton.jpg'
import Electro from '../assets/products/electro.jpg'
function ProductDetail({productId}) {

  const product = {
      amcolin: {
        image: Amcolin, 
        name: 'Amcolin', 
        type: 'Oral Powder', 
        packing: '1000 gm', 
        Composition: ['Each 100 gm contains:', 'Amoxicillin Trihydrate ---- 20 gm', 'Colistin Sulphate ---- 4 gm', 'Calvulanic Acid ---- 4 gm'], 
        desc: 'Amcolin is unique & effective combination of bactericidal antibiotics, amoxicillin and colistin. Best against a wide range of gram-negative and gram-positive bacteria.', dosage: 'Poultry: 1 gm per 2 to 4 liters of drinking water fot 3 to 5 days',
        litertaure: ''
        },
      doxitam: {
        image: Doxitam, 
        name: 'Doxitam', 
        type: 'Oral Powder', 
        packing: '1000 gm', 
        Composition: ['Each 100 gm contains:', 'Tylosin Tartrate ---- 10%', 'Doxycyline Hyclate(U,S,P) ---- 20%', 'Colistin Sulphate ---- 450MIU', 'Bromhexine HCI ---- 0.5%', 'Streptomycin Sulphate ---- 3.6%'], 
        desc: 'Doxitamn Oral Powder is indicated for the treatment and prevention of C.R.D, C.C.R.D., Fowl Cholera, Fowl Typhoid, infectious coryza, bacterial enteritis, early chick mortality the other respiratory tract infections.', 
        dosage: '1 gm per 2 liters of drinking water for 3 to 5 days or as directed by the vet physician.',
        litertaure: ''
        },
      viroNil: {
        image: ViroNil, 
        name: 'Viro Nil', 
        type: 'Oral Powder', 
        packing: '1000 gm', 
        Composition: ['Each 100 gm contains:', 'Ammonium Chloride ---- 70,000 mg', 'Methionine ---- 10,000 mg', 'Sorbitol ---- 5,000 mg', 'Vitamin A ---- 1,500 mg', 'vitamin C ---- 10,000 mg', 'Excepients ---- Q/S'], 
        desc: 'Azm Viro Nil is a diuretic drug that contains ammonium chloride, acidifies the urine and is used for the treatment and prevention of kidney stones and nephritis, inhibits the growth of bacteria and increase the renal excretion of toxins.It also contains methionine, which is an essential amino acid and acidifier, contains vitamins A and C, which act as an immunostimulant, and contains sorbitol that is an osmotic laxative and a diuretic.',
        dosage: 'Poultry: 150 gm into 200 liters of drinking water for 3 to 5 days. Animals: 1gm/10 kg body weight.',
        litertaure: ''          
        },
      respoCare: {
        image: RespoCare, 
        name: 'Respo Care', 
        type: 'Oral Liquid', 
        packing: '1000 ml', 
        Composition: ['Each 100 ml contains:', 'Menthol ---- 5,000 mg', 'Eucalyptus Extract ---- 12,000 mg', 'Peppermint Oil ---- 15,000 mg', 'Thyme Extract ---- 7,000 mg', 'Excepients ---- Q/S'], 
        desc: 'AZM RESPOCARE is a natural product composed of essential oils, indicated for strengthening the upper respiratory system. AZM RESPOCARE acts as a bronchodilator and gives ease in respiration and provides symptomatic relief in Respiratory Diseases (ND, IB, Influenza, Bronchitis & CRD). AZM RESPOCARE is recommended in difficult breathing and sneezing in extreme weather conditions.', 
        dosage: '1 ml per 1 liter of drinking water for 3 to 5 days.',
        litertaure: ''          
        },
      adek: {
        image: Adek, 
        name: 'Adek', 
        type: 'Oral Liquid', 
        packing: '1 Liter', 
        Composition: ['Each 1 liter contains:', 'Vitamin A (3a672b) ---- 20,000,000 iu', 'Vitamin D3 (E671) ---- 5,000,000 iu', 'Vitamin E (3a700) ---- 15,000 iu', 'Vitamin K3 (3a700) ---- 1,600 mg', 'Vitamin C (3a300) ---- 33,000 mg'], 
        desc: 'For the prevention and treatment of vitamins deficiencies, stress caused by vaccination, transportation, climate variation and poor feed intake. To prevent loss of blood during debeaking and coccidiosis, to promote fertility and to maintain optimum health performance.', 
        dosage: '1 ml per 10 Liter of drinking water for 07 days.',
        litertaure: ''          
        },
      mintOil: {
        image: MintOil, 
        name: 'Mint Oil', 
        type: 'Oral Solution', 
        packing: '1000 ml', 
        Composition: ['Each 1000 ml contains:', 'Menthol ---- 1,00,000 mg', 'Eucalyptus Oil ---- 1,00,000 mg', 'Camphor ---- 50,000 mg', 'Thyme Oil ---- 10,000 mg', 'Peppermint Oil ---- 25,000 mg', 'Glycyrrhiza ---- 20,000 mg'], 
        desc: 'AZM MINT OIL is indicated in respiratory problems e.g. Bird Flu, MG, ND, IB, ILT and other viral fungal and seasonal respiratory stress of poultry and cattle. In infections bronchitis infections. When birds are sneezing.', 
        dosage: '1ml in 4 litres of drinking water.',
        litertaure: ''          
        },
      flor20: {
        image: Flor20, 
        name: 'Flor-20', 
        type: 'Oral Liquid', 
        packing: '1 litre', 
        Composition: ['Each 100 ml contains:', 'Florfenicol ---- 20 gm'], 
        desc: 'Florfenicol is a synthetic broad-spectrum antibiotic. The active ingredient florfenicol is active against many gram-positive and gram-negative bacteria isolate domestic animals. It acts by inhibiting bacterial protein synthesis.', 
        dosage: '1 ml per 2 to 3 liters of drinking water for 3 to 5 days or as directed by the vet physician',
        litertaure: ''          
        },
      livaton: {
        image: Livaton, 
        name: 'Livaton', 
        type: 'Oral Solution', 
        packing: '1000 ml', 
        Composition: ['Each liter contains:', 'Sorbitol ---- 350,000 mg', 'Carnitine ---- 90,000 mg', 'Choline Chloride ---- 60,000 mg', 'Betaine ---- 30,000 mg', 'Methionine Acetyl ---- 25,000 mg', 'Silymarin (Craduus Marianus) ---- 10,000 mg', 'Inositol ---- 2%', 'Vitamin PP: 2,000 mg', 'L-Aspartic Acid ---- 10,000 mg', 'L-Glutamic Acid ---- 5,000 mg', 'L-Glycine ---- 5,000 mg', 'Magnesium Sulphate ---- 50,000 mg', 'Plant Extracts (Boldo artichoke)'], 
        desc: 'AZM Livaton is a veterinary medication that is indicated to improve liver function in animals. The product is claimed to stimulate sluggish liver parenchyma cells and restore liver functions. It improves feed metabolism and its utilization which results in better growth and productivity.', 
        dosage: 'Poultry: 1 gm per 2 to 4 liters of drinking water fot 3 to 5 days.',
        litertaure: ''          
        },
      electro: {
        image: Electro, 
        name: 'AZM Electro', 
        type: 'Oral Powder', 
        packing: '1000 gm', 
        Composition: ['Each 1000 gm contains:', 'Vitamin C ---- 20,000 mg', 'Sodium ---- 26,400 mg', 'Potassium ---- 8,000 mg', 'Bicarbonate ---- 41,000 mg', 'Magnesium ---- 80,000 mg', 'Chloride ---- 23,800 mg', 'Acetate ---- 2,200 mg', 'Excepients ---- Q/S'], 
        desc: 'AZM Electro, a unique combination of vitamin C and essential electrolytes. AZM Electro is a helpful for the growth and repair of tissues in all parts of body. It is necessary to form collagen, an important protein used to make skin, scar tissue, tendons, ligaments and blood vessels. AZM Electro is essential for the healing of wounds and for the repair and maintenance of cartilage, bones and teeth. It also helps to get the body out of stress due to disease, heat, cold, transportation or vaccination.', 
        dosage: '1 gm per 2 liters of drinking water for 3 to 5 days.',
        litertaure: ''          
        },
  }[productId]

  return (
    <section className='px-16 flex gap-16 items-center max-md:px-8 max-md:flex-col'>
      <div className='w-1/2 max-md:w-full'>
        <img className='max-w-full object-cover rounded-3xl' src={product.image} alt={product.name} />
      </div>
      <div className='w-1/2 flex flex-col gap-4 max-md:w-full'>
        <h1 className='bold-40 max-md:bold-24'>{product.name}</h1>
        <div className='flex gap-2'>
          <h2 className='bold-16 max-md:bold-14'>Type: </h2>
          <p className='reg-16 text-reg-text max-md:reg-14'>{product.type}</p>
        </div>
        <div className='flex gap-2'>
          <h2 className='bold-16 max-md:bold-14'>Packing: </h2>
          <p className='reg-16 text-reg-text max-md:reg-14'>{product.packing}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='bold-16 max-md:bold-14'>Composition: </h2>
          {product.Composition.map((item, index) => {
            return(
              <p key={index} className='reg-16 text-reg-text max-md:reg-14'>{item}</p>
            )              
          })}
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='bold-16 max-md:bold-14'>Description: </h2>
          <p className='reg-16 text-reg-text max-md:reg-14'>{product.desc}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='bold-16 max-md:bold-14'>Dosage: </h2>
          <p className='reg-16 text-reg-text max-md:reg-14'>{product.dosage}</p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail