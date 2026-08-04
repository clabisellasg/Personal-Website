import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaPhone,
} from 'react-icons/fa6'
import { portfolio } from '../../data/portfolio'
import type { ContactMethod } from '../../types/portfolio'

function ContactLink({ method }: { method: ContactMethod }) {
  const Icon = method.title.startsWith('Phone')
    ? FaPhone
    : method.title === 'Email'
      ? FaEnvelope
      : method.title === 'GitHub'
        ? FaGithub
        : FaFacebookF

  return (
    <li>
      <a
        className="contact-method"
        href={method.link.href}
        aria-label={method.link.label}
        target={method.external ? '_blank' : undefined}
        rel={method.external ? 'noopener noreferrer' : undefined}
      >
        <span className="contact-method__icon" aria-hidden="true">
          <Icon />
        </span>
        <span className="contact-method__content">
          <span className="contact-method__type">{method.title}</span>
          <strong>{method.value}</strong>
          <span className="contact-method__description">
            {method.description}
          </span>
        </span>
        <span className="contact-method__arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </li>
  )
}

export function ContactSection() {
  const { contact } = portfolio

  if (contact.methods.length === 0) {
    return null
  }

  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact-section__layout">
        <header className="section-header">
          <p className="section-label">{contact.label}</p>
          <h2 className="section-title" id="contact-title">
            {contact.heading}
          </h2>
          <p className="contact-section__introduction">
            {contact.introduction}
          </p>
        </header>

        <ul className="contact-methods" aria-label="Contact methods">
          {contact.methods.map((method) => (
            <ContactLink method={method} key={method.title} />
          ))}
        </ul>
      </div>
    </section>
  )
}
