import css from './SpinerButton.module.css';



export default function SpinerButton () {
    return (
        <div className={css.container}>
        <div className={css.loader}>
          <div className={css.loader_dot}></div>
          <div className={css.loader_dot}></div>
          <div className={css.loader_dot}></div>
          <div className={css.loader_dot}></div>
          <div className={css.loader_dot}></div>
          <div className={css.loader_dot}></div>
          <div className={css.loader_text}></div>
        </div>
      </div>
    );
};

