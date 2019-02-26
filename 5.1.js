const readlineSync = require("readline-sync");


function askTvSerie (name, productionY, castMember) {
    tvSerie = {
        name: name,
        productionY: productionY,
        castMember: [castMember]
    };

    tvSerie.name = readlineSync.question("Please enter name of tv series. ");
    tvSerie.productionY = readlineSync.question("Please enter production year of tv series. ");
    tvSerie.castMember = readlineSync.question("Please enter cast members of tv series. ");

    tvSerie.castMember.split(',');

    return tvSerie;
}

console.log(askTvSerie());