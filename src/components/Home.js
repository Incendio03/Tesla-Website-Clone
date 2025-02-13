import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Luxury electric sedan with performance."
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Learn More"
        />
        <Section 
            title="Model Y"
            description="Compact, versatile electric SUV."
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Learn More"
        />
        <Section 
            title="Model X"
            description="Electric SUV with falcon-wing doors."
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Learn More"
        />
        <Section 
            title="Model 3"
            description="Affordable, sleek electric sedan."
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Learn More"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="SHOP NOW"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
