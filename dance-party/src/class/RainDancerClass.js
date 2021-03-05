class RainDancerClass extends DancerClass {
  constructor(top, left) {
    super(top, left);
    this.timeBetweenSteps = 1000;
    this.$node.style.transition = 'transform 1s';
  }

  step() {
    super.step();
    let style = this.$node.style;

    this.$node.animate([{ transform: 'translate(0)' }, { transform: 'translate(0, 100px)' }], 500);

    style.borderColor = 'white';
    style.opacity = '0.7';
  }
}
