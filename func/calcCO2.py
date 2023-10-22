from time import sleep


def opcaoInvalida(msg):
    print(msg)
    sleep(1.5)


x = True

while x :

    print("Opções de automóveis: \n"
            "Carro  - Digite 1 \n"
            "Moto   - Digite 2")

    sleep(2)

    automovel = int(input("Escolha o automóvel: "))

    if automovel == 1:

        print("Opções de combustiveis: \n" 
                "Gasolina       - Digite 1 \n"
                "Álcool(Etanol) - Digite 2 \n"
                "Disel          - Digite 3")

        sleep(2)

        combustivel = int(input("Escolha o tipo de combustível: "))

        print("Veja a tabela de motores aceitos \n"
                 "Motor 1.0 á 1.4 - Digite 1 \n"
                 "Motor 1.5 á 1.9 - Digite 2 \n"
                 "Motor 2.0 á 3.0 - Digite 3 ")

        sleep(2)

        modeloCarro = int(input("Modelo carro: "))
        kmRodado    = float(input("Quantidade de Km rodados: "))

        match modeloCarro:
            case 1:
                match combustivel:
                    case 1:
                        kmLitro = 16
                    case 2:
                        kmLitro = 12
                    case 3:
                        kmLitro = 24
                    case _:
                        opcaoInvalida("Opção de combustível inválido!")
                        continue

            case 2:
                match combustivel:
                    case 1:
                        kmLitro = 12
                    case 2:
                        kmLitro = 10
                    case 3:
                        kmLitro = 22
                    case _:
                        opcaoInvalida("Opção de combustível inválido!")
                        continue

            case 3:
                match combustivel:
                    case 1:
                        kmLitro = 8
                    case 2:
                        kmLitro = 6
                    case 3:
                        kmLitro = 18
                    case _:
                        opcaoInvalida("Opção de combustível inválido!")
                        continue

            case _:
                opcaoInvalida("Modelo do carro inválido!")
                continue
        
    elif automovel == 2:
        print("Veja as cilindradas aceitas: \n"
                "até 150cc      - Digite 1 \n"
                "até 400cc      - Digite 2 \n"
                "acima de 400cc - Digite 3")
            
        sleep(2)

        modeloMoto = int(input("Modelo da moto: "))
        kmRodado = float(input("Quantidade de Km rodados: "))

        match modeloMoto:
            case 1:
                kmLitro = 50
            case 2:
                kmLitro = 40
            case 3:
                kmLitro = 35
            case _:
                opcaoInvalida("Modelo da moto inválida!")
                continue
    else:
        opcaoInvalida("Opção de veiculo inválido!")
        continue

    co2Emitido      = ( ( kmRodado / kmLitro ) * 2.3 ) / 1000
    valorEconomia   = co2Emitido * 26

    print( f"CO2 emitido com carro a gasolina: {co2Emitido:,.3f}G \n"
           f"Valor da economia: R${valorEconomia:,.2f}")

    sleep(2)

    questao = str(input("Deseja finalizar? [S/N] "))
    if questao == "S":
        x = False
