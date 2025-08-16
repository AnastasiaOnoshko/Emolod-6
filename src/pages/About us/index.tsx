import PageTemplate from '../PageTemplates'
import Card from '../../components/Card'
import './style.css'

function About () {
  

  return (
    <PageTemplate>
      
      <div className="Carding-page">



    <Card title={'Basic Plan'} buttonText={'Subscribe'} children={"9.99$"}/>
    <Card title={'Standard Plan'} buttonText={'Subscribe'} children={"19.99$"}/>
    <Card title={'Pro Plan'} buttonText={'Subscribe'} children={"29.99$"}/>
    <Card title={'Team Plan'} buttonText={'Get Started'} children={"49.99$"}/>
    <Card title={'Enterprise Plan'} buttonText={'Contact Us'} children={"99.99$"}/>
    <Card title={'Student Plan'} buttonText={'Enroll'} children={"5.99$"}/>
    <Card title={'Annual Plan'} buttonText={'Buy Now'} children={"199.99$"}/>
    <Card title={'Trial Plan'} buttonText={'Start Trial'} children={"0$"}/>
    </div>
    
    </PageTemplate>
  )
}

export default About 

