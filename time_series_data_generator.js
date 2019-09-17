class TimeSeriesDataGenerator {
  constructor(start, end, freq) {
    this.start = start;
    this.end = end;
    this.freq = freq;
  }

  generateDates() {
    const self = this;
    const endDate = new Date(self.end);
    const d = new Date(self.start);
    const dates = [];
    while (d <= endDate) {
      dates.push(d.getTime());
      d.setDate(d.getDate() + self.freq);
    }
    return dates;
  }

  generateValues(option) {
    const self = this;
    const dates = this.generateDates();
    const values = [];
    dates.forEach((_value, i) => {
      values.push(self.generateValueByDayCount(i * self.freq, option));
    });
    return values;
  }

  generateValueByDayCount(i, option) {
    const self = this;
    let value = option['base'] + option['random']*(Math.random()*2-1);
    const waves = option['waves'];
    waves.forEach(wave => {
      value += Math.sin(i/wave[0]*Math.PI*2)*wave[1];
    });
    return Math.round(value);
  }
}

