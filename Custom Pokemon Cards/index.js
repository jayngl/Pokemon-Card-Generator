
// INIT
const searchPokimon = document.getElementById("searchPokimon");
const PokimonImg = document.getElementById("PokimonImg");
const Name = document.getElementById("Name");
const cardContainer = document.getElementById("cardContainer");
const health = document.getElementById("health");
const imgContainer = document.getElementById("imgContainer");
const abilities = document.getElementById("abilities");
const abilities_ = document.getElementById("abilities_");
let typeIcon;

// const cry = document.getElementById("cry")
const stats = document.getElementById("stats")
// BACKGROUND IMGS
let background =["dark.jpg","electric.png","fairy.jpg","fire.jpg","flying.jpg","grass.jpg","ice.jpg","poison.jpg","psychic.jpfg","water.jpg","bug.jpg","dragon.jpg","ghost.jpg","rock.jpg","steel.jpg","fighting.jpg","ground.jpg"]

searchPokimon.addEventListener("click", ()=>{
    const pokimonName = document.getElementById("pokimonName").value.toLowerCase()

    async function pokimon() {
        try{
            const foofo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonName}`);
            const pokimonData = await foofo.json();
            // POKEMON DETAILS/STATS
            let pokemonSprite = pokimonData.sprites.front_default;

            let ability0 = pokimonData.abilities[0].ability.name;
            let ability1 = pokimonData.abilities[1].ability.name;

            abilities.textContent = ability0.toString().toUpperCase();
            abilities_.textContent = ability1.toString().toUpperCase();



            
            let height = pokimonData.height;
            let weight = pokimonData.weight;

            let pName = pokimonData.name;
            let type = pokimonData.types[0].type.name;
            let hp = pokimonData.stats[0].base_stat;

            PokimonImg.src = pokemonSprite;
            PokimonImg.style.display = "block";
            Name.textContent = pName.toUpperCase();
            stats.textContent = `height:${height}", Weight:${weight}lbs`

            // TYPE COLOR/BACKGROUND
            if(type ==="normal"){
                cardContainer.style.backgroundColor = "#A8A77A";
                // imgContainer.style.backgroundImage = `url(${background[15]})`
                typeIcon = "⭐"

            }
            else if(type ==="fire"){
                cardContainer.style.backgroundColor = "#EE8130";
                imgContainer.style.backgroundImage = `url(${background[3]})`
                typeIcon = "🔥"




            }

            else if(type ==="water"){
                cardContainer.style.backgroundColor = "#6390F0";
                imgContainer.style.backgroundImage = `url(${background[9]})`
                typeIcon = "🌊"


            }

            else if(type ==="electric"){
                cardContainer.style.backgroundColor = "#F7D02C";
                imgContainer.style.backgroundImage = `url(${background[1]})`
                typeIcon = "⚡"



            }

            else if(type ==="ice"){
                cardContainer.style.backgroundColor = "#96D9D6";
                imgContainer.style.backgroundImage = `url(${background[6]})`
                typeIcon = "❄"



            }

            else if(type ==="fighting"){
                cardContainer.style.backgroundColor = "#C22E28";
                imgContainer.style.backgroundImage = `url(${background[15]})`
                typeIcon = "🥊"



            }

            else if(type ==="poison"){
                cardContainer.style.backgroundColor = "#A33EA1";
                imgContainer.style.backgroundImage = `url(${background[7]})`
                typeIcon = "☠"



            }

            else if(type ==="ground"){
                cardContainer.style.backgroundColor = "#E2BF65";
                imgContainer.style.backgroundImage = `url(${background[16]})`
                typeIcon = "💩"



            }

            else if(type ==="flying"){
                cardContainer.style.backgroundColor = "#A98FF3";
                imgContainer.style.backgroundImage = `url(${background[4]})`
                typeIcon = "🥏"



            }

            else if(type ==="psychic"){
                cardContainer.style.backgroundColor = "#F95587";
                imgContainer.style.backgroundImage = `url(${background[8]})`
                typeIcon = "🔮"


            }

            else if(type ==="bug"){
                cardContainer.style.backgroundColor = "#A6B91A";
                imgContainer.style.backgroundImage = `url(${background[10]})`
                typeIcon = "🐛"


            }

            else if(type ==="rock"){
                cardContainer.style.backgroundColor = "#B6A136";
                imgContainer.style.backgroundImage = `url(${background[13]})`
                typeIcon = "🗻"


            }

            else if(type ==="ghost"){
                cardContainer.style.backgroundColor = "#735797";
                imgContainer.style.backgroundImage = `url(${background[12]})`
                typeIcon = "👻"



            }

            else if(type ==="dragon"){
                cardContainer.style.backgroundColor = "#6F35FC";
                imgContainer.style.backgroundImage = `url(${background[11]})`
                typeIcon = "🐉"


            }

            else if(type ==="dark"){
                cardContainer.style.backgroundColor = "#705746";
                imgContainer.style.backgroundImage = `url(${background[0]})`
                typeIcon = "🌑"


            }

            else if(type ==="steel"){
                cardContainer.style.backgroundColor = "#B7B7CE";
                imgContainer.style.backgroundImage = `url(${background[14]})`
                typeIcon = "🦾"


            }

            else if(type ==="fairy"){
                cardContainer.style.backgroundColor = "#D685AD";
                imgContainer.style.backgroundImage = `url(${background[2]})`
                typeIcon = "🧚‍♀️"


            }

            else if(type ==="grass"){
                cardContainer.style.backgroundColor = "#7AC74C";
                imgContainer.style.backgroundImage = `url(${background[5]})`
                typeIcon = "🍃"


            }

          
            health.textContent =  `${hp} HP${typeIcon}`;

        }
        
        catch(error){
            console.error(error);
            
        };
        
    }
    
    pokimon()

})

