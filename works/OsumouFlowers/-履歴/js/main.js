'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

{
  const targets = document.querySelectorAll('img');

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}


{
  const openGallery1 = document.getElementById('openGallery1');
  const openGallery2 = document.getElementById('openGallery2');
  const openGallery3 = document.getElementById('openGallery3');
  const openGallery4 = document.getElementById('openGallery4');
  const openGallery5 = document.getElementById('openGallery5');
  const openGallery6 = document.getElementById('openGallery6');
  const openGallery7 = document.getElementById('openGallery7');
  const openGallery8 = document.getElementById('openGallery8');
  const openGallery9 = document.getElementById('openGallery9');
  const openGallery10 = document.getElementById('openGallery10');
  const openGallery11 = document.getElementById('openGallery11');
  const openGallery12 = document.getElementById('openGallery12');
  const openGallery13 = document.getElementById('openGallery13');
  const closeGallery1 = document.getElementById('closeGallery1');
  const closeGallery2 = document.getElementById('closeGallery2');
  const closeGallery3 = document.getElementById('closeGallery3');
  const closeGallery4 = document.getElementById('closeGallery4');
  const closeGallery5 = document.getElementById('closeGallery5');
  const closeGallery6 = document.getElementById('closeGallery6');
  const closeGallery7 = document.getElementById('closeGallery7');
  const closeGallery8 = document.getElementById('closeGallery8');
  const closeGallery9 = document.getElementById('closeGallery9');
  const closeGallery10 = document.getElementById('closeGallery10');
  const closeGallery11 = document.getElementById('closeGallery11');
  const closeGallery12 = document.getElementById('closeGallery12');
  const closeGallery13 = document.getElementById('closeGallery13');
  const modalGallery1 = document.getElementById('modalGallery1');
  const modalGallery2 = document.getElementById('modalGallery2');
  const modalGallery3 = document.getElementById('modalGallery3');
  const modalGallery4 = document.getElementById('modalGallery4');
  const modalGallery5 = document.getElementById('modalGallery5');
  const modalGallery6 = document.getElementById('modalGallery6');
  const modalGallery7 = document.getElementById('modalGallery7');
  const modalGallery8 = document.getElementById('modalGallery8');
  const modalGallery9 = document.getElementById('modalGallery9');
  const modalGallery10 = document.getElementById('modalGallery10');
  const modalGallery11 = document.getElementById('modalGallery11');
  const modalGallery12 = document.getElementById('modalGallery12');
  const modalGallery13 = document.getElementById('modalGallery13');
  const maskGallery1 = document.getElementById('maskGallery1');
  const maskGallery2 = document.getElementById('maskGallery2');
  const maskGallery3 = document.getElementById('maskGallery3');
  const maskGallery4 = document.getElementById('maskGallery4');
  const maskGallery5 = document.getElementById('maskGallery5');
  const maskGallery6 = document.getElementById('maskGallery6');
  const maskGallery7 = document.getElementById('maskGallery7');
  const maskGallery8 = document.getElementById('maskGallery8');
  const maskGallery9 = document.getElementById('maskGallery9');
  const maskGallery10 = document.getElementById('maskGallery10');
  const maskGallery11 = document.getElementById('maskGallery11');
  const maskGallery12 = document.getElementById('maskGallery12');
  const maskGallery13 = document.getElementById('maskGallery13');

  openGallery1.addEventListener('click', () => {
    modalGallery1.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery2.addEventListener('click', () => {
    modalGallery2.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery3.addEventListener('click', () => {
    modalGallery3.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery4.addEventListener('click', () => {
    modalGallery4.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery5.addEventListener('click', () => {
    modalGallery5.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery6.addEventListener('click', () => {
    modalGallery6.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery7.addEventListener('click', () => {
    modalGallery7.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery8.addEventListener('click', () => {
    modalGallery8.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery9.addEventListener('click', () => {
    modalGallery9.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery10.addEventListener('click', () => {
    modalGallery10.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery11.addEventListener('click', () => {
    modalGallery11.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery12.addEventListener('click', () => {
    modalGallery12.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  openGallery13.addEventListener('click', () => {
    modalGallery13.classList.remove('hiddenGallery');
    maskGallery.classList.remove('hiddenGallery');
  });

  closeGallery1.addEventListener('click', () => {
    modalGallery1.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery2.addEventListener('click', () => {
    modalGallery2.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery3.addEventListener('click', () => {
    modalGallery3.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery4.addEventListener('click', () => {
    modalGallery4.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery5.addEventListener('click', () => {
    modalGallery5.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery6.addEventListener('click', () => {
    modalGallery6.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery7.addEventListener('click', () => {
    modalGallery7.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery8.addEventListener('click', () => {
    modalGallery8.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery9.addEventListener('click', () => {
    modalGallery9.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery10.addEventListener('click', () => {
    modalGallery10.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery11.addEventListener('click', () => {
    modalGallery11.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery12.addEventListener('click', () => {
    modalGallery12.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

  closeGallery13.addEventListener('click', () => {
    modalGallery13.classList.add('hiddenGallery');
    maskGallery.classList.add('hiddenGallery');
  });

}

{
  const targets = document.querySelectorAll('.h1-border-bottom');

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}
