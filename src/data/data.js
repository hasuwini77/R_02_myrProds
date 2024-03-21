function Song(img, artist, track, description, mp3, category) { 
    this.img = img;
    this.artist = artist;
    this.track = track; 
    this.description = description;
    this.mp3 = mp3; 
    this.category = category;
}

export const MYR_TRACKS = [ 
    new Song("back2school.jpg", "MYR", "Back 2 School", "Ballad for the chillers out there", "Back2School.mp3", "Lofi"),
    new Song("auzenith.jpg", "MYR", "Au Zénith", "Collab with the one and only Civin, insane beat", "auZenith.mp3", "Lofi"),
    new Song("powerflow.jpg", "MYR", "Power Flow", "Swift ballad from the one and only MYR lofi beats homie", "powerflow.mp3", "Lofi")
]

export const RANDOM_MYR = MYR_TRACKS[Math.floor(Math.random () * MYR_TRACKS.length)]; 

console.log(RANDOM_MYR);