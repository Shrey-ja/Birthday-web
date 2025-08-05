window.speechSynthesis.onvoiceschanged = function() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = 'Happy Birthday, Jenifer!';
    const voices = speechSynthesis.getVoices();
    msg.voice = voices.find(voice => voice.name.toLowerCase().includes("sunday") || voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("english"));
    if (msg.voice) {
      window.speechSynthesis.speak(msg);
    }
  };

  function showMain() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }

  function swapButtonsAndShowAngry() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const parent = document.getElementById("choiceBox");

    parent.insertBefore(noBtn, yesBtn); // Swap positions

    const emojis = document.getElementById('emojiContainer');
    emojis.style.display = 'block';
  }

  const audio = document.getElementById('birthday-audio');
  audio.addEventListener('play', () => {
    document.getElementById('audioWarning').style.display = 'none';
  });
  audio.addEventListener('error', () => {
    document.getElementById('audioWarning').style.display = 'block';
  });
  setTimeout(() => {
    if (audio.paused) {
      document.getElementById('audioWarning').style.display = 'block';
    }
  }, 3000);