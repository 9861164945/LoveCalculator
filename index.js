document.addEventListener('DOMContentLoaded', () => {
    const loveForm = document.getElementById('loveForm');
    const resultContainer = document.getElementById('result');

    function generateLovePercentage() {
        return Math.floor(Math.random() * 100) +1
            ;
    }

    function calculateLove() {
        const myNameInput = document.getElementById('myName');
        const loverNameInput = document.getElementById('loverName');

        const myName = myNameInput.value.trim();
        const loverName = loverNameInput.value.trim();

        if (myName === '' || loverName === '') {
            alert('Please enter both names');
            return;
        }

        const percentage = generateLovePercentage();
        const resultMessage = `Your Lover: ${loverName} ${percentage}% loves to: ${myName}`;

        resultContainer.innerText = resultMessage;
    }

    loveForm.addEventListener('submit', (event) => {
        event.preventDefault();
        calculateLove();
    });

    
    loveForm.addEventListener('click', (event) => {
        if (event.target.type === 'button') {
            calculateLove();
        }
    });
});
