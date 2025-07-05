import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <Section1/>
      {/* about section */}
      <Section2/>
      {/* menu section */}
      <Section3/>
      {/* promotion section*/}
      <Section4/>
      {/* shop section */}
      <Section5/>
      {/* blog section*/}
      <Section6/>
      {/* contact section */}
      <Section7/>
    </div>
  )
}

export default Home
