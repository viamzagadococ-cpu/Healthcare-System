// 1. PAGE ELEMENTS & CONTAINERS
const container = document.querySelector('.container');
const homePage = document.getElementById('homePage');
const dashboardPage = document.getElementById('dashboardPage');
const appointmentPage = document.getElementById('appointmentPage');
const settingsPage = document.getElementById('settingsPage');

// Login/Register Boxes
const registerBox = document.getElementById('registerBox');
const loginBox = document.getElementById('loginBox');
const registerForm_1 = document.querySelector('#registerBox form');
const loginForm_1 = document.querySelector('#loginBox form');

// Dashboard Sub-Sections
const dashboardMain = document.querySelector('.dashboard-main'); 
const patientSubPage = document.getElementById('patientdashboardPage');
const doctorSubPage = document.getElementById('doctordashboardPage');
const dashboardHolder_1 = document.querySelector('.home-nav-dashboard-holder_1');
const dashboardHolder_2 = document.querySelector('.home-nav-dashboard-holder_2');

// 2. GROUP ALL PAGES (For easy hiding/showing)
const allPages = {
    homePage: homePage,
    dashboardPage: dashboardPage,
    appointmentPage: appointmentPage,
    settingsPage: settingsPage,
    patientDashboardPage: patientSubPage,
    doctorDashboardPage: doctorSubPage
};

// 3. THE UNIFIED "SHOW PAGE" FUNCTION
function showPage(pageId) {
    // Hide ALL main pages
    Object.values(allPages).forEach(page => {
        if (page) page.style.display = 'none';
    });
    
    // Show the requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        // We use flex because your CSS relies on flex for the sidebar layout
        targetPage.style.display = 'flex';
    }
}

// 4. LOGIN / REGISTER TOGGLE LOGIC
document.getElementById('register-btn').addEventListener('click', () => {
    container.classList.add('active');
    registerForm_1.reset();
});

document.getElementById('login-btn').addEventListener('click', () => {
    container.classList.remove('active');
    loginForm_1.reset();
});

// Handle Login Submit
loginForm_1.addEventListener('submit', (e) => {
    e.preventDefault();
    container.style.display = 'none';
    showPage('homePage');
});

// 5. GLOBAL SIDEBAR NAVIGATION (Works for all sidebars)
document.querySelectorAll('.home-nav-item').forEach(btn => {
    btn.addEventListener('click', function() {
        const text = this.innerText.trim().toLowerCase();
        
        if (text.includes('home')) {
            showPage('homePage');
        } 
        else if (text.includes('dashboard')) {
            showPage('dashboardPage');
            // When going to dashboard, reset to the main stats view
            dashboardMain.style.display = 'block';
            patientSubPage.style.display = 'none';
            doctorSubPage.style.display = 'none';
        } 
        else if (text.includes('appointment')) {
            showPage('appointmentPage');
        } 
        else if (text.includes('settings')) {
            showPage('settingsPage');
        }
    });
});

// 6. DOCTOR & PATIENT SUB-DASHBOARD LOGIC
if (dashboardHolder_1) {
    dashboardHolder_1.addEventListener('click', () => {
        dashboardMain.style.display = 'none';
        patientSubPage.style.display = 'block'; // Show Patient Table
        doctorSubPage.style.display = 'none';
        console.log("Entering Patient Dashboard");
    });
}

if (dashboardHolder_2) {
    dashboardHolder_2.addEventListener('click', () => {
        dashboardMain.style.display = 'none';
        patientSubPage.style.display = 'none';
        doctorSubPage.style.display = 'block'; // Show Doctor Table
        console.log("Entering Doctor Dashboard");
    });
}

// Special case: Clicking the "Dashboard" icon/text inside the dashboard sidebar to go back to stats
const mainDashIcon = document.querySelector('#dashboardPage .fa-chart-line');
if (mainDashIcon) {
    mainDashIcon.parentElement.addEventListener('click', () => {
        dashboardMain.style.display = 'block';
        patientSubPage.style.display = 'none';
        doctorSubPage.style.display = 'none';
    });
}

// 7. LOGOUT LOGIC
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-outline') || e.target.innerText === 'Logout') {
        Object.values(allPages).forEach(page => { if(page) page.style.display = 'none'; });
        container.style.display = 'block';
        container.classList.remove('active'); 
    }
});
