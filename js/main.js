/* ============================================================
   ROHIT KAPOOR PORTFOLIO — main.js
   ============================================================ */

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(function(el) { revealObs.observe(el); });

/* ── LIGHTBOX ──────────────────────────────────────────────── */
var lightbox      = document.getElementById('img-lightbox');
var lightboxImg   = document.getElementById('lightbox-img');
var lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(function() { lightboxImg.src = ''; }, 300);
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLightbox(); });

/* ── AUTO-LOAD PROJECT IMAGES FROM assets/ ─────────────────── */
document.querySelectorAll('.project-image-zone').forEach(function(zone) {
  var src = zone.getAttribute('data-src'); // e.g. "assets/proj1.png"
  if (src) {
    var img = new Image();
    img.onload = function() {
      // Image file exists — show it
      var el = document.createElement('img');
      el.src = src;
      el.className = 'preview';
      zone.insertBefore(el, zone.firstChild);
      zone.classList.add('has-image');
    };
    img.onerror = function() {
      // File not found — leave drop zone as-is, user can upload manually
    };
    img.src = src;
  }
});

/* ── PROJECT IMAGE ZONE INTERACTIONS ──────────────────────── */
document.querySelectorAll('.project-image-zone').forEach(function(zone) {
  var fileInput = zone.querySelector('.proj-file-input');
  var viewBtn   = zone.querySelector('.view-img-btn');
  var removeBtn = zone.querySelector('.remove-img-btn');

  // Click zone → open lightbox if image loaded, else open file picker
  zone.addEventListener('click', function(e) {
    if (e.target === viewBtn || e.target === removeBtn) return;
    if (zone.classList.contains('has-image')) {
      var img = zone.querySelector('img.preview');
      if (img) { openLightbox(img.src); return; }
    }
    fileInput.click();
  });

  // File picker change
  fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) setZoneImage(zone, this.files[0]);
  });

  // View button
  if (viewBtn) {
    viewBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      var img = zone.querySelector('img.preview');
      if (img) openLightbox(img.src);
    });
  }

  // Remove button
  if (removeBtn) {
    removeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      var img = zone.querySelector('img.preview');
      if (img) img.remove();
      zone.classList.remove('has-image');
      fileInput.value = '';
    });
  }

  // Drag & drop
  zone.addEventListener('dragover',  function(e) { e.preventDefault(); zone.classList.add('drag-over-p'); });
  zone.addEventListener('dragleave', function()  { zone.classList.remove('drag-over-p'); });
  zone.addEventListener('drop', function(e) {
    e.preventDefault(); zone.classList.remove('drag-over-p');
    var file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) setZoneImage(zone, file);
  });
});

function setZoneImage(zone, file) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var old = zone.querySelector('img.preview');
    if (old) old.remove();
    var img = document.createElement('img');
    img.src = e.target.result;
    img.className = 'preview';
    zone.insertBefore(img, zone.firstChild);
    zone.classList.add('has-image');
  };
  reader.readAsDataURL(file);
}

/* ── RESUME — load from assets/resume.pdf ──────────────────── */
var resumeURL      = 'assets/resume.pdf';
var resumeFilename = 'Rohit_Kapoor_Resume.pdf';
var resumeInput    = document.getElementById('resume-file-input');
var resumeZone     = document.getElementById('resume-zone');

// View button
document.getElementById('view-btn').addEventListener('click', function(e) {
  e.stopPropagation();
  window.open(resumeURL, '_blank');
});

// Download button
document.getElementById('dl-btn').addEventListener('click', function(e) {
  e.stopPropagation();
  var a = document.createElement('a');
  a.href = resumeURL;
  a.download = resumeFilename;
  a.click();
});

/* ── TIC TAC TOE ───────────────────────────────────────────── */
var board = Array(9).fill(null);
var currentPlayer = 'X';
var scores   = { X: 0, O: 0, D: 0 };
var gameOver = false;
var vsAI     = false;
var WINS     = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function openGame()  { document.getElementById('game-overlay').classList.add('open'); }
function closeGame() { document.getElementById('game-overlay').classList.remove('open'); }

