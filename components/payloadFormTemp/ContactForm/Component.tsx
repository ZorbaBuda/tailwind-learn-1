import React from 'react'
import { ContactDatum } from '@/payload-types'
import { getLocale } from 'next-intl/server'
import { Locale } from '@/i18n/routing'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { ContactFormBlock as ContactFormBlockProps } from '@/payload-types'
import { ContactFormClient } from './Component.client'
import { Form } from '@payloadcms/plugin-form-builder/types'

export const ContactFormBlock: React.FC<ContactFormBlockProps> = async ({ title, text, form }) => {
  const locale = (await getLocale()) as Locale

  const contactData: ContactDatum = await getCachedGlobal('contact-data', 1, locale)()

  return (
    <ContactFormClient contactData={contactData} text={text} title={title} form={form as Form} />
  )
}
