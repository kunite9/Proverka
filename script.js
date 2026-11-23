let checksCount = 0;
const button = document.getElementById('checkBtn');
const output = document.getElementById('logOutput');

button.addEventListener('click', () => {
  checksCount++;
  const time = new Date().toLocaleTimeString();
  output.textContent = `[${time}] Диагностика #${checksCount}: Все модули в норме!`;
});