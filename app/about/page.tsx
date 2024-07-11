import React from 'react'
import { history, founder, manifesto, model} from '@/lib/data'
import HeroH1Text from '@/components/sections/HeroH1Text'
import ImgTextColSection from '@/components/sections/ImgTextColSection'
import HeaderListSection from '@/components/sections/HeaderListSection'
export default function page() {
  return (
    <main className='bg-grey_light '>

      <HeroH1Text content = {history} />

    <ImgTextColSection content = {founder} />

    <HeaderListSection content = { manifesto} />
    </main>
  )
}
