import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (

        <Container>
            <Content>
                <img src={logoImg} alt="DT Money" />
                <button type='button'>
                    Novo Worker
                </button>
                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>

    )
}