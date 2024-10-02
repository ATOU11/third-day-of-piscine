// On déclare la fonction qui a pour paramètre toFind
function findAddresses(toFind) {
// On déclare un tableau d'adresses
    const addresses = [
        ["45 avenue des tulipes", "92130 Issy-les-Moulineaux"],
        ["95 avenue parmentier", "75011 Paris"],
        ["24 Rue Pasteur", "92400 Courbevoie"],
        ["Champ de Mars, 5 Av. Anatole France", "75007 Paris"],
        ["Pl. Louis-Armand", "75571 Paris"]
    ];
  
    addresses.forEach(address => {
        let fullAddress = address.join(', ');
        if (fullAddress.includes(toFind)) {
            console.log(fullAddress);
        }
    });
}
