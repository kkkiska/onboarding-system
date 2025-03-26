import Button from "./UI/Button/Button"
import exit from '../assets/images/exit.svg'

const ExitButton = () => {
    return (
        <Button 
            aria-label="Выйти из системы"
            title="Выйти из системы"
        >
            <img src={exit} alt="Иконка выхода" aria-hidden="true" />
        </Button>
    );
}

export default ExitButton