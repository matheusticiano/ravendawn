import './HuntCard.css';
import LikeButton from './LikeButton';
import DeleteHunt from './DeleteHunt';
import SaveHunt from './SaveHunts';


const HuntCard = ({ hunt, location, level, image, profit, xp, huntId, creator, showMenu }) => {
    return (
        <div className="hunt-card">
            <div className='hunt-info'>
            <img src={image} alt={hunt} />
            <h9>{hunt}</h9>
            <div className='card-info'>
                <p9><strong>Location:</strong> {location}</p9>
                <p9><strong>Level:</strong> {level}</p9>
                <p9><strong>Profit Por Hora:</strong> {profit}</p9>
                <p9><strong>Xp Por Hora:</strong> {xp}</p9>
            </div>
            <p9><strong>Created by: {creator}</strong></p9>
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