import React from 'react'

import HeroH1Text from '@/components/pruinboom/sections/HeroH1Text'
import ImgTextColSection from '@/components/pruinboom/sections/ImgTextColSection'
import HeaderListSection from '@/components/pruinboom/sections/HeaderListSection'
import TextListSection from '@/components/pruinboom/sections/TextListSection'
export default function page() {
  return (
    <main className='bg-grey_light '>

      <HeroH1Text  />

    <ImgTextColSection  />

    <HeaderListSection  />

    <TextListSection />
    </main>
  )
}
