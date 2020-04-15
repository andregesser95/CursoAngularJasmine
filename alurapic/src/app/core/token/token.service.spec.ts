import { TokenService } from "./token.service"

describe("O serviço Token Service", () => {

    let token;
    let service;

    it("Deve ser instanciado", () => {
        //teste de fumaça
        expect(service).toBeTruthy();
    });

    it("Deve guardar um token", () => {
        service.setToken(token);

        expect(service.hasToken()).toBeTruthy();
        expect(service.getToken()).toBe("testeToken");
    });

    it("Deve remover um token", () => {
        service.setToken(token);
        service.removeToken();

        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();
    })

    afterEach(() => {
        localStorage.clear();
    });

    beforeEach(() => {
        token = "testeToken";
        service = new TokenService();
    });

})