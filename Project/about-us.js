addEventListener('mousemove', ev => {
  const force = 40;
  const dx = -ev.clientX / window.innerWidth * force;
  const dy = -ev.clientY / window.innerHeight * force;
  document.body.style.backgroundPositionX = dx + 'px';
  document.body.style.backgroundPositionY = dy + 'px';
});