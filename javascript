const container = document.querySelector('.container');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');

registerBtn.addEventListener('click', ()=>{
    container.classList.add('active');
})

loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
})
//homepage
const loginForm = document.querySelector('.login form');
const homePage = document.getElementById('homePage');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    
    container.style.display = 'none';
    
    homePage.style.display = 'flex';
});
// DASHBOARD NAVIGATION
const dashboardNav = document.querySelector('.home-page .home-nav-item:nth-child(2)');

const dashboardPage = document.getElementById('dashboardPage');
const homePage = document.getElementById('homePage');

dashboardNav.addEventListener('click', () => {
    homePage.style.display = 'none';
    dashboardPage.style.display = 'flex';
});

// Example: go back to home from dashboard sidebar
document.getElementById('homeBtnDash').addEventListener('click', () => {
    dashboardPage.style.display = 'none';
    homePage.style.display = 'flex';
});


