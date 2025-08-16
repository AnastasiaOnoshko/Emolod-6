import PageTemplate from './../PageTemplates'
import Card from '../../components/Card'
import './style.css'

function Profile() {
  

  return (
    
    <PageTemplate>

        <div className="Card-page">



    <Card title={'Web Development'} buttonText={'Learn More'} children={"36$"}/>
    <Card title={'Data Science'} buttonText={'Enroll'} children={"20$"}/>
    <Card title={'UI/UX Design'} buttonText={'Get Started'} children={"96$"}/>
    <Card title={'Mobile Apps'} buttonText={'View Details'} children={"49$"}/>
    <Card title={'Cloud Computing'} buttonText={'Join Now'} children={"29$"}/>
    <Card title={'Cybersecurity'} buttonText={'Learn More'} children={"50$"}/>
    <Card title={'Game Development'} buttonText={'Start Course'} children={"82$"}/>
    <Card title={'AI & ML'} buttonText={'Sign Up'} children={"73$"}/>
    </div>
    
    </PageTemplate>
  )
}

export default Profile
