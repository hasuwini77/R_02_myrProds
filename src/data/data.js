function Song(img, artist, track, description, mp3, category) {
  this.img = img;
  this.artist = artist;
  this.track = track;
  this.description = description;
  this.mp3 = mp3;
  this.category = category;
}

export const MYR_TRACKS = [
  new Song("back2school.jpg", "MYR", "Back 2 School", "Ballad for the chillers out there", "Back2School.mp3", "jazzy"),
  new Song("auzenith.jpg", "MYR", "Au Zénith", "Collab with the one and only Civin, insane beat", "auZenith.mp3", "punchy"),
  new Song("powerflow.jpg", "MYR", "Power Flow", "Swift ballad from the one and only MYR lofi beats homie", "powerflow.mp3", "punchy"),
  new Song("warninglove.jpg", "MYR", "Warning Love", "One of my first hit that almost hit 1M stream back in 2022 got featured in the infamous lofi Beats editorial playlist on Spotify!", "WarningLove.mp3", "punchy"),
  new Song("styleinclouds.jpg", "MYR", "Style in Clouds", "a smooth jazzy and enjoyable track composed with one of my homie, Hugo on the keyboard, a beautiful soothing track to chill to", "StyleinClouds.mp3", "jazzy"),
  new Song("sleepingmchillin.jpg", "MYR", "Sleeping n Chillin", "An attempt to make a sleepy lofi track, very ambient and very inspiring to meditate and focus to", "Sleepingnchillin.mp3", "chill"),
  new Song("purplefilter.jpg", "MYR", "Purple Filter", "a relaxed chill track using the OG SP-404 from Roland, typicall proper lofi beat to chill to, jazzy vibes", "PurpleFilter.mp3", "chill"),
  new Song("kiwano.jpg", "MYR", "Kiwano", "First track released together with the homie Hugo Hassler, a young Swedish trumpet player, track is very smooth, very jazzy, a chill jazz ballad", "Kiwano.mp3", "jazzy"),
  new Song("jazzmachine.jpg", "MYR", "Jazz Machine", "This track was the MYR take on the very first compilation called MYR & Friends a released made by Widen Island record label with other dope lofi artists featured in it!", "JazzMachine.mp3", "jazzy"),
  new Song(
    "futureforest.jpg",
    "MYR",
    "Future Forest",
    "One of my very first release, in an EP called Dreamy Roots, this was most likely my most successfull release as throughout the years the EP receive a lot of listens and streams, it still receive a lot of streams nowadays though it is one of the first. Probably my best track, at least with the most charm in it! Tons of mistake that's why it's a cool one! Enjoy! <3 ",
    "FutureForests.mp3",
    "chill"
  ),
  new Song(
    "bretagne.jpg",
    "MYR",
    "Bretagne Time",
    "Track inspired by the beauty of Bretagne in France, inspired by the dope Artist Kristoffer Eikrem with his amazong sound pack, it's a really smooth track, well produced and very chill, enjoy!",
    "BretagneTime.mp3",
    "chill"
  ),
  new Song(
    "aurore.jpg",
    "MYR",
    "Aurore",
    "This track is a collaboration with the Norwegian Artist and Jazzman Kristoffer Eikrem, it is by far my most successful track though it is definitely not my favourite one. It was a dream to collaborate with Kristoffer, since I'm a big fan of his work. The track is very jazzy, very viby, it's a vibe! I hope we can work again soon! Enjoy it! ",
    "Aurore.mp3",
    "jazzy"
  ),
  new Song(
    "analogequipment.jpg",
    "MYR",
    "Analog Equipment",
    "Very redundant coolish lofi beats, this one was produced using the classic OG SP-404A from Roland, one of the most used piece of gear when it comes to true lofi beats. Enjoy my dudes!",
    "AnalogEquipment.mp3",
    "punchy"
  ),
];

const RANDOM_INDEX = Math.floor(Math.random() * MYR_TRACKS.length);
export const RANDOM_MYR = MYR_TRACKS[RANDOM_INDEX];

export const DISPLAYED_TRACKS = MYR_TRACKS.filter((song, index) => index !== RANDOM_INDEX);

export const JAZZY_TRACKS = MYR_TRACKS.filter((song, index) => index !== RANDOM_INDEX && song.category === "jazzy");

export const PUNCHY_TRACKS = MYR_TRACKS.filter((song, index) => index !== RANDOM_INDEX && song.category === "punchy");

export const CHILL_TRACKS = MYR_TRACKS.filter((song, index) => index !== RANDOM_INDEX && song.category === "chill");

const allMyrPic = ["myr1.jpg", "myr2.jpg", "myr3.jpg"];

const myrRandomIndex = Math.floor(Math.random() * allMyrPic.length);

export const randomMyr = allMyrPic[myrRandomIndex];
