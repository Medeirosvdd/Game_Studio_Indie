// ===== Scroll suave entre seções =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // ===== Validação de formulário =====
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
  
      const nome = form.querySelector('input[name="nome"]');
      const email = form.querySelector('input[name="email"]');
      const mensagem = form.querySelector('textarea[name="mensagem"]');
  
      if (!nome.value || !email.value || !mensagem.value) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }
  