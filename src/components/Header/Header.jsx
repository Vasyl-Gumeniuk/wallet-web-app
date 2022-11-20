import css from './Header.module.css';
import sprite from '../../images/icons/sprite-all-icons.svg'

export default function Header() {
    
    return (
        <div className={css.header}>
          <div className={css.header_block}>
            <div className={css.logo}>
              <svg width="40" height="40" aria-label="wallet">
                <use href={`${sprite}#icon-wallet`}></use>
              </svg>
              <p>Wallet</p>
            </div>
            <div className={css.user_block}>
              <p className={css.name}>Name</p>
              <svg className={css.icon_exit} width="18" height="18" aria-label="wallet">
                <use href={`${sprite}#icon-exit`}></use>
              </svg>
              <p className={css.exit}>Exit</p>
            </div>
          </div>
        </div>
    );
};
