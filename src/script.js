class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelectorAll(".kick-sound");
    this.snareAudio = document.querySelectorAll(".snare-sound");
    this.hihatAudio = document.querySelectorAll(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8; //when we arrive to 8 in the index, the step will revert back to 0
    const activeBars = document.querySelectorAll(`.b${step}`);
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumKit = new DrumKit();
drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.start();
});
