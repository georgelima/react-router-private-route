import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

const isFunction = _ => typeof _ === 'function'

export default props => {
  const { auth, component: Component, redirect: pathname, ...rest } = props

  const isAuth = isFunction(auth) ? auth(props) : auth

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname, state: { from: props.location } }} />
        )
      }
    />
  )
}
