const songs = require('../../assets/songs.json');

module.exports = {
  up: async (queryInterface) => {
    let artists = new Set();

    songs.forEach((song) => {
      artists.add(song.artist);
    });

    await queryInterface.bulkInsert(
      'artists',
      Array.from(artists).map((artist) => ({
        name: artist,
        created_at: new Date(),
        updated_at: new Date(),
      })),
    );

    [artists] = await queryInterface.sequelize.query('select * from artists');
    await queryInterface.bulkInsert(
      'songs',
      songs.map((song) => ({
        name: song.song,
        artist_id: artists.find((artist) => artist.name === song.artist).id,
        year: song.year,
        created_at: new Date(),
        updated_at: new Date(),
      })),
    );

    return Promise.resolve();
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('songs', null);
    await queryInterface.bulkDelete('artists', null);
  },
};
