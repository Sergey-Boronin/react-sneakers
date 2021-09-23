import Card from './Card'
import initData from "./initialCards"

function Cards(props) {
    return (
        <section className="cards pt-10">
        {initData.map(item => 
        <Card 
        name={item.name} 
        price={item.price}/>
        )}
        </section>
    )
}

export default Cards;