
import css from './Loader.module.css';
import classNames from 'classnames';


export default function Loader () {
    return (
        <div className={css.loader}>
        <div className={classNames (css.inner, css.one)}></div>
        <div className={classNames(css.inner, css.two)}></div>
        <div className={classNames(css.inner, css.three)}></div>
        <div className={css.dolar}>$</div>
      </div>
    );
};
