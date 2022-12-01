let tl = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});
tl.set('#Shadow', {
  transformOrigin: '50% 100%',
})
  .fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '-=.75'
  );

const listenToPauseButton = function () {
  const button = document.querySelector('.js-pause-button');
  button.addEventListener('click', function () {
    document.querySelector('.js-pause').classList.toggle('u-hide');
    document.querySelector('.js-play').classList.toggle('u-hide');

    if (this.classList.contains('isPaused')) {
      tl.timeScale(0);
    } else {
      tl.timeScale(1);
    }
    this.classList.toggle('isPaused');
  });
};

const listenToButtons = function () {
  document.querySelector('.js-normal').addEventListener('click', function () {
    tl.timeScale(1);
  });
  document.querySelector('.js-slow').addEventListener('click', function () {
    tl.timeScale(0.5);
  });
  document.querySelector('.js-fast').addEventListener('click', function () {
    tl.timeScale(2);
  });
};

listenToPauseButton();
listenToButtons();
