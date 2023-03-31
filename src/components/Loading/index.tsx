import LoandingImg from '../../assets/rolling.svg'
import { LoandingContainer, LoandingIcon } from './style'

export function Loanding() {
    return (
        <LoandingContainer>
            <LoandingIcon src={LoandingImg} alt="Loanding" />
        </LoandingContainer>
    )
}