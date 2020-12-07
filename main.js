const speed = document.querySelector('.speed'),
      bar = speed.querySelector('.speed-bar'),
      video = document.querySelector('.flex');

  function handleMove(e) {
      const x = e.pageX - this.offsetLeft;
      const percent = x / this.offsetWidth;
      const min = 0.4;
      const max = 4;
      const width = Math.round(percent * 100) + '%';
      const playbackRate = percent * (max - min) + min;
      bar.style.width = width;
      bar.textContent = playbackRate.toFixed(2) + '×';
      video.playbackRate = playbackRate;
    }

  speed.addEventListener('mousemove', handleMove);
