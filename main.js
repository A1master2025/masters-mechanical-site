function calculateROI() {
  const bill = parseFloat(document.getElementById("bill").value);
  const efficiency = parseFloat(document.getElementById("efficiency").value);
  const savings = bill * (efficiency / 100);
  document.getElementById("savings").innerText = "Estimated Monthly Savings: $" + savings.toFixed(2);
}
