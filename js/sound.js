/* Mouse-click sound, synthesised with the Web Audio API.
   No .wav to ship, and nothing is created until the first real click (browsers
   block audio before a user gesture anyway). */

const XPSound = (function () {
  const STORAGE_KEY = "xp-sound-enabled";

  let ctx = null;
  let noiseBuffer = null;
  let enabled = localStorage.getItem(STORAGE_KEY) !== "off";

  function context() {
    if (!ctx) {
      const Ctor = window.AudioContext || window.webkitAudioContext;
      if (!Ctor) return null;
      ctx = new Ctor();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  /* Short burst of white noise, reused for every click. */
  function getNoise(ac) {
    if (noiseBuffer) return noiseBuffer;
    const length = Math.floor(ac.sampleRate * 0.03);
    noiseBuffer = ac.createBuffer(1, length, ac.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      // Fade the noise out across the buffer so it reads as a "tick", not a hiss.
      data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    }
    return noiseBuffer;
  }

  /* down = the firmer press click, up = the lighter release click. */
  function click(variant) {
    if (!enabled) return;
    const ac = context();
    if (!ac) return;

    const isDown = variant !== "up";
    const now = ac.currentTime;

    const source = ac.createBufferSource();
    source.buffer = getNoise(ac);

    const bandpass = ac.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = isDown ? 2200 : 3000;
    bandpass.Q.value = 0.9;

    const highpass = ac.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 900;

    const gain = ac.createGain();
    const peak = isDown ? 0.16 : 0.09;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (isDown ? 0.028 : 0.02));

    source.connect(bandpass);
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(ac.destination);

    source.start(now);
    source.stop(now + 0.04);
  }

  function setEnabled(value) {
    enabled = !!value;
    localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
  }

  return {
    click: click,
    isEnabled: function () { return enabled; },
    setEnabled: setEnabled
  };
})();
