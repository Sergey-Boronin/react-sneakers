function Cart() {
  return (
    <div className="cart-modal fixed w-full h-full z-10 left-0 top-0">
      <div className="cart-content w-1/4 min-h-full fixed right-0 p-7 bg-white flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Корзина</h2>
        <button className="cart-close-btn absolute top-9 right-12 cursor-pointer">
          <img src="/images/cart-close-btn.svg" alt="Закрыть корзину" />
        </button>
        <div className="cart flex-auto flex flex-col mb-6">
          <div className="cart-item rounded-3xl p-6 shadow relative flex justify-between items-center">
            <img
              className="cart-image w-1/4"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <div className="flex flex-col justify-between w-1/2">
              <p className="text-sm mb-2">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="flex flex-col mb-2 text-sm">
                <span className="font-bold">12 999 руб.</span>
              </div>
            </div>
            <button className="cart-remove-btn">
              <img src="/images/close-button-img.svg" alt="" />
            </button>
          </div>
          <div className="cart-item rounded-3xl p-6 shadow relative flex justify-between items-center">
            <img
              className="cart-image w-1/4"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <div className="flex flex-col justify-between w-1/2">
              <p className="text-sm mb-2">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="flex flex-col mb-2 text-sm">
                <span className="font-bold">12 999 руб.</span>
              </div>
            </div>
            <button className="cart-remove-btn">
              <img src="/images/close-button-img.svg" alt="" />
            </button>
          </div>
          <div className="cart-item rounded-3xl p-6 shadow relative flex justify-between items-center">
            <img
              className="cart-image w-1/4"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <div className="flex flex-col justify-between w-1/2">
              <p className="text-sm mb-2">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="flex flex-col mb-2 text-sm">
                <span className="font-bold">12 999 руб.</span>
              </div>
            </div>
            <button className="cart-remove-btn">
              <img src="/images/close-button-img.svg" alt="" />
            </button>
          </div>
          <div className="cart-item rounded-3xl p-6 shadow relative flex justify-between items-center">
            <img
              className="cart-image w-1/4"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <div className="flex flex-col justify-between w-1/2">
              <p className="text-sm mb-2">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="flex flex-col mb-2 text-sm">
                <span className="font-bold">12 999 руб.</span>
              </div>
            </div>
            <button className="cart-remove-btn">
              <img src="/images/close-button-img.svg" alt="" />
            </button>
          </div>
          <div className="cart-item rounded-3xl p-6 shadow relative flex justify-between items-center">
            <img
              className="cart-image w-1/4"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <div className="flex flex-col justify-between w-1/2">
              <p className="text-sm mb-2">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="flex flex-col mb-2 text-sm">
                <span className="font-bold">12 999 руб.</span>
              </div>
            </div>
            <button className="cart-remove-btn">
              <img src="/images/close-button-img.svg" alt="" />
            </button>
          </div>
          <div className="cart-item rounded-3xl p-6 shadow relative flex justify-between items-center">
            <img
              className="cart-image w-1/4"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <div className="flex flex-col justify-between w-1/2">
              <p className="text-sm mb-2">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="flex flex-col mb-2 text-sm">
                <span className="font-bold">12 999 руб.</span>
              </div>
            </div>
            <button className="cart-remove-btn">
              <img src="/images/close-button-img.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="cart-footer">
          <div className="cart-summary flex justify-between items-baseline">
            <span className="pr-1">Итого:</span>
            <span className="cart-border-block"></span>
            <span className="pl-1 font-bold">12 999 руб.</span>
          </div>
          <div className="cart-tax flex justify-between items-baseline mb-6">
            <span className="pr-1">Налог 5%:</span>
            <span className="cart-border-block"></span>
            <span className="pl-1 font-bold">12 999 руб.</span>
          </div>
          <button className="cart-order-button w-full h-12  rounded-xl flex justify-center items-center pl-12">
            <span className="cart-order-button-text text-lg font-bold mr-8 text-white">
              Оформить заказ
            </span>
            <img
              className="cart-order-button-arrow"
              src="/images/cart-button-arrow.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
