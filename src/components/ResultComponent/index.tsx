import { Card } from "./components/Card";
import { CardList, SectionComponent } from "./styles";

export function ResultComponent() {
  return (
    <SectionComponent>
      <CardList>
        <Card
          background="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6urQ17k0Pepx8RoYVeRbwaCSVIS.jpg"
          streams={[{name: 'prime Video', icon:'https://www.themoviedb.org/t/p/original/emthp39XA2YScoYL1p0sdbAH2WA.jpg'}]}
          title="Eu Sou A Lenda"
          launch="16/12/2007"
          genders={['Ficção cientifica', 'Drama', 'Ação']}
          duration="1h 41m"
          sinopse="Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue. Andando pela cidade de Nova York, ele procura por outros possíveis sobreviventes e tenta achar a cura da praga usando seu próprio sangue, que é imune."
        />
      </CardList>
    </SectionComponent>
  )
}