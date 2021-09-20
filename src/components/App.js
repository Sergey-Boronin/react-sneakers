import Header from "./Header";
import Main from "./main";
import Cart from "./Cart";


function App() {
  return (
    <div className="page flex flex-col w-10/12 items-center mx-auto bg-white rounded-xl mt-10 relative">
      <Cart />
      <Header />
      <Main />
    </div>
  );
}

export default App;
