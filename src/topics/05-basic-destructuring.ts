
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Beso de amor",
    details: {
        author: "Rapunzel",
        year: 2011
    }
}

//? 3 FORMAS DE DESTRUCTURAR DETAILS ------------------------------------------------------------

const { song, songDuration:duration, details:{ author } } = audioPlayer; //acá poner solo details
//const { author } = details;
const { year } = audioPlayer.details;


console.log('canción:', song, 'dura: ', duration, ', escrita por:', author, 'en el año', year)

//? DESTRUCTURACIÓN DE UN ARREGLO :) ------------------------------------------------------------
// const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
// const trunks = dbz[3] || 'No hay personaje.'
// console.log('Personaje 3:', trunks );

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunk'];

console.log('Personaje:', trunks );


export {};