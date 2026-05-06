document.addEventListener('DOMContentLoaded', () => {
    // Modal Elements
    const modal = document.getElementById('bonusModal');
    const closeBtn = document.getElementById('closeModal');
    
    // Show modal after 1.5 seconds of page load
    setTimeout(() => {
        if (modal) {
            modal.classList.add('active');
        }
    }, 1500);

    // Close modal when close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Close modal when clicking outside of modal content
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

  
});