document.getElementById('nav-game-btn').addEventListener('click',   openGame);
document.getElementById('float-game-btn').addEventListener('click', openGame);
document.getElementById('game-close-btn').addEventListener('click', closeGame);
document.getElementById('game-overlay').addEventListener('click', function(e) { if (e.target === this) closeGame(); });
document.getElementById('btn-2p').addEventListener('click', function() { setMode(false); });
document.getElementById('btn-ai').addEventListener('click', function() { setMode(true); });
document.getElementById('new-game-btn').addEventListener('click',    resetBoard);
document.getElementById('reset-scores-btn').addEventListener('click', resetAll);

document.querySelectorAll('.ttt-cell').forEach(function(cell) {
  cell.addEventListener('click', function() { handleCell(parseInt(this.dataset.i)); });
});

function setMode(ai) {
  vsAI = ai;
  document.getElementById('btn-2p').classList.toggle('active', !ai);
  document.getElementById('btn-ai').classList.toggle('active',  ai);
  resetBoard();
}
function renderBoard() {
  document.querySelectorAll('.ttt-cell').forEach(function(cell, i) {
    var val = board[i];
    cell.textContent = val ? (val === 'X' ? '✕' : '○') : '';
    cell.className   = 'ttt-cell' + (val ? ' ' + val.toLowerCase() + ' taken' : '');
  });
}
function setStatus(msg) { document.getElementById('game-status').textContent = msg; }
function checkWin(b, p) {
  return WINS.find(function(combo) { return combo.every(function(i) { return b[i] === p; }); }) || null;
}
function handleCell(idx) {
  if (board[idx] || gameOver) return;
  board[idx] = currentPlayer;
  renderBoard();
  var winCombo = checkWin(board, currentPlayer);
  if (winCombo) {
    var cells = document.querySelectorAll('.ttt-cell');
    winCombo.forEach(function(i) { cells[i].classList.add('win-cell'); });
    scores[currentPlayer]++; updateScores();
    setStatus(currentPlayer === 'X' ? '🎉 X wins!' : '🎉 O wins!');
    gameOver = true; return;
  }
  if (board.every(function(c) { return c; })) {
    scores.D++; updateScores(); setStatus("🤝 It's a draw!"); gameOver = true; return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  setStatus(currentPlayer === 'X' ? "✦ X's turn" : "✦ O's turn");
  if (vsAI && currentPlayer === 'O' && !gameOver) setTimeout(aiMove, 380);
}
function aiMove() { var m = bestMove(); if (m !== -1) handleCell(m); }
function bestMove() {
  var i;
  for(i=0;i<9;i++){if(!board[i]){board[i]='O';if(checkWin(board,'O')){board[i]=null;return i;}board[i]=null;}}
  for(i=0;i<9;i++){if(!board[i]){board[i]='X';if(checkWin(board,'X')){board[i]=null;return i;}board[i]=null;}}
  if(!board[4]) return 4;
  var corners=[0,2,6,8].filter(function(i){return !board[i];});
  if(corners.length) return corners[Math.floor(Math.random()*corners.length)];
  var avail=board.map(function(v,i){return v?null:i;}).filter(function(i){return i!==null;});
  return avail.length ? avail[Math.floor(Math.random()*avail.length)] : -1;
}
function updateScores() {
  document.getElementById('score-x').textContent = scores.X;
  document.getElementById('score-d').textContent = scores.D;
  document.getElementById('score-o').textContent = scores.O;
}
function resetBoard() { board=Array(9).fill(null); currentPlayer='X'; gameOver=false; renderBoard(); setStatus('✦ X goes first!'); }
function resetAll()   { scores={X:0,O:0,D:0}; updateScores(); resetBoard(); }
