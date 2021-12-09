/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { inject } from '../module'

export function Inject(props) {
  const el = React.createRef()
  if (!props.deps) {
    throw new Error('props 上没有声明 deps')
  }
  const deps = props.deps.map((dep) => {
    return props[dep]
  })
  useEffect(() => {
    inject(props.name).render(el.current, props)
  }, deps)
  return <div ref={el}></div>
}
