document.addEventListener('DOMContentLoaded', (event) => {
    let flag = 0; // Use 'let' to allow reassignment
    const toggleDiv = document.getElementById('sidebarr');

    document.getElementById('slide-button1').addEventListener('click', function () {
        if (flag === 0) {
            toggleDiv.style.display = 'block'; // Show the div
            toggleDiv.style.zIndex = '5';
            flag = 1; // Update flag
            console.log('Sidebar shown'); // Debugging log
        } else {
            toggleDiv.style.display = 'none'; // Hide the div
            flag = 0; // Reset flag
            console.log('Sidebar hidden'); // Debugging log
        }
    });
});
