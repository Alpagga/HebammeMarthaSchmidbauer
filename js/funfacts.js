<<<<<<< HEAD
    const facts = document.querySelectorAll('#Funfacts .funfact');
    const leftArrow = document.querySelector('#Funfacts .arrow-button.left');
    const rightArrow = document.querySelector('#Funfacts .arrow-button.right');
    const randomButton = document.querySelector('#Funfacts .arrow-button.random');
    let current = 0;

    function showFact(index) {
      facts.forEach((f, i) => f.classList.toggle('active', i === index));
    }

    leftArrow.addEventListener('click', () => {
      current = (current - 1 + facts.length) % facts.length;
      showFact(current);
    });

    rightArrow.addEventListener('click', () => {
      current = (current + 1) % facts.length;
      showFact(current);
    });

    randomButton.addEventListener('click', () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * facts.length);
      } while (randomIndex === current); // nicht derselbe wie aktuell
      current = randomIndex;
      showFact(current);
=======
    const facts = document.querySelectorAll('#Funfacts .funfact');
    const leftArrow = document.querySelector('#Funfacts .arrow-button.left');
    const rightArrow = document.querySelector('#Funfacts .arrow-button.right');
    const randomButton = document.querySelector('#Funfacts .arrow-button.random');
    let current = 0;

    function showFact(index) {
      facts.forEach((f, i) => f.classList.toggle('active', i === index));
    }

    leftArrow.addEventListener('click', () => {
      current = (current - 1 + facts.length) % facts.length;
      showFact(current);
    });

    rightArrow.addEventListener('click', () => {
      current = (current + 1) % facts.length;
      showFact(current);
    });

    randomButton.addEventListener('click', () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * facts.length);
      } while (randomIndex === current); // nicht derselbe wie aktuell
      current = randomIndex;
      showFact(current);
>>>>>>> c28808a4cf6732635907c4c3c8b6c85a7d87d235
    });