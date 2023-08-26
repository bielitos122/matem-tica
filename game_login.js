
function addUser() {
	
	var player1Name = document.getElementById('player1Name').value;
	var player2Name = document.getElementById('player2Name').value;
  
	if (player1Name && player2Name) {
	  localStorage.setItem('player1', player1Name);
	  localStorage.setItem('player2', player2Name);
  
	  window.location.href = 'game_page.html';
	} else {
	  alert('Por favor, preencha os nomes dos jogadores.');
	}
  }
  