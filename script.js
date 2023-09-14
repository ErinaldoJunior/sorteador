const btn = document.querySelector(".btn");
const novoSorteio = document.querySelector(".novo-sorteio");
const parabens = document.querySelector(".parabens");
const numeros = [
  3, 82, 90, 15, 6, 7, 28, 54, 10, 23, 73, 11, 8, 37, 1, 20, 30, 40, 88, 77, 18,
  04, 33, 12, 44, 24,
];

function sorteio() {
  let alertas = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  numerosLoop = numeros.forEach((numero) => {
    if (alertas == numero) {
      parabens.classList.add("ativo");
      setTimeout(function () {
        Swal.fire({
          title: "O número sorteado foi: " + alertas,
          width: 600,
          padding: "3em",
          color: "#030F25",
          background: "#fff url(/img/star.gif)",
          backdrop: `
          #3965a77e
          url("/img/star.gif")
          left top
          repeat
        `,
        });
      });
    } else {
      novoSorteio.classList.add("ativado");
      Swal.fire({
        title: alertas + " - Oxe... O número sorteado não foi comprado :(",
        width: 600,
        padding: "3em",
        color: "white",
        background: "red",
        backdrop: `
        #3965a77e
        left top
        repeat
      `,
      });
    }
  });
}

btn.addEventListener("click", sorteio);
