function copyToClipboard(element, email) {
    navigator.clipboard.writeText(email).then(() => {
        // Show the tooltip
        const tooltip = element.nextElementSibling;
        tooltip.style.display = 'inline';
        
        // Hide the tooltip after 2 seconds
        setTimeout(() => {
            tooltip.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}