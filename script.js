/**
 * Lógica do Cartão de Visita Digital
 * Alessandra Bernardes
 */

// Inicializar os ícones do Lucide
lucide.createIcons();

/**
 * Função para partilhar o cartão
 */
function handleShare() {
    const shareData = {
        title: 'Psicóloga Alessandra Bernardes',
        text: 'Conheça o trabalho de Alessandra Bernardes - Atendimento Online',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(err => console.log('Erro ao partilhar:', err));
    } else {
        // Fallback para cópia de link se o navegador não suportar partilha nativa
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Link copiado para a área de transferência!');
    }
}

/**
 * Funções para troca de foto
 */
function triggerUpload() {
    document.getElementById('file-input').click();
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-img').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}
