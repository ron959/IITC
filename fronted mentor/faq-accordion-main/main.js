const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle 'active' class on the clicked item
    item.classList.toggle('active');

    // Find the icon inside the clicked item
    const icon = item.querySelector('.icon-img');

    // Switch between plus and minus icons
    if (item.classList.contains('active')) {
      icon.src = './assets/images/icon-minus.svg'; // Set to minus icon
    } else {
      icon.src = './assets/images/icon-plus.svg'; // Set back to plus icon
    }
  });
});

function changeColor(element, color) {
    const heading = element.querySelector('h3');
    heading.style.color = color;
  }
  
  function resetColor(element) {
    const heading = element.querySelector('h3');
    heading.style.color = ''; // Reset to original color
  }
  