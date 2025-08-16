import PageTemplate from './../PageTemplates'
import Card from '../../components/Card'
import './style.css'

function Blog() {
  

  return (
    <PageTemplate>
        <div className="Cards-page">



    <Card title={'Laptop Pro'} buttonText={'Buy Now'} children={"63$"}/>
    <Card title={'Smartphone X'} buttonText={'Buy Now'} children={"97$"}/>
    <Card title={'Wireless Headphones'} buttonText={'Add to Cart'} children={"100$"}/>
    <Card title={'Smartwatch 5'} buttonText={'Order Now'} children={"86$"}/>
    <Card title={'4K Monitor'} buttonText={'Shop Now'} children={"1$"}/>
    <Card title={'Gaming Mouse'} buttonText={'Add to Cart'} children={"93$"}/>
    <Card title={'Mechanical Keyboard'} buttonText={'Buy Now'} children={"89$"}/>
    <Card title={'VR Headset'} buttonText={'Order Now'} children={"64$"}/>

    </div>

    </PageTemplate>
  )
}

export default Blog
