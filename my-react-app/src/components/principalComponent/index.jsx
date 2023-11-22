import styles from './style.module.scss'
import punpun from '../../assets/punpun.webp'

export const PrincipalComponent = () => {
    return (
        <section className={styles.apresentationSection}>
            <div className={styles.videoDiv}>
                <h3>Uma leve apresentação</h3>
                <div className={styles.video}>
                    <img src={punpun} alt="vídeo" />
                </div>
            </div>
            <div>
                Me chamo Matheus de Oliveira, sou um estudante de programação web Full-Stack, atualmente me aprofundando em backend, tenho 19 anos e sou do Espírito Santo, ao lado deixei um pequeno vídeo me apresentando melhor.
            </div>
        </section>
    )
}