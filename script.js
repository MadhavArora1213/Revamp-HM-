function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const text = document.querySelector('.about h1');
    sidebar.style.display = 'flex';
    text.style.display = 'none';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const text = document.querySelector('.about h1');
    sidebar.style.display = 'none';
    text.style.display = 'flex';

}