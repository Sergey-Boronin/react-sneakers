function Header() {
  return (
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
  );
}

export default Header;
