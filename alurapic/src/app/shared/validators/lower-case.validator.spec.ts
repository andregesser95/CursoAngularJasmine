import { isLowerCase } from "./lower-case.validator";

describe("A função isLowerCase", () => {
    
    it("Deve confirmar quando recebe um texto em caixa baixa",() => {
        const valor = 'mario';
        const resultado = isLowerCase(valor);
        expect(resultado).toBeTruthy();
        
    })

    it("Deve validar quando o valor enviado não for caixa baixa", () => {
        expect(isLowerCase("Mario")).toBeFalsy();
    })


    it("Deve validar quando o valor enviado tiver algum caracter que não é caixa baixa", () => {
        expect(isLowerCase("maRio")).toBeFalsy();
    })
})