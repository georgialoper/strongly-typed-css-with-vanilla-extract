import React from 'react'

import { variants } from './Heading.css'

interface HeadingProps extends React.ComponentProps<'h1'> {
  variant: keyof typeof variants
}

export const Heading = ({variant, children}: HeadingProps) => (
  <div className={variants[variant]}>
    <h1>{children}</h1>
  </div>
)