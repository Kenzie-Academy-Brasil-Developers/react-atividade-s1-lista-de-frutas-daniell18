import "./index.css";
function Teste({ fruits, setFruits }) {
  const totalPrice = fruits.reduce((acc, valorAt) => {
    return acc + valorAt.price;
  }, 0);
  function filterFruits() {
    const redFruits = fruits.filter((fruits) => {
      return fruits.color === "red";
    });
    setFruits(redFruits);
  }
  return (
    <div className="main">
      <div className="price">O Valor total : {totalPrice}</div>
      <div className="lista">
        {fruits.map((fruits) => (
          <li>{fruits.name}</li>
        ))}
      </div>
      <button onClick={filterFruits}>Mostrar Frutas Vermelhas</button>
    </div>
  );
}
export default Teste;
