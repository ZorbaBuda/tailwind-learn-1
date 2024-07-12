import React from 'react'
import { cliHero, cliMission, cliActions, cliAbout } from '@/lib/dataClinique'
import Image from 'next/image'
import CliHeroSection from '@/components/s2Sections/CliHeroSection'
import CliMissionSection from '@/components/s2Sections/CliMissionSection'
import CliActionsSection from '@/components/s2Sections/CliActionsSection'
import CliAboutSection from '@/components/s2Sections/CliAboutSection'

export default function page() {
  return (
    <main>
        <CliHeroSection content={cliHero} />
        <CliMissionSection content = {cliMission} />
        <CliActionsSection content = {cliActions} />
        <CliAboutSection content = {cliAbout} />
    </main>
  )
}
