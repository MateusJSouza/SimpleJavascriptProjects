// Setando o contador inicial
let count = 0;

// Selecionando os valores e os botões
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

console.log(btns)

// forEach -> executa uma função a cada elemento de um array
btns.forEach(function(btn) {
  btn.addEventListener('click', (e) => {
   const styles = e.currentTarget.classList;
   // se a minha variável contém a classe...
   if (styles.contains('decrease')) {
     count--;
   }
   else if (styles.contains('increase')) {
     count++;
   }
   else count = 0;
   value.textContent = count;
  })
})

