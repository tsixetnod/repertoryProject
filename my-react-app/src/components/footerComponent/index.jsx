import styles from './style.module.scss'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import vercel from '../../assets/vercel.svg'
import { Link } from 'react-router-dom'

export const FooterComponent = () => {

    return (
        <footer>
            <section className={styles.logos}> 
                <Link to={`https://github.com/tsixetnod`}>
                    <img src={github} alt="github" />
                </Link>
                <Link to={`https://www.linkedin.com/in/matheus-de-oliveira-3a6a06113/`}>
                    <img src={linkedin} alt="linkedin" />
                </Link>
                <Link to={`https://vercel.com/tsixetnod2`}>
                    <img src={vercel} alt="vercel" />
                </Link>
            </section>
            <hr />
            <p>© 2023 Matheus de Oliveira</p>
        </footer>
    )
}