import React from 'react'
import { storiesOf } from '@storybook/react'

// Import styled for Card
import Card from '../Card'

// Defined stories for Card
storiesOf('Card', module)
  .add('Card', () => (
    <Card
      location='Ha Noi'
      temperature='40'
      weatherStatus='Rain'
    />
  ))
