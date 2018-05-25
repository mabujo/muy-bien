import React from 'react'
import Hero from '../components/Hero';
import Teacher from '../components/Teacher'
import Lessons from '../components/Lessons'
import Services from '../components/Services'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Teacher classes={`section`} />
        <Lessons classes={`section section-stripe`} />
        <Services classes={`section`} />
      </div>
    )
  }
}
