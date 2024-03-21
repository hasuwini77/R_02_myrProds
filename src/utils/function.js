export const getImageURL = imageName => { 

    return new URL(`../assets/${imageName}`, import.meta.url).href;

}

export const getAudioURL = audioFileName => {
    return new URL(`../assets/${audioFileName}`, import.meta.url).href;
}