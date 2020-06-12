---
title: Contatti
hide_title: false
sections:
- type: section_form
  template: section_form
  section_id: contact-form
  content: |-
    E così hai qualcosa da dirmi? Fantastico!

    Puoi contattarmi usando il form qui sotto o, in alternativa, scrivendomi una email all'indirizzo [hi@tommasomartino.it](mailto:hi@tommasomartino.it).
  form_id: contactForm
  form_action: "/grazie"
  form_fields:
  - type: text
    name: name
    label: Nome
    default_value: Il tuo nome
    is_required: true
    options: []
  - type: email
    name: email
    label: Email
    default_value: La tua email
    is_required: true
    options: []
  - type: textarea
    name: message
    label: Messaggio
    default_value: Il tuo messaggio
    options: []
    is_required: true
  - type: checkbox
    name: consent
    label: Ho letto ed accetto l'informativa sulla privacy.
    default_value: ''
    options: []
    is_required: true
  submit_label: Invia il tuo messaggio
  title: ''
  subtitle: ''
layout: advanced
excerpt: ''

---
