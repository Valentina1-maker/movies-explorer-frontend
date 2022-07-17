import "./Profile.css";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import HeaderNavigationAccount from "../HeaderNavigationAccount/HeaderNavigationAccount";

function Profile({ isSideBarOpened, handleSideBarState }) {

    return (
        <>
            <div className="header__movies">
                <Link to="/" className="header__logo_movies" />
                <button type="button" onClick={handleSideBarState} class="header__sidebar-button"></button>
                <HeaderNavigationAccount />
            </div>
            <section className="profile">
                <h1 className="profile__greeting">Привет, друг!</h1>
                <form className="profile__form">
                    <div className="profile__form-wrapper">
                        <label className="profile__input-field">Имя
                            <input type="text"
                                name="name"
                                id="name"
                                className="profile__input"
                                placeholder="Друг"
                            />
                        </label>
                        <label className="profile__input-field">E-mail
                            <input type="email"
                                name="email"
                                id="email"
                                className="profile__input"
                                placeholder="friend@yandex.ru"
                            />
                        </label>
                    </div>
                    <div className="profile__button-wrapper">
                        <button className="profile__button-edit" type="submit">
                            Редактировать
                        </button>
                        <button className="profile__button-logout" type="button">Выйти из аккаунта</button>
                    </div>
                </form>
            </section>
            <SideBar isSideBarOpened={isSideBarOpened}
                handleSideBarState={handleSideBarState} />
        </>
    );
}

export default Profile