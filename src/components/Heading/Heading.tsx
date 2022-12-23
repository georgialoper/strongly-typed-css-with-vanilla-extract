import React from 'react'

import {root} from './Heading.css'

interface HeadingProps extends React.ComponentProps<'h1'> {}

export const Heading = ({children}: HeadingProps) => (
  <div className={root}>
    <h1>{children}</h1>
  </div>
)