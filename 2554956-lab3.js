function getTitlesByReleaseYear(songs) {
    if (!Array.isArray(songs)) {
        throw new Error('Input should be an array of music track objects');
    }

    return songs.reduce((result, { title, releaseYear }) => {
        if (typeof releaseYear !== 'number' || typeof title !== 'string') {
            throw new Error('Each song should have a title (string) and a release year (number)');
        }

        result[releaseYear] = result[releaseYear] || [];
        result[releaseYear].push(title);
        
        return result;
    }, {});
}

const songs = [
    { title: 'Blinding Lights', artist: 'The Weeknd', releaseYear: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', releaseYear: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', releaseYear: 2020 },
];

console.log(getTitlesByReleaseYear(songs));
