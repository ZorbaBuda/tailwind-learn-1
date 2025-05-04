// import { EmailCircle, MapCircle, PhoneCircle } from '@/components/parts/ContactCircles'
import { FormBlock } from '@/blocks/Form/Component'
import ContactData from '@/components/contact/ContactData'
import GoogleMap from '@/components/contact/GoogleMap'
import { PageHero } from '@/components/parts/PageHero'
import { ContactDatum } from '@/payload-types'
import { Form } from '@payloadcms/plugin-form-builder/types'
import { useTranslations } from 'next-intl'

type ContactFormClientProps = {
  contactData: ContactDatum
  title: string
  text: string
  form?: Form
}

export const ContactFormClient: React.FC<ContactFormClientProps> = ({
  contactData,
  text,
  title,
  form,
}) => {
  // const t = useTranslations('global')

  // const { googleMaps } = contactData

  return (
    <section className=" bg-bgColor pt-[90px] lg:pt-[120px] ">
      <div className="subcontainer-xl flex flex-col ">
        <PageHero title={title} />
        <div className="py-14 ">
          <div className=" flex flex-col lg:flex-row lg:items-center gap-10    ">
            {/* izquierda */}
            <div className="basis-1/2 ">
              <ContactData contactData={contactData} text={text} />
            </div>

            {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
            <div className="basis-1/2  w-full lg:h-full">
              {form && typeof form !== 'string' && (
                <FormBlock blockType="formBlock" enableIntro={false} form={form as Form} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
