// Supabase client setup
const SUPABASE_URL = 'https://pwqcgvbnpewyzphoxpym.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cWNndmJucGV3eXpwaG94cHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MzM4NjAsImV4cCI6MjA2NTIwOTg2MH0.JZzL8_hK2cqoJTAE3qU0Srf2mporbGrVLlaHWxMjDtc';
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTabs = document.querySelectorAll('.form-tabs li');
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    const roleOptions = document.querySelectorAll('.role-option');
    const sellerFields = document.getElementById('seller-fields');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeModal = document.querySelector('.close-modal');
    const sendResetLink = document.getElementById('send-reset-link');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Tab switching (login/register)
    formTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            formTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            document.querySelectorAll('.form').forEach(form => {
                form.classList.remove('active');
            });

            const tabName = this.getAttribute('data-tab');
            document.getElementById(`${tabName}-form`).classList.add('active');
        });
    });

    // Toggle password visibility
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Role switching
    roleOptions.forEach(option => {
        option.addEventListener('click', function () {
            roleOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');

            const role = this.getAttribute('data-role');
            if (role === 'seller') {
                sellerFields.classList.remove('hidden');
            } else {
                sellerFields.classList.add('hidden');
            }

            const riderFields = document.getElementById('rider-fields');
            if (riderFields) {
                if (role === 'rider') {
                    riderFields.classList.remove('hidden');
                } else {
                    riderFields.classList.add('hidden');
                }
            }
        });
    });

    // Forgot password modal
    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        forgotPasswordModal.classList.add('active');
    });

    closeModal.addEventListener('click', function () {
        forgotPasswordModal.classList.remove('active');
    });

    window.addEventListener('click', function (e) {
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.classList.remove('active');
        }
    });

    sendResetLink.addEventListener('click', function () {
        const email = document.getElementById('reset-email').value;
        if (!email) {
            alert('Please enter your email address');
            return;
        }

        // You can replace this with real Supabase reset logic
        alert(`Password reset link has been sent to ${email}`);
        forgotPasswordModal.classList.remove('active');
    });

    // Registration form submission
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const activeRole = document.querySelector('.role-option.active').getAttribute('data-role');
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const phone = document.getElementById('register-phone').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const agreeTerms = document.getElementById('agree-terms').checked;

        let restaurantName = '';
        let businessAddress = '';
        let taxId = '';

        if (activeRole === 'seller') {
            restaurantName = document.getElementById('restaurant-name').value;
            businessAddress = document.getElementById('business-address').value;
            taxId = document.getElementById('tax-id').value;
        }

        if (!name || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all required fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!agreeTerms) {
            alert('You must agree to the terms and conditions');
            return;
        }

        if (activeRole === 'seller' && (!restaurantName || !businessAddress)) {
            alert('Please fill in all seller information');
            return;
        }

        const userData = {
            role: activeRole,
            name,
            email,
            phone,
            password,
            restaurantName,
            businessAddress,
            taxId
        };

        registerWithSupabase(userData);
    });

    // Login form submission
    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        loginWithSupabase(email, password);
        
    });

    // Supabase login
    async function loginWithSupabase(email, password) {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            alert(`Login failed: ${error.message}`);
            return;
        }

        const { data: userDetails, error: userError } = await supabaseClient.auth.getUser();

        if (userError || !userDetails?.user) {
            alert(`Failed to fetch user info`);
            return;
        }

        const role = userDetails.user.user_metadata?.role || 'buyer';

        alert(`Login successful! Welcome ${userDetails.user.user_metadata?.name || ''}`);

        if (role === 'buyer') {
            window.location.href = 'C:\\Users\\USER\\Documents\\QuickBite\\Customers Frontend\\Homepage\\homepage.html';
        } else if (role === 'rider') {
            window.location.href = 'C:\\Users\\USER\\Documents\\QuickBite\\Admins Frontend\\user_profile.html';
        } else {
            window.location.href = 'C:\\Users\\USER\\Documents\\QuickBite\\Admins Frontend\\admin\\admin.html';
        }
    }

    // Supabase registration
    async function registerWithSupabase(userData) {
        const { email, password, name, phone, role, restaurantName, businessAddress, taxId } = userData;

        const { data, error } = await supabaseClient.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name,
                    phone,
                    role,
                    restaurantName,
                    businessAddress,
                    taxId
                }
            }
        });

        if (error) {
            alert(`Registration error: ${error.message}`);
            return;
        }

        alert('Account created successfully! Please login.');
        registerForm.reset();
        sellerFields.classList.add('hidden');
        document.querySelector('.role-option[data-role="buyer"]').click();
        document.querySelector('.form-tabs li[data-tab="login"]').click();
    }

    // Slideshow functionality
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    setInterval(nextSlide, 5000);
    showSlide(0);
});
