import React from 'react'
import EmbededMap from '../../components/Utils/EmbededMap'

const Footer = () => {

  const items = [
    {
      heading: 'Quick Links',
      links: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'News Events'
        },
        {
          href: '#',
          text: 'Courses'
        },
        {
          href: '#',
          text: 'Campaign'
        }
      ]
    },
    {
      heading: 'Company',
      links: [
        {
          href: '#',
          text: 'About us'
        },
        {
          href: '#',
          text: 'Careers'
        },
        {
          href: '#',
          text: 'Contact us'
        },
        {
          href: '#',
          text: 'Media'
        }
      ]
    },
    {
      heading: 'Further Information',
      links: [
        {
          href: '#',
          text: 'Terms & Conditions'
        },
        {
          href: '#',
          text: 'Privacy Policy'
        }
      ]
    },

  ]

  return (
    <footer className='relative overflow-hidden bg-slate-950 px-4 py-8 text-slate-50 md:px-6 md:py-10'>
      <div className='dotted-background absolute inset-0 z-0'></div>

      <div className='relative z-10 mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8'>
          <div className='rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 md:p-6 lg:col-span-4'>
            <strong className='tracking-wide'>Address:</strong>
            <p className='pt-2 text-sm leading-7 text-slate-200'>
              Department of Social Welfare,<br />
              Government of NCT of Delhi, <br />
              7th Floor, MSO Building, ITO, <br />
              I.P Estate New Delhi-110002 <br />
            </p>
          </div>

          <div className='rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 md:p-6 lg:col-span-4'>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3'>
              {
                items.map(({ heading, links }, index) => (
                  <List
                    key={index}
                    heading={heading}
                    links={links}
                  />
                ))
              }
            </div>
          </div>

          <div className='rounded-2xl border border-slate-800/80 bg-slate-900/60 p-2 md:p-3 lg:col-span-4'>
            <div className='overflow-hidden rounded-xl'>
              <EmbededMap />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function List({ heading, links }) {
  return (
    <div>
      <p className='pb-1 text-sm'><strong>{heading}</strong></p>
      <ul>
        {
          links.map(({ text, href }, index) => (
            <li
              key={index}
              className='pt-1 text-sm text-slate-300'
            >
              <a
                href={href}
                className='inline-block rounded-sm transition-all duration-200 hover:translate-x-1 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70'
              >
                {text}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Footer
