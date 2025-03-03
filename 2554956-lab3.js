function getTitlesByReleaseYear(songs) {
    if (!Array.isArray(songs)) {
        throw new Error('Input should be an array of music track objects');
    }

    return songs.reduce((result, song) => {
        if (typeof song !== 'object' || !song.title || !song.releaseYear || typeof song.releaseYear !== 'number') {
            throw new Error('Each song should be an object with a title (string) and a release year (number)');
        }

        const { releaseYear, title } = song;
        if (!result[releaseYear]) {
            result[releaseYear] = [];
        }
        result[releaseYear].push(title);
        result[releaseYear].sort(); 
        return result;
    }, {});
}

const songs = [
    { title: 'Blinding Lights', artist: 'The Weeknd', releaseYear: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', releaseYear: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', releaseYear: 2020 },
];

console.log(getTitlesByReleaseYear(songs));
