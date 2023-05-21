import './HuntCard.css';
import LikeButton from './LikeButton';
import DeleteHunt from './DeleteHunt';
import SaveHunt from './SaveHunts';


const HuntCard = ({ hunt, location, level, image, profit, xp, huntId, creator, data, showMenu }) => {
    return (
        <div className="hunt-card">
            <div className='hunt-info'>
                <img src={image} alt={hunt} />
                <h9>{hunt}</h9>
                <div className='card-info'>
                    <div className='grid-esquerda'>
                        <p9><strong>Location:</strong> {location}</p9>
                    </div>
                    <div className='grid-direita'>
                        <p9><strong>Level:</strong> {level}</p9>
                    </div>
                    <div className='grid-esquerda'>
                        <p9><strong>Profit Por Hora:</strong> {profit}</p9>
                    </div>
                    <div className='grid-direita'>
                        <p9><strong>Xp Por Hora:</strong> {xp}</p9>
                    </div>
                </div>
                <div className='hunt-creator'>
                    <p10>created by: {creator}</p10>
                    <p10>created at: {data}</p10>
                </div>
                <div className='card-buttons'>
                    <LikeButton huntId={huntId} />
                    <SaveHunt huntId={huntId} />
                </div>
                {showMenu && (
                    <div className='delete-button'>
                        <DeleteHunt huntId={huntId} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HuntCard;