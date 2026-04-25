import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

const products = [
  {
    id: 'ff-1', category: 'Fire Fighting', name: 'Clevis Hanger',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/clevis-hanger-ul-fm.-2png.png',
    certifications: 'UL Listed, FM Approved (¾″ to 4″)',
    standards: 'FM 1951/1952/1953 · MSS SP-69 & SP-58 Type 1 · UL 203 · NFPA 13',
    usage: 'To support insulated & non-insulated horizontal pipes.',
    features: ['Vertical adjustment capability.','Allows small horizontal pipeline movements without transferring stress to suspension rod.','15° swing in either direction for easy pipe feeding during installation.','Curved edges for simplified handling and installation.'],
    sizeRange: '¾″ (20mm) to 30″ (750mm)', material: 'Carbon steel EN 10111 DD11. Stainless steel available on request.', finish: 'Plain (black steel) / Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'ff-2', category: 'Fire Fighting', name: 'Band Hanger',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/band-hanger-ul-fm-2.png',
    certifications: 'UL Listed, FM Approved (¾″ to 2″)',
    standards: 'FM 1951/1952/1953 · MSS SP-69 & SP-58 Type 10 · UL 203 · NFPA 13',
    usage: 'To support insulated & non-insulated horizontal pipes.',
    features: ['Allows vertical adjustment.','Includes swivel nut to facilitate pipe installation.'],
    sizeRange: '¾″ (20mm) to 6″ (150mm)', material: 'Pre-galvanized carbon steel, conforming to ASTM A653M.', finish: 'Plain (black steel) / Pre-galvanized / Hot-dip galvanized',
  },
  {
    id: 'ff-3', category: 'Fire Fighting', name: 'Standard Riser Clamp',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/riser-clamp-fm.png',
    certifications: 'FM Approved (2″ to 8″)',
    standards: 'FM 1951/1952/1953 · MSS SP-69 & SP-58 Type 8 · NFPA 13',
    usage: 'To support and stabilize vertical pipe runs.',
    features: ['Installed below coupling hubs or field-welded shear lugs.','Extended wings transfer riser load to floor or ceiling.','Rounded ends for worker safety.','Optional PVC lining — beneficial for copper pipes.'],
    sizeRange: '½″ (15mm) to 24″ (600mm)', material: 'Carbon steel A36.', finish: 'Plain (black steel) / Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'hv-1', category: 'HVAC Systems', name: 'DSM Pipe Clamp',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/dsm-2.png',
    standards: 'MSS SP-69 & SP-58 Type 26',
    usage: 'Support pipes on SAM strut channels.',
    features: ['PVC lining option to prevent direct contact between pipe and clip.','Compatible with SAM strut mounting systems.'],
    sizeRange: '½″ (15mm) to 6″ (150mm)', material: 'Steel. Stainless steel available on request.', finish: 'Plain (black steel) / Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'hv-2', category: 'HVAC Systems', name: 'Offset Pipe Clamp',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/%F0%9F%9B%A0%EF%B8%8F-Transforming-Efficiency-Quality-in-Construction-%F0%9F%8F%97%EF%B8%8F-9-1024x1024.jpg',
    usage: 'To support pipe lines running at a definite distance from the wall or floor.',
    features: ['Customizable offset distance to match site requirements.','Optional PVC lining to prevent electrolysis — especially for copper tubes.','Reduces noise and vibration.'],
    sizeRange: '½″ (15mm) to 8″ (200mm)', material: 'Carbon steel A36.', finish: 'Plain (black steel) / Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'hv-3', category: 'HVAC Systems', name: 'Beam Clamp Type A',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/Beam-clamp-type-a-1024x1024.jpg',
    standards: 'MSS SP-69 & SP-58 Type 19',
    usage: 'To attach a vertical rod to the flange of a beam, offset from the edge of the flange.',
    features: ['Attachable to horizontal flanges in top or bottom beam positions.','Maximum beam flange thickness: 20mm.','Secured by a cup-pointed set screw tightened against the flange.','Permits unlimited vertical rod adjustment.'],
    sizeRange: 'Accommodates 8–10mm threaded rods.', material: 'Carbon steel A36.', finish: 'Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'pl-1', category: 'Plumbing', name: 'Beam Clamp Type B',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/Beam-Clamp-Type-B-1024x1024.jpg',
    standards: 'MSS SP-69 & SP-58 Type 19',
    usage: 'To attach a vertical rod to the flange of a beam, offset from the edge of the flange.',
    features: ['Attachable to horizontal flanges in top or bottom beam positions.','Maximum beam flange thickness: 20mm.','Open design permits inspection of thread engagement.','Permits unlimited vertical rod adjustment.'],
    sizeRange: 'Accommodates 8–10mm threaded rods.', material: 'Carbon steel A36.', finish: 'Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'pl-2', category: 'Plumbing', name: 'Beam Clamp for Pipe',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/Beam-clamp-for-pipe-1024x1024.jpg',
    usage: 'To attach horizontal pipes directly to the flange of a beam.',
    features: ['Reduces installation time.','Maximum beam flange thickness: 20mm.','Always used in pairs.'],
    sizeRange: '½″ (15mm) to 4″ (100mm)', material: 'Carbon steel A36. Stainless steel available on request.', finish: 'Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'pl-3', category: 'Plumbing', name: 'Insulation Protection Shield',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/insualtion-shield.jpg',
    standards: 'MSS SP-69 & SP-58 Type 40',
    usage: 'Protect pipe insulation when used with hangers.',
    features: ['Pre-galvanized finish resists corrosion.','Compatible with clevis hangers and band hangers.'],
    sizeRange: '½″ (15mm) to 6″ (150mm)', material: 'Carbon steel A36.', finish: 'Pre-galvanized',
  },
  {
    id: 'sam-1', category: 'SAM Strut', name: 'SAM Strut Channels',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/AFROFIX_products_C_Channel_stack_271S1_1.jpg-removebg-preview.png',
    usage: 'Main elements in the SAM strut framing system, used as primary support elements.',
    features: ['Reduces installation time significantly.','Available in slotted and blank configurations.','Available lengths: 2.5m and 3m.'],
    sizeRange: '2.5m / 3m lengths. Standard profile: 41 × 41mm.', material: 'Carbon steel A36. Stainless steel available on request.', finish: 'Plain (black steel) / Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'sam-2', category: 'SAM Strut', name: 'Pipe Clamp on SAM Strut',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/sam22b.jpg-removebg-preview.png',
    usage: 'To support EMT, IMC, GRC conduit and cables to SAM strut channels.',
    features: ['Saves installation time.','Compatible with multiple SAM strut channel sizes.','Versatile across different pipe dimensions.'],
    sizeRange: '½″ (15mm) to 4″ (100mm)', material: 'Carbon steel A36. Stainless steel available on request.', finish: 'Plain (black steel) / Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'sam-3', category: 'SAM Strut', name: 'Cable Clamp on SAM Strut',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/sam38.JPG-removebg-preview-1.png',
    usage: 'To support cables and conduit runs on SAM strut channels.',
    features: ['Easy and safe assembly through hex head bolt and nut.','PVC lining for noise insulation.','Hexagon Phillips head bolt.'],
    sizeRange: '½″ (15mm) to 6″ (150mm)', material: 'Cold rolling carbon steel.', finish: 'Plain (black steel) / Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'sam-4', category: 'SAM Strut', name: 'Beam Clamp for SAM Strut',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/Beam-Clamp-for-SAM-strut-channel-1024x1024.jpg',
    usage: 'To attach SAM strut channels to the flange of a beam.',
    features: ['Reduces installation time.','Always used in pairs.','Steel size: 85 × 4mm.','Maximum flange thickness: 29mm.'],
    sizeRange: 'Fits 41 × 41mm and 41 × 21mm channels.', material: 'Carbon steel A36. Stainless steel available on request.', finish: 'Zinc plating / Hot-dip galvanized',
  },
  {
    id: 'st-1', category: 'Steel Structure Support', name: 'Round Insulation Wood Frame',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-18-at-14.29.01_736b9ca3-edit-1024x1024.jpg',
    usage: 'Prevents crushing of insulation on insulated pipes at the hanger support area.',
    features: ['Compatible with clevis hangers and insulation protection shields.','Delivers strong insulation properties.','Fully customizable according to insulation thickness.'],
    sizeRange: '½″ (15mm) to 30″ (750mm)', material: 'Beech pine wood / Beech wood / Pine wood.', finish: 'Transparent wood sealer / Red wood sealer / Epoxy coating',
  },
  {
    id: 'st-2', category: 'Steel Structure Support', name: 'Flat Bottom Insulation Wood Frame',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/ubolt-wood-sam14b_copy.jpg-removebg-preview.png',
    usage: 'Prevents crushing of insulation on insulated pipes at the point of support.',
    features: ['Protects pipe insulation at support locations.','Customizable based on insulation thickness.'],
    sizeRange: '½″ (15mm) to 36″ (900mm)', material: 'Beech pine / Beech wood. U-bolt: Carbon steel A36.', finish: 'Transparent / Red wood sealer / Epoxy coating. U-bolt: Zinc plated / Hot-dip galvanized',
  },
  {
    id: 'fx-1', category: 'Fixation', name: 'Continuous Concrete Insert Channel',
    imageUrl: 'https://afrofix.com/wp-content/uploads/2024/08/concrete_insert.jpg-removebg-preview.png',
    usage: 'Embedded in concrete slabs or walls to provide continuous threaded anchorage for pipe and duct supports.',
    features: ['Cast-in-place during slab pour.','Continuous slot for flexible rod positioning anywhere along length.','Eliminates field drilling into structure.'],
    sizeRange: '½″ (15mm) to 6″ (150mm)', material: 'Cold rolling carbon steel.', finish: 'Plain (black steel) / Zinc plating / Hot-dip galvanized',
  },
]

async function uploadImageFromUrl(url, filename) {
  const res = await fetch(url)
  if (!res.ok) { console.warn(`  ⚠ Could not fetch image: ${url}`); return null }
  const buffer = await res.arrayBuffer()
  const asset = await client.assets.upload('image', Buffer.from(buffer), { filename })
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function seed() {
  console.log(`Seeding ${products.length} solutions into Sanity…\n`)
  for (let i = 0; i < products.length; i++) {
    const p = products[i]
    console.log(`[${i + 1}/${products.length}] ${p.name}`)
    const image = p.imageUrl ? await uploadImageFromUrl(p.imageUrl, `${p.id}.jpg`) : null
    await client.createOrReplace({
      _type: 'solution',
      _id: `solution-${p.id}`,
      name: p.name,
      category: p.category,
      image,
      certifications: p.certifications || null,
      standards: p.standards || null,
      usage: p.usage || null,
      features: p.features || [],
      sizeRange: p.sizeRange || null,
      material: p.material || null,
      finish: p.finish || null,
      order: i + 1,
    })
    console.log(`  ✓ Published`)
  }
  console.log('\nDone! All solutions are live.')
}

seed().catch(console.error)
