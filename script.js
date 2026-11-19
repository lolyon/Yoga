(function(){
  const D = window.SITE_DATA, $ = id => document.getElementById(id);
  const paras = (el, arr) => arr.forEach(t => { const p = document.createElement('p'); p.textContent = t; el.appendChild(p); });

  /* ---- Fill page from data.js ---- */
  document.title = 'Yoga with ' + D.teacher.name;
  $('brand').textContent = D.studioName;
  $('yoga-heading').textContent = D.aboutYoga.heading;  paras($('yoga-text'), D.aboutYoga.paragraphs);
  $('teacher-name').textContent = D.teacher.name;       $('teacher-title').textContent = D.teacher.title;
  paras($('teacher-text'), D.teacher.paragraphs);
  const img = $('teacher-img'); img.src = D.teacher.photo; img.alt = 'Portrait of ' + D.teacher.name;
  img.onerror = () => img.remove();   // gradient placeholder shows until a real photo is added

  D.classes.forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = '<div><h3></h3><p class="meta"></p></div><p></p>';
    li.querySelector('h3').textContent = c.name;
    li.querySelector('.meta').textContent = c.level + ', ' + c.time + ', ' + c.length;
    li.lastElementChild.textContent = c.text;
    if (c.photos && c.photos.length){
      const row = document.createElement('div'); row.className = 'photos';
      c.photos.forEach((src, n) => {
        const tile = document.createElement('div'); tile.className = 'photo';
        const im = document.createElement('img');
        im.src = src; im.alt = D.teacher.name + ' teaching ' + c.name + ', photo ' + (n + 1); im.loading = 'lazy';
        im.onerror = () => im.remove();   // gradient placeholder stays until the photo is added
        tile.appendChild(im); row.appendChild(tile);
      });
      li.appendChild(row);
    }
    $('class-list').appendChild(li);
    const o = document.createElement('option'); o.textContent = c.name; $('class-select').appendChild(o);
  });

  /* ---- Intro: image grows from the centre, Om chants, then everything fades ---- */
  const intro = $('intro'), dur = D.intro.seconds;
  intro.style.setProperty('--dur', (dur * 0.85) + 's');
  $('intro-img').style.backgroundImage = 'url("' + D.intro.image + '"), radial-gradient(circle,#3a5a4c,#1f2a44)';
  $('intro-om').textContent = D.intro.caption;
  document.body.style.overflow = 'hidden';

  const audio = new Audio(D.intro.audio); audio.loop = true; audio.volume = 0.8;
  let finished = false;

  function tryPlay(){ return audio.play(); }
  tryPlay().catch(() => {                       // browsers block autoplay until the visitor interacts
    const b = $('intro-sound'); b.hidden = false;
    const start = () => { tryPlay().then(() => b.hidden = true).catch(()=>{}); };
    b.onclick = start;
    ['pointerdown','keydown','touchstart'].forEach(e => window.addEventListener(e, start, {once:true}));
  });

  requestAnimationFrame(() => requestAnimationFrame(() => intro.classList.add('play')));

  function finish(){
    if (finished) return; finished = true;
    const fade = setInterval(() => {            // fade the chant out, then stop it for good
      audio.volume = Math.max(0, audio.volume - 0.08);
      if (audio.volume <= 0.01){ audio.pause(); clearInterval(fade); }
    }, 120);
    intro.classList.add('done');
    document.body.style.overflow = '';
    setTimeout(() => intro.remove(), 1700);
  }
  setTimeout(finish, dur * 1000);
  $('intro-skip').onclick = finish;

  /* ---- Highlight current section in sidebar ---- */
  const links = [...document.querySelectorAll('#sidebar nav a')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id));
  }), {rootMargin:'-40% 0px -55% 0px'});
  document.querySelectorAll('main section').forEach(s => io.observe(s));

  /* ---- Booking: opens the visitor's email app with the request filled in ---- */
  $('book-form').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nClass: ${f.get('class')}\nPreferred date: ${f.get('date')}\n\n${f.get('message')||''}`;
    window.location.href = 'mailto:' + D.email + '?subject=' + encodeURIComponent('Booking request: ' + f.get('class')) + '&body=' + encodeURIComponent(body);
    $('book-note').textContent = 'Your email app should open now. Press send to finish your request.';
  });
})();