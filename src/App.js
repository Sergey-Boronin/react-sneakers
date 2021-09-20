function App() {
  return (
    <div className="page flex flex-col w-10/12 items-center mx-auto bg-white rounded-xl mt-10 relative">
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

      <header className="header w-full p-11 flex border-b-2">
        <div className="header-wrapper w-full flex justify-between">
          <nav className="w-full flex justify-between">
            <div className="logo-container flex items-center">
              <img
                className="logo inline-block object-none mr-4"
                src="/images/logo.svg"
                alt=""
              />
              <div className="tagline flex flex-col">
                <h2 className="inline-block p-0 m-0 text-xl font-bold uppercase">
                  React Sneackers
                </h2>
                <span className="inline-block text-sm text-gray-400">
                  Магазин лучших кроссовок
                </span>
              </div>
            </div>
            <div className="user flex items-center">
              <div className="header-cart flex mr-7">
                <img
                  src="/images/cart.svg"
                  alt=""
                  className="cart-image mr-2.5 transform motion-safe:hover:scale-110"
                />
                <span className="cart-price">1205 руб.</span>
              </div>
              <img
                src="/images/favorites.svg"
                alt=""
                className="user-favorites-image mr-7"
              />
              <img
                src="/images/user-accaunt.svg"
                alt=""
                className="user-accaunt-image"
              />
            </div>
          </nav>
        </div>
      </header>
      <main className="w-full px-11 py-4">
        <section className="search flex justify-between">
          <h1 className="text-3xl font-bold">Все кроссовки</h1>
          <div className="search-block border-2 rounded-lg flex justify-between p-2">
            <img
              className="object-contain w-5 mr-2"
              src="/images/search-button.svg"
              alt="search"
            />
            <input
              type="search"
              className="w-64 outline-none"
              placeholder="Поиск"
            />
          </div>
        </section>
        <section className="cards pt-10">
          <article className="card  rounded-3xl p-8 shadow relative">
            <img
              className="card-image"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <p className="text-sm mb-2">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col mb-2 text-sm">
                <span className="uppercase text-gray-400 text-xs">Цена:</span>
                <span className="font-bold">12 999 руб.</span>
              </div>
              <button className="">
                <img src="/images/add-to-cart-button.svg" alt="" />
              </button>
            </div>
            <button className="w-8 h-8 rounded-lg absolute top-8 left-8 shadow flex items-center justify-center">
              <img
                className="object-contain w-4 h-4 opacity-20"
                src="/images/like-button-image.svg"
                alt=""
              />
            </button>
          </article>
          <article className="card  rounded-3xl p-8 shadow relative">
            <img
              className="card-image"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <p className="text-sm mb-2">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col mb-2 text-sm">
                <span className="uppercase text-gray-400 text-xs">Цена:</span>
                <span className="font-bold">12 999 руб.</span>
              </div>
              <button className="">
                <img src="/images/add-to-cart-button.svg" alt="" />
              </button>
            </div>
            <button className="w-8 h-8 rounded-lg absolute top-8 left-8 shadow flex items-center justify-center">
              <img
                className="object-contain w-4 h-4 opacity-20"
                src="/images/like-button-image.svg"
                alt=""
              />
            </button>
          </article>
          <article className="card  rounded-3xl p-8 shadow relative">
            <img
              className="card-image"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <p className="text-sm mb-2">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col mb-2 text-sm">
                <span className="uppercase text-gray-400 text-xs">Цена:</span>
                <span className="font-bold">12 999 руб.</span>
              </div>
              <button className="">
                <img src="/images/add-to-cart-button.svg" alt="" />
              </button>
            </div>
            <button className="w-8 h-8 rounded-lg absolute top-8 left-8 shadow flex items-center justify-center">
              <img
                className="object-contain w-4 h-4 opacity-20"
                src="/images/like-button-image.svg"
                alt=""
              />
            </button>
          </article>
          <article className="card  rounded-3xl p-8 shadow relative">
            <img
              className="card-image"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <p className="text-sm mb-2">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col mb-2 text-sm">
                <span className="uppercase text-gray-400 text-xs">Цена:</span>
                <span className="font-bold">12 999 руб.</span>
              </div>
              <button className="">
                <img src="/images/add-to-cart-button.svg" alt="" />
              </button>
            </div>
            <button className="w-8 h-8 rounded-lg absolute top-8 left-8 shadow flex items-center justify-center">
              <img
                className="object-contain w-4 h-4 opacity-20"
                src="/images/like-button-image.svg"
                alt=""
              />
            </button>
          </article>
          <article className="card  rounded-3xl p-8 shadow relative">
            <img
              className="card-image"
              src="/images/sneaker.png"
              alt="sneaker"
            />
            <p className="text-sm mb-2">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col mb-2 text-sm">
                <span className="uppercase text-gray-400 text-xs">Цена:</span>
                <span className="font-bold">12 999 руб.</span>
              </div>
              <button className="">
                <img src="/images/add-to-cart-button.svg" alt="" />
              </button>
            </div>
            <button className="w-8 h-8 rounded-lg absolute top-8 left-8 shadow flex items-center justify-center">
              <img
                className="object-contain w-4 h-4 opacity-20"
                src="/images/like-button-image.svg"
                alt=""
              />
            </button>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
