import React from "react";
// import './style.css';
import './style.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { user: { name: { first, last }, email, picture: { large } } } = props;
    return (
        <section className="card-wrapper">
            <div className="image-wrapper">
                <img src={large} className="avatar" />
            </div>
            <h2 className="userName">{first}{last}</h2>
            <p className="discription">{email}</p>
            <button className="connectButton">Connect</button>
        </section>
    )
}


// class Card extends React.Component {

//     render() {
//         const { user: { name: { first, last }, email, picture: { large } } } = this.props;
//         return (
//             <section className="card-wrapper">
//                 <div className="image-wrapper">
//                     <img src={large} className="avatar" />
//                 </div>
//                 <h2 className="userName">{first}{last}</h2>
//                 <p className="discription">{email}</p>
//                 <button className="connectButton">Connect</button>
//             </section>
//         )
//     }
// }

Card.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string,
            last: PropTypes.string
        }),
        email: PropTypes.string,
        picture: PropTypes.shape({
            large: PropTypes.string
        })
    }).isRequired
}

Card.defaultProps = {
    user: {
        name: {
            first: 'Alex',
            last: 'Doe'
        },
        email: 'example.com',
        picture: {
            large: "/logo192.png"
        }
    }
}

export default Card;