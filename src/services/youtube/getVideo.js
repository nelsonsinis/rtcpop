const { google } = require('googleapis');
const Downloader = require('youtube-mp3-downloader');
const path = require('path');

module.exports = async (search) => {
  const service = google.youtube('v3');

  const { data } = service.search.list({
    key: process.env.YOUTUBE_KEY,
    part: 'id,snippet',
    q: search,
  });

  return new Promise((resolve, reject) => {
    const youtube = new Downloader({
      ffmpegPath: '/usr/local/bin/ffmpeg',
      outputPath: path.resolve(__dirname, '../../../tmp'),
      youtubeVideoQuality: 'highest',
    });

    youtube.download(data.items[0].id.videoId, 'audio.mp3');
    youtube.on('error', reject);
    youtube.on('finished', resolve);
  });
};
