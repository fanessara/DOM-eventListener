const nameInput = document.getElementById('nameInput');
    const displayName = document.getElementById('displayName');
    const colorButton = document.getElementById('colorButton');
    const scoreDisplay = document.getElementById('score');


    nameInput.addEventListener('input', function () {
      const name = nameInput.value.trim();
      displayName.textContent = name ? `Halo, ${name}!` : "Halo, siapa kamu?";
    });


    colorButton.addEventListener('click', function () {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });

    
    let score = 0;

    function spawnEmoji() {
      const emoji = document.createElement('div');
      emoji.classList.add('emoji');
      emoji.textContent = '❤️';

      const x = Math.random() * (window.innerWidth - 40);
      const y = Math.random() * (window.innerHeight - 120);

      emoji.style.left = `${x}px`;
      emoji.style.top = `${y}px`;


      emoji.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Skor: ${score}`;
        emoji.remove();
      });

      document.body.appendChild(emoji);

    
      setTimeout(() => {
        emoji.remove();
      }, 2000);
    }

    
    setInterval(spawnEmoji, 1500);