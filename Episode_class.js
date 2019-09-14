class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
};
let firstEpisode = new Episode('kalank', '120', false);
let secondEpisode = new Episode('power', '120', false);
let thirdEpisode = new Episode('kameza', '120', false);

console.log(secondEpisode);