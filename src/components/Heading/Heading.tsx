import React from 'react'

interface HeadingProps extends React.ComponentProps<'h1'> {}

export const Heading = ({children}: HeadingProps) => (
  <h1>{children}</h1>
)