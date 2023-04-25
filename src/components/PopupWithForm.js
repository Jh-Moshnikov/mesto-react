

function PopupWithForm({title, name, children, btnText, isOpen, onClose}) {
    return (
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__close-by-overlay">
                <button type="button" className={`popup__close popup__close_${name}`} onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form method="post" name="profileForm" className={`popup__form popup__form_${name}`} noValidate>
                  {children}
                  <input type="submit" value={`${btnText}`} className="popup__submit-profile-info" />
                </form>
            </div>  
        </div>

    )

}

export default PopupWithForm;