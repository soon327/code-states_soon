class CamDancerClass extends DancerClass {
  constructor(top, left) {
    super(top, left);
    this.timeBetweenSteps = 1000;
    this.$node.style.transition = 'border 1s';
  }

  step() {
    let colors = ['#f6e58d', '#ffbe76', '#ff7979', '#badc58', '#dff9fb', '#22a6b3', '#e056fd', '#4834d4', '#30336b', '#535c68'];
    let random = Math.floor(Math.random() * 10);
    super.step();
    let style = this.$node.style;
    style.borderColor = colors[random];
  }
}
