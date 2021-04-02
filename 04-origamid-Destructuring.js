// É possível desestruturar Objetos e Arrays
function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
    console.log(event);
}
  
// Irá definir uma constante para cada propriedade
// dentro de event, que tiver o mesmo nome que a constante.
function handleMouseMove(event) {
    const { clientX, clientY } = event;
    console.log(clientX, clientY);
}
  
// Podemos desestruturar o parâmetro
function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY);
}

document.documentElement.addEventListener("mousemove", handleMouseMove);

// Arrays
const frutas = ["Banana", "Uva"];
const [fruta1, fruta2] = frutas;
// fruta1 = banana
// fruta2 = Uva

// React Hooks
const useState = [
    "blue",
    function(color) {
      useState[0] = color;
    }
  ];
  
  const [color, setColor] = useState;
  
  setColor("Vermelho");
  