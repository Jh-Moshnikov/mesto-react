import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            title={'Обновить аватар'}
            name={'changeUserAvatar'}
            btnText={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="popup__edit-form">
                <input id="cardLinkAva-input" type="url" name="avatar" placeholder="Ссылка на картинку" className="popup__edit popup__edit_submit-cardLink" required />
                <span className="popup__edit-error cardLinkAva-input-error"></span>
            </div>

        </PopupWithForm>
    );
};

export default EditAvatarPopup;