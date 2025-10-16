 
 // Initialize Supabase
const SUPABASE_URL = 'https://pwqcgvbnpewyzphoxpym.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cWNndmJucGV3eXpwaG94cHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MzM4NjAsImV4cCI6MjA2NTIwOTg2MH0.JZzL8_hK2cqoJTAE3qU0Srf2mporbGrVLlaHWxMjDtc'; // Your full key
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', async () => {
//   const userNameElement = document.getElementById('user-name');
  const userAvatarElement = document.getElementById('user-avatar');

  try {
    const { data, error } = await supabaseClient.auth.getUser();

    if (error || !data?.user) {
      console.log("No user found or not logged in");
      return;
    }

    const user = data.user;
    const username = user.user_metadata?.name || "User";

    // Update DOM
    userNameElement.textContent = username;

    // Create avatar initials
    const initials = username
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()
      .slice(0, 2); // First 2 letters max

    userAvatarElement.textContent = initials;

  } catch (err) {
    console.error("Error fetching user info:", err);
  }
});

document.addEventListener('DOMContentLoaded', function() {
            const userAvatar = document.getElementById('userAvatar');
            const profileDropdown = document.getElementById('profileDropdown');
            
            userAvatar.addEventListener('click', function(e) {
                e.stopPropagation();
                profileDropdown.classList.toggle('active');
            });
            
            
            document.addEventListener('click', function() {
                profileDropdown.classList.remove('active');
            });
            
            
            profileDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            
            const ctx = document.getElementById('performanceChart').getContext('2d');
            const timeSelect = document.getElementById('timeSelect');
            
            
            const chartData = {
                'This Week': {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                'This Month': {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [75, 50, 60, 80]
                },
                'This Year': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
                }
            };
            
           
            const performanceChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: chartData['This Month'].labels,
                    datasets: [{
                        label: 'Performance %',
                        data: chartData['This Month'].data,
                        backgroundColor: 'rgba(0, 78, 137, 0.1)',
                        borderColor: 'rgba(0, 78, 137, 1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: 'rgba(0, 78, 137, 1)',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: '#2E2E2E',
                            titleFont: {
                                size: 14,
                                weight: 'bold'
                            },
                            bodyFont: {
                                size: 12
                            },
                            padding: 12,
                            cornerRadius: 8,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                stepSize: 20
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
            
            
            timeSelect.addEventListener('change', function() {
                const selectedPeriod = this.value;
                performanceChart.data.labels = chartData[selectedPeriod].labels;
                performanceChart.data.datasets[0].data = chartData[selectedPeriod].data;
                performanceChart.update();
            });
            
            
            const navItems = document.querySelectorAll('.sidebar nav ul li');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    navItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            
            const editBtn = document.querySelector('.edit-btn');
            editBtn.addEventListener('click', function() {
                alert('Edit profile modal would appear here');
            });
            
            
            const upgradeBtn = document.querySelector('.upgrade-btn');
            upgradeBtn.addEventListener('click', function() {
                alert('Upgrade modal would appear here');
            });
            
            
            const rewardBtn = document.querySelector('.reward-btn');
            rewardBtn.addEventListener('click', function() {
                alert('Rewards catalog would appear here');
            });
        });