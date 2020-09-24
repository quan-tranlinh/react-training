import React from 'react'
import { storiesOf } from '@storybook/react'

// Import styled for Description
import Description from '../Description'

// Defined stories for Description
storiesOf('Description', module)
  .add('Description', () => (
    <Description
      text='Ha Noi'
    />
  ))
