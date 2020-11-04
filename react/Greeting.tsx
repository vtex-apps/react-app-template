import React from 'react'
import type { FunctionComponent } from 'react'

type Props = {
  name: string
}

const Index: FunctionComponent<Props> = ({ name }) => {
  window.addEventListener

  return <div>Hi, {name}</div>
}

export default Index
