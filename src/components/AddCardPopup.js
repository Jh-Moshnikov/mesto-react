import PopupWithForm from "./PopupWithForm";

function AddCardPopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            title={'Новое место'} 
            name={'submitCard'} 
            btnText={'Сохранить'} 
            isOpen={isOpen}
            onClose={onClose}
         >
             <div className="popup__edit-form">
               <input id="cardName-input" type="text" name="name" placeholder="Название" className="popup__edit popup__edit_submit-cardName" minLength="2" maxLength="30" required />
                <span className="popup__edit-error cardName-input-error"></span>
                <input id="cardLink-input" type="url" name="link" placeholder="Ссылка на картинку" className="popup__edit popup__edit_submit-cardLink" required />
                <span className="popup__edit-error cardLink-input-error"></span>
             </div>

       </PopupWithForm>
    );
};

export default AddCardPopup;