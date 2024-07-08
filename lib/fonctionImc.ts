interface Data{
    taille: number;
    poids: number;
}

const Imc = (data: Data) => {
    const taille = data.taille * 0.01;
    console.log(taille);

    return data.poids/Math.pow(taille,2)
}

export default Imc;