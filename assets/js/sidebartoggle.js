const sidebar = document.getElementById('sidebar');
const sidebartoggle = document.getElementById('sidebar-toggle');
const resources = document.getElementById('resources');

sidebartoggle.addEventListener('click', sidebartoggled)
resources.addEventListener('click', resourcestoggled)    

function sidebartoggled() {
    sidebar.classList.toggle('open');
    sidebartoggle.classList.toggle('open');
    console.log('Sidebar toggled');
}

function resourcestoggled() {
    resources.classList.toggle('open')
    console.log('Resources toggled')
}