// ===== MENU DATA =====
const menuItems = [
  { id: 1, name: "1/2 Dozen XL/L (Male)", desc: "Hand selected XL and Large Blue Crabs steamed fresh with Old Bay seasoning.", price: 75.00 },
  { id: 2, name: "M/S Dozen (Female)", desc: "Fresh Medium Blue Crabs steamed with Maryland-style Old Bay seasoning.", price: 95.00 },
  { id: 3, name: "1/2 Dozen M/S (Female)", desc: "Fresh Medium Blue Crabs steamed with Old Bay. Great value.", price: 55.00 },
  { id: 4, name: "XL/L Dozen (Male)", desc: "Hand-selected XL Blue Crabs steamed fresh with Old Bay flavor.", price: 125.00 },
  { id: 5, name: "Butter 8oz", desc: "Rich, melted butter for dipping. The perfect companion.", price: 5.00 }
];

// ===== OVERLAY =====
function openOrderModal() {
  document.getElementById('orderOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderMenu();
}
function closeOrderModal(e) {
  if (e && e.target !== document.getElementById('orderOverlay')) return;
  document.getElementById('orderOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== RENDER MENU =====
function renderMenu() {
  const container = document.getElementById('orderItems');
  container.innerHTML = menuItems.map(item => `
    <div class="order-item">
      <div class="order-item-thumb">${item.id}</div>
      <div class="order-item-info">
        <h4>${item.name}</h4>
        <div class="desc">${item.desc}</div>
        <div class="price">$${item.price.toFixed(2)}</div>
      </div>
    </div>
  `).join('');
}

// ===== ESC TO CLOSE =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('orderOverlay');
    if (overlay.classList.contains('open')) closeOrderModal();
  }
});
