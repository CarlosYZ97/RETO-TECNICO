const axios = require('axios');
const peopleModel = require('../../models/peopleModel');
const planetModel = require('../../models/planetMode');

const getPeople = async(number) => {

    try {
        const { data } = await axios({
            method: 'GET',
            url: `${process.env.URL_STARTWARS}/people/${number}`
        });

        const people = new peopleModel(
            data.name,
            data.height,
            data.mass,
            data.hair_color,
            data.skin_color,
            data.eye_color,
            data.birth_year,
            data.gender,
            data.homeworld,
            data.created,
            data.edited,
            data.url
        );

        return people;

    } catch (error) {
        throw error;
    }
};


getPlanet = async(number) => {
    try {
        const { data } = await axios({
            methos: 'GET',
            url: `${process.env.URL_STARTWARS}/planets/${number}`
        })

        const planet = new planetModel(
            data.name,
            data.rotation_period,
            data.orbital_period,
            data.diameter,
            data.climate,
            data.gravity,
            data.terrain,
            data.surface_water,
            data.population,
            data.residents,
            data.films,
            data.created,
            data.edited,
            data.url
        )
        console.log(planet);
        return planet;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    getPeople,
    getPlanet
}