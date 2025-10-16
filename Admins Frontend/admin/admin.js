
document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const sidebar = document.querySelector('.sidebar');
            
            mobileMenuBtn.addEventListener('click', function() {
                sidebar.classList.toggle('active');
            });
            
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    navItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    
                    const section = this.getAttribute('data-section');
                    document.querySelector('.header-title').textContent = 
                        `${section.charAt(0).toUpperCase() + section.slice(1)} Management`;
                });
            });
            
            const tabs = document.querySelectorAll('.tab');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    loadApprovals(this.getAttribute('data-tab'));
                });
            });
            
            const modals = {
                coupon: document.getElementById('couponModal'),
                order: document.getElementById('orderModal')
            };
            
            const openModal = (modal) => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            };
            
            const closeModal = (modal) => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            };
            
            document.getElementById('createCoupon').addEventListener('click', () => openModal(modals.coupon));
            
            document.querySelectorAll('.modal-close').forEach(btn => {
                btn.addEventListener('click', function() {
                    closeModal(this.closest('.modal'));
                });
            });
            
            document.getElementById('cancelCoupon').addEventListener('click', () => closeModal(modals.coupon));
            document.getElementById('cancelOrder').addEventListener('click', () => closeModal(modals.order));
            
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeModal(this);
                    }
                });
            });
            
            document.getElementById('couponForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Coupon created successfully!');
                closeModal(modals.coupon);
                this.reset();
            });
            
            document.getElementById('filterOrders').addEventListener('click', function() {
                alert('Filter functionality would open here');
            });
            
            document.getElementById('exportOrders').addEventListener('click', function() {
                alert('Exporting orders data...');
            });
            
            document.getElementById('createOrder').addEventListener('click', function() {
                openModal(modals.order);
            });
            
            loadOrders();
            loadApprovals('restaurants');
            
            initCharts();
            
            function loadOrders() {
                const orders = [
                    {
                        id: '#QB-1001',
                        customer: 'John Smith',
                        restaurant: 'Burger Palace',
                        amount: '$24.50',
                        status: 'completed',
                        date: 'Jun 15, 2023'
                    },
                    {
                        id: '#QB-1002',
                        customer: 'Sarah Johnson',
                        restaurant: 'Pizza Heaven',
                        amount: '$32.75',
                        status: 'pending',
                        date: 'Jun 15, 2023'
                    },
                    {
                        id: '#QB-1003',
                        customer: 'Michael Brown',
                        restaurant: 'Sushi World',
                        amount: '$45.20',
                        status: 'completed',
                        date: 'Jun 14, 2023'
                    },
                    {
                        id: '#QB-1004',
                        customer: 'Emily Davis',
                        restaurant: 'Taco Fiesta',
                        amount: '$18.90',
                        status: 'cancelled',
                        date: 'Jun 14, 2023'
                    },
                    {
                        id: '#QB-1005',
                        customer: 'Robert Wilson',
                        restaurant: 'Pasta Paradise',
                        amount: '$27.60',
                        status: 'completed',
                        date: 'Jun 13, 2023'
                    }
                ];
                
                const tbody = document.getElementById('ordersTableBody');
                tbody.innerHTML = '';
                
                orders.forEach(order => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${order.id}</td>
                        <td>${order.customer}</td>
                        <td>${order.restaurant}</td>
                        <td>${order.amount}</td>
                        <td><span class="status-badge ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
                        <td>${order.date}</td>
                        <td>
                            <button class="btn-icon action-btn view-order" title="View">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn-icon action-btn" title="Print">
                                <i class="fas fa-print"></i>
                            </button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
                
                document.querySelectorAll('.view-order').forEach(btn => {
                    btn.addEventListener('click', () => openModal(modals.order));
                });
            }
            
            function loadApprovals(type) {
                const data = {
                    restaurants: [
                        { name: 'Thai Spice', type: 'Restaurant', submitted: 'Jun 14, 2023', status: 'pending' },
                        { name: 'Burger Barn', type: 'Restaurant', submitted: 'Jun 13, 2023', status: 'pending' },
                        { name: 'Pizza Express', type: 'Restaurant', submitted: 'Jun 12, 2023', status: 'pending' },
                        { name: 'Sushi Palace', type: 'Restaurant', submitted: 'Jun 11, 2023', status: 'pending' },
                        { name: 'Taco Fiesta', type: 'Restaurant', submitted: 'Jun 10, 2023', status: 'pending' }
                    ],
                    drivers: [
                        { name: 'John Driver', type: 'Driver', submitted: 'Jun 14, 2023', status: 'pending' },
                        { name: 'Sarah Courier', type: 'Driver', submitted: 'Jun 13, 2023', status: 'pending' }
                    ],
                    users: [
                        { name: 'Mike123', type: 'User', submitted: 'Jun 14, 2023', status: 'pending' },
                        { name: 'EmilyFoodie', type: 'User', submitted: 'Jun 13, 2023', status: 'pending' },
                        { name: 'RobertDiner', type: 'User', submitted: 'Jun 12, 2023', status: 'pending' }
                    ]
                };
                
                const tbody = document.getElementById('approvalsTableBody');
                tbody.innerHTML = '';
                
                data[type].forEach(item => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${item.name}</td>
                        <td>${item.type}</td>
                        <td>${item.submitted}</td>
                        <td><span class="status-badge ${item.status}">${item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span></td>
                        <td>
                            <button class="btn btn-outline btn-sm view-btn">View</button>
                            <button class="btn btn-primary btn-sm approve-btn">Approve</button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
                
                document.querySelectorAll('.approve-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const row = this.closest('tr');
                        const statusBadge = row.querySelector('.status-badge');
                        statusBadge.className = 'status-badge completed';
                        statusBadge.textContent = 'Approved';
                        this.remove();
                        row.querySelector('.view-btn').textContent = 'View Details';
                    });
                });
            }
            
            function initCharts() {
                const ordersChart = new ApexCharts(document.querySelector("#ordersChart"), {
                    series: [{
                        name: "Orders",
                        data: [120, 190, 170, 210, 280, 320, 350]
                    }],
                    chart: {
                        height: 350,
                        type: 'area',
                        toolbar: {
                            show: false
                        }
                    },
                    colors: ['#4F46E5'],
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth',
                        width: 2
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0.7,
                            opacityTo: 0.3,
                        }
                    },
                    xaxis: {
                        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    tooltip: {
                        enabled: true
                    }
                });
                ordersChart.render();
                
                const revenueChart = new ApexCharts(document.querySelector("#revenueChart"), {
                    series: [35, 25, 15, 10, 10, 5],
                    chart: {
                        type: 'donut',
                        height: 350
                    },
                    labels: ['Burgers', 'Pizza', 'Sushi', 'Pasta', 'Mexican', 'Other'],
                    colors: ['#4F46E5', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#6B7280'],
                    legend: {
                        position: 'right'
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    total: {
                                        show: true,
                                        label: 'Total Revenue',
                                        formatter: function (w) {
                                            return '$24,587'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                });
                revenueChart.render();
                
                document.getElementById('ordersTimeRange').addEventListener('change', function() {
                    const days = parseInt(this.value);
                    const newData = Array.from({length: days}, () => Math.floor(Math.random() * 400) + 100);
                    ordersChart.updateSeries([{
                        data: newData
                    }]);
                });
                
                document.getElementById('revenueTimeRange').addEventListener('change', function() {
                    const range = this.value;
                    const newData = {
                        month: [35, 25, 15, 10, 10, 5],
                        last_month: [30, 20, 20, 15, 10, 5],
                        year: [40, 30, 10, 8, 7, 5]
                    }[range];
                    
                    revenueChart.updateSeries(newData);
                });
            }
        });

         
 // Initialize Supabase
const SUPABASE_URL = 'https://pwqcgvbnpewyzphoxpym.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cWNndmJucGV3eXpwaG94cHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MzM4NjAsImV4cCI6MjA2NTIwOTg2MH0.JZzL8_hK2cqoJTAE3qU0Srf2mporbGrVLlaHWxMjDtc'; // Your full key
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', async () => {
  const userNameElement = document.getElementById('user-name');
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
