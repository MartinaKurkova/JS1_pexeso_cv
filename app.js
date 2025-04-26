const karticky = document.querySelectorAll('.karticka');
let otoceneKarticky = []; // Pole pro sledování otočených kartiček
let nalezenePary = 0; // Počet nalezených párů

karticky.forEach((karticka) => {
  karticka.addEventListener("click", (e) => {
    // Pokud kartička již byla otočená nebo je deaktivována, nedělej nic
    if (e.target.classList.contains("otocena") || e.target.disabled) {
      return;
    }

    // Otočení kartičky na zadní stranu
    e.target.classList.add("otocena");

    // Přidej kartičku do pole otočených kartiček
    otoceneKarticky.push(e.target);

    // Pokud jsou dvě kartičky otočené
    if (otoceneKarticky.length === 2) {
      // Zjisti, jestli jsou obrázky stejné
      const [karticka1, karticka2] = otoceneKarticky;
      const img1 = karticka1.querySelector("img");
      const img2 = karticka2.querySelector("img");

      if (img1.src === img2.src) {
        // Pokud jsou obrázky stejné, označ je jako nalezený pár
        nalezenePary++;
        // Zakáž klikání na tyto kartičky
        karticka1.disabled = true;
        karticka2.disabled = true;
        // Resetuj pole otočených kartiček
        otoceneKarticky = [];
      } else {
        // Pokud nejsou stejné, počkej 1 sekundu a otoč je zpět
        setTimeout(() => {
          karticka1.classList.remove("otocena");
          karticka2.classList.remove("otocena");
          // Resetuj pole otočených kartiček
          otoceneKarticky = [];
        }, 1000);
      }
    }
  });
});




