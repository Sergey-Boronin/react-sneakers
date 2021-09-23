function Card(props) {
  return (
    <article className="card  rounded-3xl p-8 shadow relative">
      <img className="card-image" src="/images/sneaker.png" alt="sneaker" />
      <p className="text-sm mb-2">{props.name}</p>
      <div className="flex justify-between">
        <div className="flex flex-col mb-2 text-sm">
          <span className="uppercase text-gray-400 text-xs">Цена:</span>
          <span className="font-bold">{props.price}</span>
        </div>
        <button className="">
          <img src="/images/add-to-cart-button.svg" alt="" />
        </button>
      </div>
      <button className="w-8 h-8 rounded-lg absolute top-8 left-8 shadow flex items-center justify-center">
        <img
          className="object-contain w-4 h-4 opacity-20"
          src="/images/like-button-image.svg"
          alt="В избранное"
        />
      </button>
    </article>
  );
}

export default Card;
