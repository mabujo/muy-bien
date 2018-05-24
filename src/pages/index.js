import React from 'react'
import Hero from '../components/Hero';
import Teacher from '../components/Teacher'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Teacher />
      </div>
    )
  }
}
