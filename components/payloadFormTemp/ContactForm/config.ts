import type { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contactFormBlock',
  interfaceName: 'ContactFormBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'text',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: false,
      admin: {
        allowCreate: false,
        allowEdit: false,
      },
    },
  ],
}
