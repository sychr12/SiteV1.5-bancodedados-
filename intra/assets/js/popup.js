
document.addEventListener("DOMContentLoaded", function() {
  let modal = document.getElementById("popupModal");
  let closeBtn = document.getElementById("closePopup");
  let dontShowAgain = document.getElementById("dontShowAgain");
  let popupMessage = document.getElementById("popupMessage");

  // Recupera o texto salvo no localStorage
  let savedText = localStorage.getItem("editedText");
  if (savedText) {
      popupMessage.textContent = savedText; // Atualiza o texto do pop-up
  }

  // Verifica se o usuário já optou por não ver o pop-up novamente
  if (!localStorage.getItem('dontShowPopup')) {
      modal.style.display = "flex"; // Exibe o pop-up
  }

  // Fechar ao clicar no botão
  closeBtn.onclick = function() {
      if (dontShowAgain.checked) {
          localStorage.setItem('dontShowPopup', 'true'); // Marca para não mostrar novamente
      }
      modal.style.display = "none"; // Fecha o pop-up
  }

  // Fechar ao clicar fora do pop-up
  window.onclick = function(event) {
      if (event.target === modal) {
          if (dontShowAgain.checked) {
              localStorage.setItem('dontShowPopup', 'true'); // Marca para não mostrar novamente
          }
          modal.style.display = "none"; // Fecha o pop-up
      }
  }
});