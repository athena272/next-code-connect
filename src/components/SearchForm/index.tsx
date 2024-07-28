import styles from './SearchForm.module.scss'
import Button from '../Button'

export default function SearchForm() {
    return (
        <form className={styles.form} action='/'>
            <input
                name='q'
                className={styles.input}
                placeholder='Digite o que você procura'
            />
            <Button>
                Buscar
            </Button>
        </form>
    )
}