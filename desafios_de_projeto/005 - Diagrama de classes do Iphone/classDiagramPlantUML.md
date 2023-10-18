```@startuml
class iPhone {
  + ReprodutorMusical reprodutor
  + AparelhoTelefonico telefone
  + NavegadorInternet navegador
  
  + fazerLigacao(numero: String): void
  + atenderChamada(): void
  + iniciarGravacaoVoz(): void
  + tocarMusica(): void
  + pausarMusica(): void
  + selecionarMusica(musica: String): void
  + exibirPaginaWeb(url: String): void
  + adicionarNovaAba(): void
  + atualizarPagina(): void
}

class ReprodutorMusical {
  + tocar(): void
  + pausar(): void
  + selecionarMusica(musica: String): void
}

class AparelhoTelefonico {
  + ligar(numero: String): void
  + atender(): void
  + iniciarGravacaoVoz(): void
}

class NavegadorInternet {
  + exibirPagina(url: String): void
  + adicionarNovaAba(): void
  + atualizarPagina(): void
}

iPhone --|> ReprodutorMusical
iPhone --|> AparelhoTelefonico
iPhone --|> NavegadorInternet
@enduml

```