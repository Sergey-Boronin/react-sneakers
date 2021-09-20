function Search() {
    return (
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
    )
}

export default Search;