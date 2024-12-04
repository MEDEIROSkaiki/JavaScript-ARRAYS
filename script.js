
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const resultDiv = document.getElementById('resultado');


function atualizarIngredientes() {
  const selectedIngredients = []; 


  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedIngredients.push(checkbox.value); 
    }
  });

  if (selectedIngredients.length > 0) {
    resultDiv.textContent = `Ingredientes selecionados: ${selectedIngredients.join(', ')}`;
  } else {
    resultDiv.textContent = 'Nenhum ingrediente selecionado.';
  }
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', atualizarIngredientes);
});
