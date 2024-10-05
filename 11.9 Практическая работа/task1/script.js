document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Не указан';
    const rating = document.getElementById('rating').value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value).join(', ');
    const comments = document.getElementById('comments').value;
  
    let resultHTML = `
      <p><strong>Имя:</strong> ${username}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Пол:</strong> ${gender}</p>
      <p><strong>Оценка сервиса:</strong> ${rating}</p>
      <p><strong>Интересы:</strong> ${interests}</p>
      <p><strong>Комментарии:</strong> ${comments}</p>
    `;
  
    document.getElementById('results').innerHTML = resultHTML;
  });
  