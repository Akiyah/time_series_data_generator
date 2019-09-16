class TimeSeriesDataGenerator {
  static generate(start, end, freq, option) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var d = new Date(start);
    var i = 0;
    var data = [];
    while (d <= endDate) {
      var v = this.generateByDayCount(i, option);
      data.push([d.getTime(), v]);
      i = i + freq;
      d.setDate(d.getDate() + freq);
    }
    return data;
  }

  static generateByDayCount(i, option) {
    var value = option['base'] + option['random']*(Math.random()*2-1);
    var waves = option['waves'];
    waves.forEach(function(wave) {
      value += Math.sin(i/wave[0]*Math.PI*2)*wave[1];
    });
    return Math.round(value);
  }
}

