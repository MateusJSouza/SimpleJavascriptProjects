// classList -> mostrar/pegar todas as classes
// contains -> checar a lista de classes para uma classe específica
// toggle -> alternar classe
// add -> adicionar classe
// remove - remover classe

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

// Verificação do toggle para alternar e mostrar o menu
navToggle.addEventListener('click', () => {
  // if (links.classList.contains('show-links')) { -> OUTRA FORMA DE FAZER
  //   links.classList.remove('show-links')
  // } else {
  //   links.classList.add('show-links')
  // }
  links.classList.toggle('show-links') /* FORMA MAIS SIMPLES DE FAZER */
})