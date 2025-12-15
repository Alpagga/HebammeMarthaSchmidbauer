<?php get_header(); ?>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">

<video id="bgVideo" autoplay muted loop playsinline preload="auto" poster="<?php echo get_template_directory_uri(); ?>/assets/images/Background.jpg">
    <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/Background.webm" type="video/webm">
    <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/Background.mp4" type="video/mp4">
    Dein Browser unterstützt dieses Videoformat nicht.
</video>


<div class="cbn-navbar-wrapper">
  <nav class="navbar navbar-expand-custom navbar-mainbg fixed-top">
    <a class="navbar-brand navbar-logo" href="<?php echo home_url(); ?>">
        <?php echo file_get_contents(get_template_directory() . '/assets/photos/HebammeMarthaLogo.svg'); ?>
    </a>


<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <rect y="4" width="24" height="2"/>
        <rect y="11" width="24" height="2"/>
        <rect y="18" width="24" height="2"/>
    </svg>
</button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="hori-selector"><div class="left"></div><div class="right"></div></li>
        <li class="nav-item active"><a class="nav-link" href="#Start">Start</a></li>
        <li class="nav-item"><a class="nav-link" href="#Angebot">Angebot</a></li>
        <li class="nav-item"><a class="nav-link" href="#Über">Über mich</a></li>
        <li class="nav-item"><a class="nav-link" href="#Leitweg">Fortbildungen</a></li>
        <li class="nav-item"><a class="nav-link" href="#Begleitung">Begleitung</a></li>
        <li class="nav-item"><a class="nav-link" href="#Funfacts">Funfacts</a></li>
        <li class="nav-item"><a class="nav-link" href="#Kontakt">Kontakt</a></li>
      </ul>
    </div>
  </nav>
 </div>

<section class="normal-section" id="Start">
  
  <!-- Logo -->
<div class="logo-container">
    <?php echo file_get_contents(get_template_directory() . '/assets/photos/HebammeMarthaLogo.svg'); ?>
</div>

<h1 class="fade-in">Hebamme Martha Schmidbauer</h1>
  <h3>Kassenhebamme in Innsbruck</h3>

<!--CSS in landingpage.css-->
  <div class="welcome-container">
    <p class="welcome-text">Schön, dass Du da bist!</p>
    <div class="arrow-button">
        <a class="arrow" href="#Angebot"></a>
    </div>

  </div>
</section>

<section class="normal-section" id="Angebot">
  <h2 class="fade-in">Mein Angebot</h2>
  <h3>Als Kassenhebamme in Innsbruck</h3>
  <p>
    Als Kassenhebamme begleite ich euch während der Schwangerschaft und im Wochenbett. Die
    Kosten für meine Leistungen übernimmt die Krankenkasse. Ich betreue das Gebiet Innsbruck Stadt.
</p>
</section>

<section class="horizontal-wrapper" id="horizontalWrapper">
  <div class="horizontal-inner">
    <div class="h-section" id="h1">
      <div class="circle">
        
        <svg class="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
          <!-- rechte Linie -->
          <line x1="55" y1="5" x2="100" y2="5"  stroke-width="0.5" />
        </svg>

        <div class="icon-svg">
          <?php echo file_get_contents(get_template_directory() . '/assets/photos/ElternKindPass.svg'); ?>
        </div>

        <div class="circletop"></div>

      </div>
      <h3>Eltern-Kind-Pass-Gespräch</h3>
      <div class="scroll-content">
        <p>
          In diesem Rahmen haben wir zwischen der 18. und 22. Schwangerschaftswoche die Möglichkeit
          uns kennenzulernen, über eure Anliegen rund um Schwangerschaft, Geburt, Stillen und Wochenbett
          sowie über gesundheitsförderndes Verhalten in der Schwangerschaft zu sprechen.
          Wenn wir uns dabei miteinander wohlfühlen, können wir im Anschluss meine weitere Begleitung
          vereinbaren.
        </p>
    </div>
    </div>

    <div class="h-section" id="h2">
      <div class="circle">
        
        <svg class="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
          <!-- linke Linie -->
          <line x1="0" y1="5" x2="45" y2="5" stroke-width="0.5" />
          <!-- rechte Linie -->
          <line x1="55" y1="5" x2="100" y2="5" stroke-width="0.5" />
        </svg>

        <div class="circletop"></div>

        <div class="icon-svg">
          <?php echo file_get_contents(get_template_directory() . '/assets/photos/Hebammentroete.svg'); ?>
        </div>

      </div>
      <h3>Schwangerenvorsorge</h3>
      <p>
        Ein weiterer Termin zur Schwangerenvorsorge ist ab der 32. Schwangerschaftswoche möglich. Hier
        können wir weitere Anliegen und Fragen besprechen, euer Befinden überprüfen und noch einmal
        über Geburt, Stillen und Wochenbett sprechen.
        Wenn ihr eine ambulante Geburt plant, habt ihr Anspruch auf einen weiteren Vorsorgetermin.
      </p>
    </div>

    <div class="h-section" id="h3">
      <div class="circle">
   
        <svg class="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
          <!-- linke Linie -->
          <line x1="0" y1="5" x2="45" y2="5" stroke-width="0.5" />
          <!-- rechte Linie -->
          <line
              x1="55" y1="5" x2="100" y2="5"
              stroke-width="0.5"
              stroke="currentColor"
              stroke-dasharray="1 2"
            />
        </svg>      

        <div class="icon-svg">
          <?php echo file_get_contents(get_template_directory() . '/assets/photos/Wochenbett.svg'); ?>
        </div>

        <div class="circletop"></div>

      </div>
      <h3>Hausbesuche im Wochenbett</h3>
      <p>
        Vom ersten bis zum fünften Tag nach der Geburt übernimmt die Krankenkasse täglich einen
        Hausbesuch.
        Ab dem sechsten Tag nach der Geburt bis acht Wochen danach werden bis zu sieben weitere
        Hausbesuche von der Krankenkasse übernommen.
        Diese Leistungen könnt ihr auch nach einer stillen Geburt (Schwangerschaftsverlust, Totgeburt oder
        medizinisch indiziertem Schwangerschaftsabbruch) nach der 18. Schwangerschaftswoche in
        Anspruch nehmen.
      </p>
    </div>

    <div class="h-section" id="h4">
      <div class="circle">
   
        <svg class="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
          <!-- linke Linie -->
            <line
              x1="0" y1="5" x2="45" y2="5"
              stroke-width="0.5"
              stroke="currentColor"
              stroke-dasharray="1 2"
            />
        </svg>      

        <div class="icon-svg">
          <?php echo file_get_contents(get_template_directory() . '/assets/photos/StilleGeburt.svg'); ?>
        </div>

        <div class="circletop"></div>

      </div>
      <h3>Begleitung nach stiller Geburt</h3>
      <p>
        Wenn euer Sternenkind als Folge eines Schwangerschaftsverlusts, einer Totgeburt oder einem
        medizinisch-indiziertem Schwangerschaftsabbruch nach der 18. Schwangerschaftswoche geboren
        wird, habt ihr ebenfalls Anspruch auf Hebammenbegleitung im Wochenbett. 
      </p>
    </div>
  </div>
