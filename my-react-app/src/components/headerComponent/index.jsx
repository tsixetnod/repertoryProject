import styles from './style.module.scss'

export const HeaderComponent = ({ children }) => {

    return (
      <main>
        <div className={`${styles.welcomeDiv} mainDiv`}>
            <h1>Seja Bem vindo</h1>
            <p>(À um repertório de um dev em construção)</p>
        </div>
        { children }
      </main>
    )
  }
  