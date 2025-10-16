document.addEventListener('DOMContentLoaded', function() {
            // Tab switching
            const tabs = document.querySelectorAll('.settings-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                   
                    document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
                    document.querySelectorAll('.settings-content').forEach(c => c.classList.remove('active'));
                  
                    this.classList.add('active');
                    
               
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(`${tabId}-settings`).classList.add('active');
                });
            });

            const saveButton = document.getElementById('saveAll');
            const notification = document.getElementById('notification');
            
            saveButton.addEventListener('click', function() {
                notification.classList.add('show');
                
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            });

            
            const switches = document.querySelectorAll('.switch input');
            switches.forEach(sw => {
                sw.addEventListener('change', function() {
                    console.log(`Setting changed: ${this.id} = ${this.checked}`);
                });
            });

            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                });
            });
        });