</section>


<section class="normal-section" id="Über">
  <div class="fullscreen-image-section">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/photos/HebammeMarthaPortrait.jpg" alt="Hebamme Martha Portrait">
    <div class="overlay-text">
      <h2>Über mich</h2>
    </div>
  </div>
</section>


<section class="normal-section" id="Über">
  <h2 class="fade-in">Über mich</h2>
  <p>
    Ich bin an einem sonnigen Sommertag in einer kleinen Stadt in Bayern geboren und dort auch
    aufgewachsen. Nach meiner Matura habe ich die Ausbildung zur diplomierten Gesundheits- und
    Krankenpflegerin am Klinikum der Universität München absolviert. Danach wollte ich noch mehr
    wissen, mich mit dem Wunder des Lebens beschäftigen und Frauen*gesundheit fördern. So hat es
    mich zum Hebammenstudium an die FH Salzburg verschlagen.
  </p>
</section>


<section class="normal-section" id="Über">
  <h2 class="fade-in">Über mich</h2>
  <p>
    Nach meinem Studienabschluss
    habe ich als Hebamme im Kreißsaal, auf der Wochenbettstation und in der gynäkologischen
    Ambulanz des BKH Schwaz gearbeitet. Nachdem ich dort viele Geburten und Familien begleiten
    durfte, freue ich mich nun darauf euch kontinuierlich schon ab der Schwangerschaft und bis ins
    Wochenbett zu unterstützen.
    In meiner Freizeit genieße ich ein liebevolles Umfeld und finde meinen Ausgleich in der Natur,
    beim Skaten, Snowboarden und Klavierspielen. Ich bin ein ruhiger, feinfühliger und offener
    Mensch. Ich höre euch gerne zu, stehe euch gerne bei und nehme vieles mit Humor.
    Ich freue mich darauf, Euch persönlich kennenzulernen!
  </p>
</section>

<section class="normal-section" id="Leitweg">
  <h2 class="fade-in">Meine Aus- und Fortbildungen</h2>

  <ul class="ausbildungsliste">
    <li><p>2018–2021: Diplomierte Gesundheits- und Krankenpflegerin am Klinikum der Universität München</p></li>
    <li><p>2021–2024: Hebamme BSc an der Fachhochschule Salzburg</p></li>
    <li><p>2024: Reanimationsschulung für Neugeborene, Teamtraining geburtshilfliche Notfälle</p></li>
    <li><p>2025: Perineale Gesundheit</p></li>
    <li><p>… und viele weitere</p></li>
  </ul>
</section>



