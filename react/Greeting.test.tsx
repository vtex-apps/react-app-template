import React from 'react'
import { render } from '@vtex/test-tools/react'

import Greeting from './Greeting'

test('greets Fred', () => {
  const { queryByText } = render(<Greeting name="Fred" />)

  expect(queryByText('Hey, Fred')).toBeInTheDocument()
})
