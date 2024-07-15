import React from 'react'
import { history, founder, manifesto, model} from '@/lib/data'
import HeroH1Text from '@/components/sections/HeroH1Text'
import ImgTextColSection from '@/components/sections/ImgTextColSection'
import HeaderListSection from '@/components/sections/HeaderListSection'
import TextListSection from '@/components/sections/TextListSection'
export default function page() {
  return (
    <main className='bg-grey_light '>

      <HeroH1Text content = {history} />

    <ImgTextColSection content = {founder} />

    <HeaderListSection content = { manifesto} />

    <TextListSection content = { model} />
    </main>
  )
}
