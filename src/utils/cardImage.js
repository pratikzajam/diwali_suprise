/**
 * Generates and triggers download of a high-resolution 1200x800 PNG greeting card.
 */
export function downloadGreetingCardPNG({ recipient, sender, p1, p2 }) {
  const cardCanvas = document.createElement('canvas');
  cardCanvas.width = 1200;
  cardCanvas.height = 800;
  const c = cardCanvas.getContext('2d');

  // Background radial gradient
  const bgGrad = c.createRadialGradient(600, 320, 60, 600, 400, 720);
  bgGrad.addColorStop(0, '#2d143a');
  bgGrad.addColorStop(0.55, '#180a24');
  bgGrad.addColorStop(1, '#090510');
  c.fillStyle = bgGrad;
  c.fillRect(0, 0, 1200, 800);

  // Decorative gold outer border
  c.strokeStyle = '#f59e0b';
  c.lineWidth = 6;
  c.strokeRect(30, 30, 1140, 740);

  // Dashed inner border
  c.strokeStyle = 'rgba(251, 191, 36, 0.4)';
  c.lineWidth = 2;
  c.setLineDash([10, 8]);
  c.strokeRect(50, 50, 1100, 700);
  c.setLineDash([]);

  // Corner ornaments
  c.font = '36px serif';
  c.textAlign = 'center';
  c.fillText('🪔', 80, 85);
  c.fillText('🪔', 1120, 85);
  c.fillText('🌸', 80, 725);
  c.fillText('🌸', 1120, 725);

  // Festive top title
  c.font = 'bold 22px Cinzel, serif';
  c.fillStyle = '#fbbf24';
  c.fillText('✦ HAPPY DEEPAVALI ✦', 600, 120);

  // Salutation: Dear [Recipient],
  c.font = 'bold 44px Cinzel, Georgia, serif';
  c.fillStyle = '#ffffff';
  c.fillText(`Dear ${recipient},`, 600, 195);

  // Blessing paragraph 1
  c.font = '24px Outfit, sans-serif';
  c.fillStyle = '#f1f5f9';
  wrapText(c, p1, 600, 285, 940, 38);

  // Blessing paragraph 2
  wrapText(c, p2, 600, 415, 940, 38);

  // Center Diya Graphic
  c.font = '60px serif';
  c.fillText('🪔', 600, 555);

  // Sign-off
  c.font = 'italic 24px Cinzel, serif';
  c.fillStyle = '#cbd5e1';
  c.fillText('With warm wishes,', 600, 635);

  // Dynamic sender name
  c.font = 'bold 36px Cinzel, serif';
  c.fillStyle = '#fde68a';
  c.fillText(`${sender} 🪔`, 600, 685);

  // Trigger download
  const link = document.createElement('a');
  const safeRecipient = (recipient || 'Friend').replace(/\s+/g, '_');
  const safeSender = (sender || 'Diwali').replace(/\s+/g, '_');
  link.download = `Diwali-Greeting-for-${safeRecipient}-from-${safeSender}.png`;
  link.href = cardCanvas.toDataURL('image/png');
  link.click();
}

function wrapText(c, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = c.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      c.fillText(line.trim(), x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  c.fillText(line.trim(), x, currentY);
}

