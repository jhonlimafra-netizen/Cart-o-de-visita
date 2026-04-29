// Inicializa os ícones do Lucide
lucide.createIcons();

let isEditing = false;

function toggleEdit() {
    isEditing = !isEditing;
    const card = document.getElementById('main-card');
    const editBtn = document.getElementById('edit-btn');
    const nameEl = document.getElementById('user-name');
    const bioEl = document.getElementById('user-bio');

    if (isEditing) {
        card.classList.add('edit-mode');
        editBtn.innerHTML = '<i data-lucide="check"></i>'; // Muda para ícone de "check"
        nameEl.contentEditable = "true";
        bioEl.contentEditable = "true";
        nameEl.focus();
    } else {
        card.classList.remove('edit-mode');
        editBtn.innerHTML = '<i data-lucide="edit-2"></i>'; // Volta para o lápis
        nameEl.contentEditable = "false";
        bioEl.contentEditable = "false";
        alert("Alterações salvas temporariamente no seu navegador!");
    }
    
    // Atualiza os ícones para refletir a mudança do botão
    lucide.createIcons();
}

function updatePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-img').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

function share() {
    const shareData = {
        title: document.getElementById('user-name').innerText,
        text: 'Confira meu cartão de visita digital!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para a área de transferência!");
    }
}
