import { Hero } from '@/components/sections/Hero'
import { Servicios } from '@/components/sections/Servicios'
import { Proceso } from '@/components/sections/Proceso'
import { CasosDeExito } from '@/components/sections/CasosDeExito'
import { PorQueNetrix } from '@/components/sections/PorQueNetrix'
import { SobreNosotros } from '@/components/sections/SobreNosotros'

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Proceso />
      <CasosDeExito />
      <PorQueNetrix />
      <SobreNosotros />
      {/* <Contacto /> */}
    </>
  )
}
