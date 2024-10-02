let correctAnswers = 0;
let totalQuestions = 0;

function checkAnswer(button, isCorrect) {
    const buttons = button.parentElement.querySelectorAll('.answer');
    buttons.forEach(btn => btn.disabled = true);  // Блокування кнопок після вибору відповіді

    totalQuestions++;

    if (isCorrect) {
        correctAnswers++;
        document.getElementById('score').innerText = `Кількість правильних відповідей: ${correctAnswers}`;
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }

    if (totalQuestions === 10) {
        showResult();
    }
}

function showResult() {
    let score = 2;

    if (correctAnswers >= 9) {
        score = 5;
    } else if (correctAnswers >= 7) {
        score = 4;
    } else if (correctAnswers >= 5) {
        score = 3;
    }

    document.getElementById('result').innerText = `Ваш результат: ${score} балів`;
}
