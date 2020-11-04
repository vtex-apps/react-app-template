import React from 'react'
import { render } from '@vtex/test-tools/react'

import Index from './index'

test('says hi to Fred', () => {
  const { queryByText } = render(<Index name="Fred" />)

  expect(queryByText('Hey, Fred')).toBeInTheDocument()
})
