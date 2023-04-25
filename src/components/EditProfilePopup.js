import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'profile'}
            btnText={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="popup__edit-form">
                <input id="name-input" type="text" name="name" placeholder="Имя" className="popup__edit popup__edit_change_name" minLength="2" maxLength="40" required />
                <span className="popup__edit-error name-input-error"></span>
                <input id="occupation-input" type="text" name="about" placeholder="О себе" className="popup__edit popup__edit_change_occupation" minLength="2" maxLength="200" required />
                <span className="popup__edit-error occupation-input-error"></span>
            </div>

        </PopupWithForm>
    );
};

export default EditProfilePopup;