// Animation on scroll: add 'visible' class when element in viewport
(function(){
  const els = document.querySelectorAll('.fade-up, .fade-in');
  function onScroll(){
    const top = window.scrollY + window.innerHeight - 80;
    els.forEach(el=>{
      if(el.getBoundingClientRect().top + window.scrollY < top){
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);

  // Contact form handler: opens mail client with form data
  window.submitForm = function(e){
    e.preventDefault();
    const name = document.getElementById('name')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';
    const subject = encodeURIComponent('Arju Solars - Quote Request from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ankitparmar5035582@gmail.com?subject=${subject}&body=${body}`;
  };
})();
