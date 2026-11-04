const campoBusca = document.getElementById('busca');
const listaLivros = document.querySelectorAll('#catalogo article');
const formSugestao = document.getElementById('form-sugestao');
const campoTitulo = document.getElementById('titulo');
const elementoMensagem = document.getElementById('mensagem');

campoBusca.addEventListener('input', function () {
  const termo = campoBusca.value.trim().toLocaleLowerCase();

  listaLivros.forEach(function (artigo) {
    const titulo = artigo.textContent.trim().toLocaleLowerCase();
    if (titulo.includes(termo)) {
      artigo.hidden = false;
    } else {
      artigo.hidden = true;
    }
  });
});

formSugestao.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const titulo = campoTitulo.value.trim();

  if (titulo.length >= 3) {
    elementoMensagem.textContent = 'Sugestão enviada com sucesso!';
    elementoMensagem.className = 'mensagem sucesso';
    formSugestao.reset();
  } else {
    elementoMensagem.textContent = 'O título da obra deve ter pelo menos 3 caracteres.';
    elementoMensagem.className = 'mensagem erro';
  }
});
