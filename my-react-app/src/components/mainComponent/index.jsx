import styles from './style.module.scss'

export const MainComponent = ({ children }) => {

    return (
      <main>
        <div className={`${styles.welcomeDiv} mainDiv`}>
            <h1>Seja Bem vindo</h1>
            <h3>(À um repertório de um dev em construção)</h3>
        </div>
        { children }
      </main>
    )
  }
  