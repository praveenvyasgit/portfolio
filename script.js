// Floating color-swatch preview that follows the cursor when hovering
// a work-index row. Desktop only (see CSS media query); harmless no-op
// on touch devices since hover doesn't fire persistently there.

const stage = document.getElementById('previewStage');
const items = document.querySelectorAll('.index-item');

if (stage) {
  items.forEach((item) => {
    const previewId = item.getAttribute('data-preview');
    const swatch = document.getElementById(previewId);
    if (!swatch) return;

    item.addEventListener('mouseenter', () => {
      document.querySelectorAll('.preview-swatch').forEach((s) => s.classList.remove('visible'));
      swatch.classList.add('visible');
      stage.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
      stage.classList.remove('active');
    });
  });

  window.addEventListener('mousemove', (e) => {
    stage.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 75}px)`;
  });
}
