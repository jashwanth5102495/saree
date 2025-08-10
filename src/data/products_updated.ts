export interface Product {
  id: string;
  name: string;
  category: 'organic' | 'mineral' | 'liquid' | 'granular' | 'specialty';
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  usage: string[];
  ingredients: string[];
  safetyTips: string[];
  price: string;
  inStock: boolean;
  application: string;
}

export const products: Product[] = [
  {
    id: 'greengro',
    name: 'GREENGRO',
    category: 'organic',
    image: '/uploads/GREENGRO.png',
    shortDescription: 'Premium organic growth enhancer for sustainable agriculture',
    fullDescription: `BENEFIT OF GREENGRO:
As liquid fertilizers highly soluble and easily available. Quick response from nitrate, longer lasting from ammonical and sustained feeding from the water- soluble nitrogen in urea. More uniform application, precise dosage of distribution over the area. Solution is rapidly available to plants for a longer period during its growth. Compatible with other fertilizers.

RECOMMENDED DOSAGE:
Foliar Spray 2-4 ml per litre of water
Drip : 500ml/acre.

COMPOSITION:
Urea Ammonium Nitrate(32%) (Liquid)`,
    features: ['100% organic ingredients', 'Promotes root development', 'Improves soil structure', 'Safe for all crops'],
    usage: ['Apply 2-4 kg per acre', 'Mix with soil before planting', 'Reapply every 4-6 weeks', 'Water thoroughly after application'],
    ingredients: ['Organic compost', 'Seaweed extract', 'Humic acid', 'Beneficial microbes'],
    safetyTips: ['Wear gloves when handling', 'Store in cool, dry place', 'Keep away from children', 'Wash hands after use'],
    price: '₹1,250',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'x-spa80',
    name: 'X-SPA80',
    category: 'liquid',
    image: '/uploads/X-SPA80.png',
    shortDescription: 'nonionic spray adjuvants',
    fullDescription: `BENEFIT OF X-SPA80:
X-spa80 is highly concentrated nonionic wetting agent with 80% active ingredients. As an Sticker - Activator - Spreader, it activates the spray fluid to moisten the plant surface and allows uniform spreading of spray deposits. powerful tool in irrigation with improves the water absorption in soil, it facilitates uniform mixing of powders, pesticides & most liquid fertilizers, it is non corrosive to spray equipment and prevents clogged nozzles. Safe & environment friendly.

RECOMMENDED DOSAGE:
5ml in 15 ltrs. of water - for insecticides, fungicides, foliar spray, plant growth nutrients. 20ml in 15 ltrs.of water herbicides.`,
    features: ['Fast absorption', 'High concentration', 'Balanced NPK ratio', 'Foliar application ready'],
    usage: ['Dilute 1:100 with water', 'Apply every 2-3 weeks', 'Can be used as foliar spray', 'Avoid application during hot sun'],
    ingredients: ['NPK fertilizer', 'Micronutrients', 'Amino acids', 'Growth hormones'],
    safetyTips: ['Use protective equipment', 'Avoid skin contact', 'Store in original container', 'Keep refrigerated after opening'],
    price: '₹1,800',
    inStock: true,
    application: 'All Crops'
  }, 
 {
    id: 'silicron',
    name: 'Silicron',
    category: 'mineral',
    image: '/uploads/silicron.png',
    shortDescription: 'nonionic spray adjuvants',
    fullDescription: `BENEFIT OF SILICRON:
1. Super spreading: acti-silion solution spreads quickly, carrying insecticides into pests and carrying fungicides on those crop canopy, prone to infection by diseases. it assist herbicides to kill weeds uniformly in shorter duration
2. Silicron is useful for faster & enhanced spreading while spraying agrochemicals
3. Silicron can be used effectively in all seasons & for all types of crops
4. Improves rainfastness-due to increased uptake, the solution doesn't wash off even if it rains after few minutes.

COMPOSITION:
Silicone Based Super Spreader`,
    features: ['Silicon enrichment', 'Disease resistance', 'Stress tolerance', 'Improved yield'],
    usage: ['Apply 1-2 kg per acre', 'Mix with irrigation water', 'Apply during early growth', 'Use monthly during growing season'],
    ingredients: ['Soluble silicon', 'Potassium silicate', 'Micronutrients', 'Organic acids'],
    safetyTips: ['Wear protective clothing', 'Avoid inhalation', 'Store in sealed container', 'Keep dry'],
    price: '₹1,450',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'swarna',
    name: 'Swarna',
    category: 'organic',
    image: '/uploads/swarna.png',
    shortDescription: 'N.P Complex Fertilizer',
    fullDescription: `BENEFIT OF SWARNA:
Bio availability of N&P nutrients are higher. Excellent liquid phosphatic fertilizer. Suitable for foliar and root application. Can be mixed with other agrochemicals other than Copper, Zinc, Sulphate based compounds.

RECOMMENDED DOSAGE:
Foliar spray : 5ml per litre of water
Root Application : 10 ml per litre of water during the early establishment stage of crop growth.

COMPOSITION:
Ammonium Poly-phosphate (10-34-0) (Liquid)`,
    features: ['Premium organic formula', 'Enhanced crop quality', 'Rich in nutrients', 'Soil conditioning'],
    usage: ['Apply 3-5 kg per acre', 'Work into soil before planting', 'Side-dress growing crops', 'Water thoroughly'],
    ingredients: ['Organic matter', 'Composted manure', 'Rock phosphate', 'Kelp meal'],
    safetyTips: ['Safe for organic farming', 'Store in dry location', 'Keep away from pets', 'Use clean tools'],
    price: '₹1,350',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'wake-up',
    name: 'Wake Up',
    category: 'liquid',
    image: '/uploads/wake up.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF WAKE UP:
Wake up contains organic constituents like humic, humates & Fulvic acids supported by naturally containing essential trace elements. Humic acids are reported to increase permeability of plant membranes, resulting in higher metabolic activity due to increased nutrient's availability & enzyme activity.

RECOMMENDED DOSAGE:
Two soil applications at 1.25 Ltr/ha.
For Foliar Spray: 500ml of Wake up in -200ltr of water

COMPOSITION:
Humates and Fulvates-22% (Liquid)`,
    features: ['Growth stimulation', 'Stress recovery', 'Quick absorption', 'Revitalizing formula'],
    usage: ['Apply to stressed plants', 'Use 1:50 dilution', 'Apply every 7-10 days', 'Avoid over-application'],
    ingredients: ['Growth hormones', 'Amino acids', 'Micronutrients', 'Seaweed extract'],
    safetyTips: ['Follow dilution rates', 'Monitor plant response', 'Store in cool place', 'Use within 6 months'],
    price: '₹1,600',
    inStock: true,
    application: 'Groundnut'
  },
  {
    id: 'rich-roots',
    name: 'Rich Roots',
    category: 'granular',
    image: '/uploads/rich roots.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF RICH ROOTS:
1. Rich Roots contains organic constituents like humic, humates and Fulvic acids supported by naturally containing essential trace elements. Humic acids are reported to permeability of plant membranes, resulting in higher metabolic activity due to increased nutrient's availability and enzyme activity.
2. Humic acids build up organic matter which is required for microbial growth. It stimulates the respiration rates of seeding which leads quicker germination.
3. It also protects plants from chlorosis, enhance photosynthesis, increases vegetative growth which results in higher yields & healthier crops.

RECOMMENDED DOSAGE:
Two soil applications at 5 Ltr/ha.
For Foliar Spray: 500ml of Rich Roots in -200ltr of water

COMPOSITION:
Humates 12.5% (Liquid)`,
    features: ['Root development', 'Beneficial microbes', 'Slow-release formula', 'Soil structure improvement'],
    usage: ['Apply at planting time', 'Work into root zone', 'Use 2-3 kg per acre', 'Water thoroughly'],
    ingredients: ['Phosphorus compounds', 'Mycorrhizal fungi', 'Organic matter', 'Trace elements'],
    safetyTips: ['Avoid contact with stems', 'Water in thoroughly', 'Store in cool, dry place', 'Use before expiration'],
    price: '₹1,400',
    inStock: true,
    application: 'Green Gram'
  },
  {
    id: 'lasya',
    name: 'Lasya',
    category: 'specialty',
    image: '/uploads/lasya.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF LASYA:
Improves photosynthesis in plants & entire plant will become greenish. It will help to overcome micronutrient deficiency in all crop. Repeated application with 15-20 days interval will keep crop Healthy Better growth. Improves disease resistance in all crops.

RECOMMENDED DOSAGE:
2-3ml / 1Ltr. of Water.

COMPOSITION:
Seaweed Extract - 15%
Organic botanical extract- 10%`,
    features: ['Flower enhancement', 'Color vibrancy', 'Ornamental plant formula', 'Bloom promotion'],
    usage: ['Apply monthly during growing season', 'Use 1-2 kg per 100 sq ft', 'Water after application', 'Reduce in winter'],
    ingredients: ['Phosphorus-rich formula', 'Potassium compounds', 'Micronutrients', 'Organic acids'],
    safetyTips: ['Avoid over-fertilization', 'Monitor plant response', 'Store in sealed container', 'Keep away from children'],
    price: '₹1,550',
    inStock: true,
    application: 'Green Gram'
  },
  {
    id: 'root-booster',
    name: 'Root Booster',
    category: 'granular',
    image: '/uploads/Root Booster.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF ROOT BOOSTER:
Improves physical, chemical and biological properties of soil. increases aeration and water holding capacity of soil. improves effectiveness of metallic fungicides.

RECOMMENDED DOSAGE:
Drip irrigation : 1-2 kg/acre / Drenching : 2-3 gm/litre water

COMPOSITION:
Potassium Humate 49% (Powder)`,
    features: ['Advanced root development', 'Soil conditioning', 'Beneficial microorganisms', 'Long-lasting effect'],
    usage: ['Apply at transplanting', 'Work into planting hole', 'Use 1-2 kg per acre', 'Water deeply'],
    ingredients: ['Root stimulants', 'Beneficial bacteria', 'Organic matter', 'Essential nutrients'],
    safetyTips: ['Handle with care', 'Store in moisture-proof container', 'Use clean equipment', 'Follow application rates'],
    price: '₹1,650',
    inStock: true,
    application: 'Paddy'
  },
  {
    id: 'jeevan-plus',
    name: 'JEEVAN PLUS',
    category: 'organic',
    image: '/uploads/JEEVAN PLUS.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF JEEVAN PLUS:
1. Jeevan Plus contains organic constituents like humic, humates and Fulvic acids supported by naturally containing essential trace elements. Humic acids are reported to permeability of plant membranes, resulting in higher metabolic activity due to increased nutrient's availability and enzyme activity.
2. Humic acids build up organic matter which is required for microbial growth. It stimulates the respiration rates of seeding which leads quicker germination.
3. It also protects plants from chlorosis, enhance photosynthesis, increases vegetative growth which results in higher yields & healthier crops.

RECOMMENDED DOSAGE:
Two soil applications at 5 Ltr/ha.
For Foliar Spray: 500ml of Jeevan Plus in -200ltr of water

COMPOSITION:
Humates 12.5% (Liquid)`,
    features: ['Life enhancement', 'Sustainable farming', 'Soil vitality', 'Organic certification'],
    usage: ['Apply 4-6 kg per acre', 'Mix with soil before planting', 'Reapply every 6-8 weeks', 'Maintain soil moisture'],
    ingredients: ['Organic compost', 'Vermicompost', 'Neem cake', 'Rock minerals'],
    safetyTips: ['Safe for organic production', 'Store in dry location', 'Compostable packaging', 'Natural ingredients only'],
    price: '₹1,300',
    inStock: true,
    application: 'Green Gram'
  },