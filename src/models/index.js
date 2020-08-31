const Artist = require('./artist');
const Song = require('./song');

Song.belongsTo(Artist, {
  foreignKey: 'artistId',
  as: 'artist',
});
Artist.hasMany(Song, {
  foreignKey: 'artistId',
  as: 'songs',
});

module.exports = { Artist, Song };
