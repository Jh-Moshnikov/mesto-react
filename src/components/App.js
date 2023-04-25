import {useEffect, useState} from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddCardPopup from "./AddCardPopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
 

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

  return (
    <div className="App">
       <div className="page"> 
        <Header /> 
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <AddCardPopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
         isOpen={isImagePopupOpen}
         onClose={closeAllPopups}
         card={selectedCard}
        />
    </div> 
    <div className="popup popup_deleteUserCard">
        <div className="popup__container popup__close-by-overlay">
            <button type="button" className="popup__close popup__close_deleteCard"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form name="deleteCard" className="popup__form popup__form_deleteCard" noValidate>
              <input type="submit"  value="Да" className="popup__submit-profile-info popup__deleteCard" />
            </form>
        </div>  
    </div>
    <script type="module"  src="./pages/script.js" defer></script>
    </div>
  );
}

export default App;