import { useEffect, useState } from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddCardPopup from "./AddCardPopup";
import EditAvatarPopup from "./EditAvatarPopup";
import CurrentUserContext from "../context/CurrentUserContext";
import { api } from "../utils/Api";
import Card from "./Card";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (obj) => {
    setIsImagePopupOpen(true);
    setSelectedCard(obj);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData)
      })
      .catch((err) => console.warn(err));
  }, [])


  const handleCardLike = async (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    try {
      const resChangeLikeStatus = await api.changeLikeCardStatus(card, !isLiked);
      setCards((state) => state.map((c) => c._id === card._id ? resChangeLikeStatus : c));
    } catch (error) {
      console.warn(error);
    }
  }

  const handleCardDelete = async (card) => {
    try {
      await api.deleteCard(card._id);
      setCards((newCardsArray) => newCardsArray.filter((item) => card._id !== item._id))
      closeAllPopups();
    } catch (error) {
      console.warn(error);
    }
  }

  const handleUpdateUser = async (obj) => {
    try {
      const changedProfile = await api.setUserInfo(obj);
      setCurrentUser(changedProfile);
      closeAllPopups();
    } catch (e) {
      console.warn(e)
    }
  }

  const handleUpdateAvatar = async (obj) => {
    try {
      const changeAvatar = await api.changeAvatar(obj);
      setCurrentUser(changeAvatar);
      closeAllPopups();
    } catch (e) {
      console.warn(e)
    }
  }

  const handleAddPlaceSubmit = async (obj) => {
    try {
      const newCard = await api.addNewCard(obj);
      setCards([newCard, ...cards]);
      closeAllPopups();
    } catch (e) {
      console.warn(e)
    }
  }



  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);

      })
      .catch((err) => console.warn(err));
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddCardPopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <ImagePopup
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
