
function calculateROI() {
  const bill = parseFloat(document.getElementById('billInput').value);
  const efficiency = parseFloat(document.getElementById('efficiencyInput').value);
  if (isNaN(bill) || isNaN(efficiency)) {
    document.getElementById('result').innerText = 'Please enter valid numbers.';
    return;
  }
  const savings = bill * (efficiency / 100);
  document.getElementById('result').innerText = `Estimated Monthly Savings: $${savings.toFixed(2)}`;
}
