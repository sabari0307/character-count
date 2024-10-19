document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('message');
    const charCounter = document.getElementById('charCounter'); 
    const warningMessage = document.getElementById('warningMessage');
    const maxChars = 200;

    // Event listener for real-time character counting
    textarea.addEventListener('input', function () {
        const typedChars = textarea.value.length;
        const remainingChars = maxChars - typedChars;

        // Update character counter
        charCounter.textContent = `${typedChars}/${maxChars} characters`;

        // Show warning if user exceeds character limit
        if (typedChars >= maxChars) {
            warningMessage.textContent = 'Character limit reached!';
            warningMessage.classList.add('visible');
        } else {
            warningMessage.textContent = '';
            warningMessage.classList.remove('visible');
        }
    });
});
