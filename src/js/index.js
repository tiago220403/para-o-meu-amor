// coracoes animados
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 3 + Math.random() * 5 + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);

// imagem ao lado do titulo
const typedText = "MOTIVOS PARA VOCE VOLTAR PARA MIM ";
let i = 0;
function type() {
  const container = document.getElementById('typed-text');
  if(i < typedText.length) {
    container.innerHTML += typedText.charAt(i);
    i++;
    setTimeout(type, 100);
  } else {
    // Quando terminar, adiciona a imagem ao lado
    const img = document.createElement('img');
    img.src = 'https://www.kittl.com/_next/image?url=https%3A%2F%2Fcache.kittl.com%2Fpr%3Asharp%2Frs%3Afit%3A749%3A558%3A0%2Fplain%2Fapi%2Fusers%2Fcmfd6osr4495a0i8abvy49rh2%2Fuploads%2Fcmfd6sjrt0nzd0i7rdrzy1a6p.png&w=750&q=75';
    img.alt = 'Imagem fofinha';
    img.style.verticalAlign = 'middle';
    img.style.marginLeft = '10px';
    container.appendChild(img);
  }
}
type();

// Scroll fade-in para eventos e mensagens
function reveal() {
  const elements = document.querySelectorAll('.event, .message-box');
  for(let el of elements){
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 50){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  }
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);


// Função para mostrar animação ao scroll
  const motivos = document.querySelectorAll('.motivo');

  const mostrarMotivo = () => {
    const triggerBottom = window.innerHeight * 0.85;

    motivos.forEach(motivo => {
      const motivoTop = motivo.getBoundingClientRect().top;
      if(motivoTop < triggerBottom){
        motivo.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', mostrarMotivo);
  mostrarMotivo(); // para mostrar elementos já visíveis

