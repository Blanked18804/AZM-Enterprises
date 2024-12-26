import React from "react"
import Virosil from "../assets/products/virosil.jpg"
import GsyLiverGuard from "../assets/products/gsy-liver-guard.jpg"
import StressCoolC from "../assets/products/stress-cool-c.jpg"
import VinaCalphos from "../assets/products/vina-calphos.jpg"
import GsyVitaminC from "../assets/products/gsy-vitamin-c.jpg"
import Amcolin from "../assets/products/amcolin.jpg"
import Doxitam from "../assets/products/doxitam.jpg"
import ViroNil from "../assets/products/viro-nil.jpg"
import RespoCare from "../assets/products/respo-care.jpg"
import Adek from "../assets/products/adek.jpg"
import MintOil from "../assets/products/mint-oil.jpg"
import Flor20 from "../assets/products/flor-20.jpg"
import Livaton from "../assets/products/livaton.jpg"
import Electro from "../assets/products/electro.jpg"
function ProductDetail({productId}) {

  const product = {
    virosil: {
      image: Virosil, 
      name: "Virosil", 
      type: "Water Soluble Powder", 
      packing: "1 kg/jar", 
      Composition: "Each kg contains: \nVitamin E ---- 200 g \nVitamin C ---- 100 g \nSalicylic Acid ---- 100 g \nLysozyme ---- 500 g \nSelenium ---- 20 g", 
      desc: "VIROSIL powder is applied as nutritional supplements during immune booster, Supplement provides strong immunity against New castle, 1B, Influenza and viral respiratory diseases_Enhance immunity: As the body's non - specific immune factors, VIROSIL powder participates in a variety of immune responses. In body's normal defense function and non - specific immunity has an imponant role_Requlate the balance of intestinal flora: VIROSIL powder can directly or indirectly regulate the intestinal microbes. reduce harmful microorganisms in the intestinal tract, promote the growth and reproduction of beneficial microorganisms, and maintain the effective dynamic balance of the intestinal flora_Repair of wound tissue: VIROSIL powder can activating platelets, also can improve local tissue blood circulation disorders decompose pus, repair wound tissue, and enhance the local defense function of organs or tissues.", 
      dosage: "1st week: 25 gm for 1000 birds twice daily via drinking water \n3rd week: 50 gm for 1000 birds twice daily via drinking water \n5th week: 75 - 100 gm for 1000 birds twice daily via drinking water \nBreeder/Layer: 100 gm for 1000 birds twice daily via drinking water as  irected by Animal Nutritionist/veterinarian",
      litertaure: ""
    },
    gsyLiverGuard: {
      image: GsyLiverGuard, 
      name: "GSY Liver Guard", 
      type: "Liquid", 
      packing: "1 Liter", 
      Composition: "Each 1 litre contains: \nSorbitol ---- 30,000 mg \nL-Lysine ---- 10,000 mg \nMagnesium Sulphate ---- 50 mg \nCholine Chloride ---- 30mg \nMethionine ---- 5000 mg \nSilymarin extract ---- 3000 mg \nNicotinamide ---- 3000 mg \nInositol ---- 3000 mg \nBetain ---- 8000 mg \nL-Carnitine ---- 4000 mg \nAspartic Acid ---- 1000 mg \nGlutamic Acid ---- 5000 mg", 
      desc: "GSY- LIVER GUARD is used to stimulates liver metabolism. It increases bile production and pancreatic enzymes. \nIt vitally enhances intestinal function and increases the maximum utilization of nutrients. It regenerates the liver cells, prevent fat accumulation in liver. Metabolize cholesterol in arteries and liver. It accelerates the function and detoxify the harmful ammonia effect. \nFor poultry: Improves FCR & better weight gain. Ensure quick recovery during anti -biotic therapy",
      dosage: "Poultry: 1ml per 5 liter via drinking water.",
      litertaure: ""
    },
    stressCoolC: {
      image: StressCoolC, 
      name: "Stress Cool C", 
      type: "Animal Feed", 
      packing: "1 kg", 
      Composition: "Each 100 gm, contains: \nSodium Chloride ---- 1.0 gm \nCalcium Lactate ---- 1.2 gm \nCalcium Gluconate ---- 1.2 gm \n Sodium Bicarbonate ---- 3.0 gm \nSodium Citrate ---- 2.0 gm \nPotassium Chloride ---- 3.0 gm \nBetaine Hydrochloride ---- 5.0 gm \nMagnesium Sulphate ---- 1.0 gm  \nAdaptogen ---- 2.0 gm \nVitamin C ---- 15.0 gm \nVitamin A ---- 1200 IU \nDL-Methionine ---- 2.0 gm \nCarrier as Dextrose Monohydrate", 
      desc: "Stress Cool C provide benefits in \n1. Boosting production & growth for all types of animal, layer & broiler. \n2. Enhancing immunity, providing strength in animals & aqua and support to ionic imbalance of body. \n3. Best suitable alternative in summer to avoid dehydration and best suitable stress reliever for animals & newborn.", 
      dosage: "Livestock, poultry & aqua: 500-1000gm/ton of feed or water continuously. \nCalves/Sheep/goat: 20gm/animal/day continuously. \nCows and Buffaloes: 75 gm/animal/day continuously.",
      litertaure: ""
    },
    vinaCalphos: {
      image: VinaCalphos, 
      name: "Vina Calphos", 
      type: "Oral Liquid", 
      packing: "5 L", 
      Composition: "Each 100ml Contains: \nCalcium ---- 3500 mg \nPhosphorus ---- 1750 mg \nVitamin B12 ---- 200 ug \nVitamin D3 ---- 20,000 IU \nCopper ---- 50 mg \nBiotin ---- 2 mg \nCarbohydrate ---- 40,000 mg \nEnergy value ---- 160 Kcal ", 
      desc: "The benefits of Vina Calphos are \n1. lmprove milk yield \n2. Helps for better growth. \n3. Increase health and immunity. \n4_Better fertility in females. \n5. Better strength in bullocks. \n6. Improves egg size, colour& production in layers.", 
      dosage: "Cow & buffaloes: 50 gm \nGoat & Calves: 20 gm \nIn Poultry & dairy feed 200 gm/100 Kg of feed (or) as advised by a veterinarian ornutritionist",
      litertaure: ""
    },
    gsyVitaminC: {
      image: GsyVitaminC, 
      name: "GSY Vitamin C", 
      type: "Oral Powder", 
      packing: "1 kg/jar", 
      Composition: "Each Kg Contains: \n Vitamin C ---- 80% \nSorbitol ---- 20%", 
      desc: "It is used to relieve the pain and aches, reduce fever and stress caused by vaccination,transportation, extreme weather, blood testing, grading coryza and other infections. It is used to prevent the birds from heat stroke, reduce death rate due to extreme heat. Reduce the pain and inflammation. Develop resistance  to combat the disease. It helps bird to beat the heat and dehydration effectively. It required for the growth & repair of tissues in all parts of body. It helps to from Cartilage, Bones, teeth and collagen which is an Important protein used to make skin, scar tissues, tendons, ligaments & blood vessels & for the repair &  maintenance of cartilage tones 7 teeth. It is one of many antioxidants. It also  helps to get the body out of stress due to disease, heat, cold, transportation or vaccination.", 
      dosage: "1gm/2Liters of water for 4 - 5 consecutive days.",
      litertaure: ""
    },
    amcolin: {
      image: Amcolin, 
      name: "Amcolin", 
      type: "Oral Powder", 
      packing: "1000 gm", 
      Composition: "Each 100 gm contains: \nAmoxicillin Trihydrate ---- 20 gm \nColistin Sulphate ---- 4 gm \nCalvulanic Acid ---- 4 gm", 
      desc: "Amcolin is unique & effective combination of bactericidal antibiotics, amoxicillin and colistin. Best against a wide range of gram-negative and gram-positive bacteria.", dosage: "Poultry: 1 gm per 2 to 4 liters of drinking water fot 3 to 5 days",
      litertaure: ""
    },
    doxitam: {
      image: Doxitam, 
      name: "Doxitam", 
      type: "Oral Powder", 
      packing: "1000 gm", 
      Composition: "Each 100 gm contains: \nTylosin Tartrate ---- 10% \nDoxycyline Hyclate(U,S,P) ---- 20% \nColistin Sulphate ---- 450 MIU \nBromhexine HCI ---- 0.5% \nStreptomycin Sulphate ---- 3.6%",
      desc: "Doxitamn Oral Powder is indicated for the treatment and prevention of C.R.D, C.C.R.D., Fowl Cholera, Fowl Typhoid, infectious coryza, bacterial enteritis, early chick mortality the other respiratory tract infections.", 
      dosage: "1 gm per 2 liters of drinking water for 3 to 5 days or as directed by the vet physician.",
      litertaure: ""
    },
    viroNil: {
      image: ViroNil, 
      name: "Viro Nil", 
      type: "Oral Powder", 
      packing: "1000 gm", 
      Composition: "Each 100 gm contains: \nAmmonium Chloride ---- 70,000 mg \nMethionine ---- 10,000 mg \nSorbitol ---- 5,000 mg \nVitamin A ---- 1,500 mg \nvitamin C ---- 10,000 mg \nExcepients ---- Q/S", 
      desc: "Azm Viro Nil is a diuretic drug that contains ammonium chloride, acidifies the urine and is used for the treatment and prevention of kidney stones and nephritis, inhibits the growth of bacteria and increase the renal excretion of toxins.It also contains methionine, which is an essential amino acid and acidifier, contains vitamins A and C, which act as an immunostimulant, and contains sorbitol that is an osmotic laxative and a diuretic.",
      dosage: "Poultry: 150 gm into 200 liters of drinking water for 3 to 5 days. Animals: 1gm/10 kg body weight.",
      litertaure: ""          
    },
    respoCare: {
      image: RespoCare, 
      name: "Respo Care", 
      type: "Oral Liquid", 
      packing: "1000 ml", 
      Composition: "Each 100 ml contains: \nMenthol ---- 5,000 mg \nEucalyptus Extract ---- 12,000 mg \nPeppermint Oil ---- 15,000 mg \nThyme Extract ---- 7,000 mg \nExcepients ---- Q/S", 
      desc: "AZM RESPOCARE is a natural product composed of essential oils, indicated for strengthening the upper respiratory system. AZM RESPOCARE acts as a bronchodilator and gives ease in respiration and provides symptomatic relief in Respiratory Diseases (ND, IB, Influenza, Bronchitis & CRD). AZM RESPOCARE is recommended in difficult breathing and sneezing in extreme weather conditions.", 
      dosage: "1 ml per 1 liter of drinking water for 3 to 5 days.",
      litertaure: ""          
    },
    adek: {
      image: Adek, 
      name: "Adek", 
      type: "Oral Liquid", 
      packing: "1 Liter", 
      Composition: "Each 1 liter contains: \nVitamin A (3a672b) ---- 20,000,000 iu \nVitamin D3 (E671) ---- 5,000,000 iu \nVitamin E (3a700) ---- 15,000 iu \nVitamin K3 (3a700) ---- 1,600 mg \nVitamin C (3a300) ---- 33,000 mg", 
      desc: "For the prevention and treatment of vitamins deficiencies, stress caused by vaccination, transportation, climate variation and poor feed intake. To prevent loss of blood during debeaking and coccidiosis, to promote fertility and to maintain optimum health performance.", 
      dosage: "1 ml per 10 Liter of drinking water for 07 days.",
      litertaure: ""          
    },
    mintOil: {
      image: MintOil, 
      name: "Mint Oil", 
      type: "Oral Solution", 
      packing: "1000 ml", 
      Composition: "Each 1000 ml contains: \nMenthol ---- 1,00,000 mg \nEucalyptus Oil ---- 1,00,000 mg \nCamphor ---- 50,000 mg \nThyme Oil ---- 10,000 mg \nPeppermint Oil ---- 25,000 mg \nGlycyrrhiza ---- 20,000 mg", 
      desc: "AZM MINT OIL is indicated in respiratory problems e.g. Bird Flu, MG, ND, IB, ILT and other viral fungal and seasonal respiratory stress of poultry and cattle. In infections bronchitis infections. When birds are sneezing.", 
      dosage: "1ml in 4 litres of drinking water.",
      litertaure: ""          
    },
    flor20: {
      image: Flor20, 
      name: "Flor-20", 
      type: "Oral Liquid", 
      packing: "1 litre", 
      Composition: "Each 100 ml contains: \nFlorfenicol ---- 20 gm", 
      desc: "Florfenicol is a synthetic broad-spectrum antibiotic. The active ingredient florfenicol is active against many gram-positive and gram-negative bacteria isolate domestic animals. It acts by inhibiting bacterial protein synthesis.", 
      dosage: "1 ml per 2 to 3 liters of drinking water for 3 to 5 days or as directed by the vet physician",
      litertaure: ""          
    },
    livaton: {
      image: Livaton, 
      name: "Livaton", 
      type: "Oral Solution", 
      packing: "1000 ml", 
      Composition: "Each liter contains: \nSorbitol ---- 350,000 mg \nCarnitine ---- 90,000 mg \nCholine Chloride ---- 60,000 mg \nBetaine ---- 30,000 mg \nMethionine Acetyl ---- 25,000 mg \nSilymarin (Craduus Marianus) ---- 10,000 mg \nInositol ---- 2% \nVitamin PP: 2,000 mg \nL-Aspartic Acid ---- 10,000 mg \nL-Glutamic Acid ---- 5,000 mg \nL-Glycine ---- 5,000 mg \nMagnesium Sulphate ---- 50,000 mg \nPlant Extracts (Boldo artichoke)", 
      desc: "AZM Livaton is a veterinary medication that is indicated to improve liver function in animals. The product is claimed to stimulate sluggish liver parenchyma cells and restore liver functions. It improves feed metabolism and its utilization which results in better growth and productivity.", 
      dosage: "Poultry: 1 gm per 2 to 4 liters of drinking water fot 3 to 5 days.",
      litertaure: ""          
    },
    electro: {
      image: Electro, 
      name: "AZM Electro", 
      type: "Oral Powder", 
      packing: "1000 gm", 
      Composition: "Each 1000 gm contains: \nVitamin C ---- 20,000 mg \nSodium ---- 26,400 mg \nPotassium ---- 8,000 mg \nicarbonate ---- 41,000 mg \nMagnesium ---- 80,000 mg \nChloride ---- 23,800 mg \nAcetate ---- 2,200 mg \nExcepients ---- Q/S", 
      desc: "AZM Electro, a unique combination of vitamin C and essential electrolytes. AZM Electro is a helpful for the growth and repair of tissues in all parts of body. It is necessary to form collagen, an important protein used to make skin, scar tissue, tendons, ligaments and blood vessels. AZM Electro is essential for the healing of wounds and for the repair and maintenance of cartilage, bones and teeth. It also helps to get the body out of stress due to disease, heat, cold, transportation or vaccination.", 
      dosage: "1 gm per 2 liters of drinking water for 3 to 5 days.",
      litertaure: ""          
    },
  }[productId]

  return (
    <section className="px-16 -mt-16 flex gap-16 items-center max-md:px-8 max-md:flex-col">
      <div className="w-1/2 max-md:w-full">
        <img className="max-w-full object-cover rounded-3xl" src={product.image} alt={product.name} />
      </div>
      <div className="w-1/2 flex flex-col gap-4 max-md:w-full">
        <h1 className="bold-40 max-md:bold-24">{product.name}</h1>
        <div className="flex gap-2 items-center">
          <h2 className="bold-16 max-md:bold-14">Type: </h2>
          <p className="reg-16 text-reg-text max-md:reg-14">{product.type}</p>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="bold-16 max-md:bold-14">Packing: </h2>
          <p className="reg-16 text-reg-text max-md:reg-14">{product.packing}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="bold-16 max-md:bold-14">Composition: </h2>
          <p className="reg-16 text-reg-text whitespace-pre-wrap max-md:reg-14">{product.Composition}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="bold-16 max-md:bold-14">Description: </h2>
          <p className="reg-16 text-reg-text whitespace-pre-wrap max-md:reg-14">{product.desc}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="bold-16 max-md:bold-14">Dosage: </h2>
          <p className="reg-16 text-reg-text whitespace-pre-wrap max-md:reg-14">{product.dosage}</p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail