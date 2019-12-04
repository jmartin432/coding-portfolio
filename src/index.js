function changeFont () {
  const fonts = [
    "'Odibee Sans', cursive",
    "'Slabo 27px', serif",
    "'Fjalla One', sans-serif",
    "'Arvo', serif",
    "'Indie Flower', cursive"
  ]
  console.log('here')
  const font = Math.floor(Math.random() * Math.floor(fonts.length))

  const fontFamily = fonts[font]
  console.log(fontFamily)

  const jobBullets = document.querySelectorAll('.job_bullets')
  console.log(jobBullets)
  for (let x = 0; x < jobBullets.length; x++) {
    console.log(x)
    jobBullets[x].style.setProperty('--font-name', fontFamily)
  }
}

document.addEventListener('load', changeFont());



    // font-family: "'Odibee Sans', cursive;"
    //
    // font-family: 'Slabo 27px', serif;
    //
    // font-family: 'Fjalla One', sans-serif;
    //
    // font-family: 'Arvo', serif;
    //
    // font-family: 'Indie Flower', cursive;


