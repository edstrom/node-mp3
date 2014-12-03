var ffmpeg = require('fluent-ffmpeg');

console.log('Start');

ffmpeg.getAvailableCodecs(function(err, codecs) {

  console.log('Available codecs:');
  for (key in codecs){
  		if (key == 'mp3') {
  			console.dir(codecs[key]);
  		}
  }
});

// ffmpeg().input('../test.mp2')
ffmpeg().input('../test.WAV')
	.audioCodec('libmp3lame')
	.audioBitrate(160)
	.on('start', function(commandLine) {
    	console.log('Spawned Ffmpeg with command: ' + commandLine);
    })
    .save('output.mp3');