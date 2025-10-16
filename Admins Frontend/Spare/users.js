    document.addEventListener('DOMContentLoaded', function() {
      
      setInterval(updateCardData, 5000);
      
      
      document.querySelectorAll('.order-action').forEach(action => {
        action.addEventListener('click', function() {
          const orderId = this.parentNode.querySelector('td').textContent;
          alert(`Viewing details for order ${orderId}`);
        });
      });
      
      
      document.querySelector('.withdraw-btn').addEventListener('click', function() {
        alert('Withdrawal request initiated. Funds will be processed within 24 hours.');
      });
      
      
      document.querySelector('.upgrade').addEventListener('click', function() {
        alert('Redirecting to upgrade options...');
      });
      
      
      document.querySelector('.user-profile').addEventListener('click', function() {
        alert('Showing user profile menu...');
      });
      
      
      updateCardData();
    });
    
    function updateCardData() {
     
      const cards = document.querySelectorAll('.card:not(:last-child)');
      
      cards.forEach(card => {
        const valueElement = card.querySelector('.value');
        const trendElement = card.querySelector('.trend');
        let currentValue = parseFloat(valueElement.textContent.replace(/[^0-9.]/g, ''));
        
        
        const changePercent = (Math.random() * 10 - 5);
        const newValue = currentValue * (1 + changePercent/100);
        
       
        if (valueElement.textContent.includes('₦')) {
          valueElement.textContent = '₦' + newValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
          valueElement.textContent = Math.round(newValue);
        }
        
        
        if (changePercent >= 0) {
          trendElement.innerHTML = `<i class="fas fa-arrow-up"></i> ${Math.abs(changePercent).toFixed(1)}% from last update`;
          trendElement.className = 'trend up';
        } else {
          trendElement.innerHTML = `<i class="fas fa-arrow-down"></i> ${Math.abs(changePercent).toFixed(1)}% from last update`;
          trendElement.className = 'trend down';
        }
      });
    }