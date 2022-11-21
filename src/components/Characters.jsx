import info from '../info.json'
import '../styles/Characters.css'
const isles = info.isles
const characters = info.characters

const CharacterCard = (character, npc_bool) => {
    const isle_or_player = npc_bool ? 
        isles.filter((isle) => isle.id === character.isle_id ? isle.name : null)[0].name :
        character.player
    return (
        <div className="card">
            <div className="card-front">
                <img className='card-img' src="" alt="" />
                <p className="card-front-name">{character.name}</p>
            </div>
            <div className="card-back hidden">
                <p className="card-back-name">{character.name}</p>
                <p className="isle-or-player">{isle_or_player}</p>
            </div>
            
        </div>
    )
}


const Characters = () => {
    return (
        <div id='lists-container'>
            <h3 className='list-heading'>NPCs</h3>
            <div className='character-lists'>
                {characters.npcs.map((character, index) => <div key={index}>{CharacterCard(character, true)}</div>)}
            </div>

            <h3 className='list-heading'>PCs</h3>
            <div className='character-lists'>
                {characters.pcs.map((character, index) => <div key = { index }> { CharacterCard(character, false) }</div>)}
            </div>
        </div>
    )
}

export default Characters