<section class="normal-section" id="Begleitung">
  <h2  class="fade-in">Wie ich euch begleite</h2>
  <p>
    Mir ist es mir wichtig, in meiner Begleitung hinzusehen, zuzuhören und wahrzunehmen, um so all
    eure Gesundheitszeichen, Ressourcen und Aufmerksamkeitszeichen zu erfassen. Ich betrachte
    Schwangerschaft, Geburt und Wochenbett grundsätzlich als gesunde und natürliche Prozesse und
    euch als die Expert:innen für euch selbst. Ich stehe euch mit Rat und Tat zur Seite, um euch
    evidenzbasiert dabei zu unterstützen, das Wunder eures Körpers kennenzulernen und euren Weg zu
    finden. Elternwerden und als Familie zusammenzuwachsen ist ein Prozess, zu dem neben vielen
    schönen Momenten auch Herausforderungen gehören können. Ich möchte euch dabei helfen,
    gestärkt aus diesem Major Life Event hervorzugehen.
</p>
</section>

<section class="normal-section" id="Begleitung">
  <h2  class="fade-in">Wie ich euch begleite</h2>
  <p>
    Besonders freut es mich an meiner Arbeit, eure Liebe wachsen zu lassen: eure Liebe zu euch selbst
    und eurem Körper, eure Liebe als Paar und als Familie sowie die Liebe zu eurem Kind und die
    Liebe eures Kindes zu sich, zu euch und zum Leben.
    In meiner Begleitung ist es mir egal, wer ihr seid, aus welchem Hintergrund und Umfeld ihr kommt
    und in welcher Familienkonstellation ihr lebt. Ihr alle verdient selbstverständlich meinen Respekt
    und Unterstützung.
    Am liebsten begleite ich euch schon ab der Schwangerschaft. So können wir uns rechtzeitig
    kennenlernen und ich euch als medizinische Fachperson in den Vorbereitungen auf
    Schwangerschaft, Geburt, Stillen und Wochenbett begleiten.
</p>
</section>

<section class="normal-section" id="Begleitung">
  <h2  class="fade-in">Wie ich euch begleite</h2>
  <p>
    Am liebsten begleite ich euch schon ab der Schwangerschaft. So können wir uns rechtzeitig
    kennenlernen und ich euch als medizinische Fachperson in den Vorbereitungen auf
    Schwangerschaft, Geburt, Stillen und Wochenbett begleiten.
</p>
</section>

<section class="normal-section" id="Funfacts">
  <h2 class="fade-in">Funfacts</h2>

  <div class="funfact-container">
    <p class="funfact active">
      Die befruchtete Eizelle ist kleiner als ein Sandkorn und enthält bereits alle genetischen
      Informationen wie Haarfarbe, Körpergröße und sogar manche Charakterzüge.
    </p>
    <p class="funfact">
      Bereits in der dritten Schwangerschaftswoche beginnt das Herz des neuen Lebens zu schlagen –
      schon lange bevor das Gehirn vollständig angelegt ist.
    </p>
    <p class="funfact">
      Ab der 25. Schwangerschaftswoche kann das Kind die Stimme der Mutter hören und erkennt diese
      nach der Geburt wieder.
    </p>
    <p class="funfact">
      Die Gebärmutter kann während der Schwangerschaft um das 500-fache ihrer ursprünglichen Größe
      wachsen.
    </p>
    <p class="funfact">
      Ein Neugeborenes kann direkt nach der Geburt einen Bereich von 20 bis 30 cm scharf sehen, also
      von der Brust zum Gesicht der Mutter.
    </p>
    <p class="funfact">
      Oxytocin aktiviert Wehen und den Milchspendereflex. Außerdem schafft es zusammen mit weiteren
      Hormonen ein Gefühl der Nähe und Bindung.
    </p>
    <p class="funfact">
      Oxytocin reduziert das Stresshormon Cortisol, senkt den Blutdruck und kann das Immunsystem
      langfristig stärken.
    </p>
    <p class="funfact">
      Durch Veränderungen im präfrontalen Cortex können Mütter die Emotionen und Bedürfnisse des
      Kindes schneller erkennen – teils sogar bevor das Baby reagiert
    </p>
    <p class="funfact">
      Elternschaft und Bindung sind neurobiologische Prozesse, die durch Interaktion entstehen und nicht
      durch Genetik. Dementsprechend können auch nichtbiologische Eltern und weitere Bezugspersonen
      gleichwertige Bindungen erleben.
    </p>
  </div>

  <!-- Pfeile fest unten in der Section -->
  <div class="funfact-arrows">
    <div class="arrow-button left">
      <div class="arrow"></div>
    </div>
    
    <div class="arrow-button random">
      <div class="arrow-random">⟳</div>
    </div>
    
    <div class="arrow-button right">
      <div class="arrow"></div>
    </div>
  </div>
</section>

<section class="normal-section" id="Kontakt">
  <h2 class="fade-in">Kontakt</h2>
  <p>Hier kannst Du gleich Kontakt zu mir Aufnehmen.</p> 
  <?php echo do_shortcode('[forminator_form id="53"]'); ?>
</section>


<footer class="cbn-footer  no-animation">
  <div class="container">
    <!-- Text -->
    <div class="footer-text">
      <p>© 2025 Hebamme Martha Schmidbauer – Kassenhebamme in Innsbruck</p>
    </div>

    <!-- Links -->
    <div class="footer-links">
      <a href="/impressum">Impressum</a>
    </div>
  </div>

</footer>

<script>
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
    });
</script>




<?php get_footer(); ?>
