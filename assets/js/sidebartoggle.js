const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('sidebar-toggle');

toggleButton.addEventListener('click', toggleEvent)
    
function toggleEvent() {
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    console.log('Sidebar toggled');
}