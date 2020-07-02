import React from 'react';
import "./collection.styles.scss"



const Collection = ({ match }) => {
    console.log(match.params.collectionId) //match.params to navigate the url like http://localhost:3000/shop/hats
    return (
        <div>

        </div>
    );
}

export default Collection;
