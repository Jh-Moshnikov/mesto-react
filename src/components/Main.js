import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => console.warn(err));
    }, [])

    useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);

            })
            .catch((err) => console.warn(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-image">
                    <img src={userAvatar} alt="фотография профиля" className="profile__avatar" onClick={onEditAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                    <p className="profile__occupation">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <ul className="elements">
                {cards.map((card) => (
                    <Card
                        onCardClick={onCardClick}
                        card={card}
                        key={card._id}

                    />
                ))}
            </ul>
        </main>
    )
};

export default Main;