import { UserService } from "./user.service";
import { TokenService } from "../token/token.service";
import { TestBed } from "@angular/core/testing";

describe("O servico UserService", () => {
    let service: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService]
        });
        service = TestBed.get(UserService)
    });

    it("Deve ser instaciado", () => {
        expect(service).toBeTruthy();
    });

    it("Deve, por meio de um token, recuper as informações do usuário", () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4Njk5MDgxNSwiZXhwIjoxNTg3MDc3MjE1fQ.2Yv-TUIyiWgjeMkCwX3VQ8MoOkcZuJepvhGX1KTl3_Y";
        service.setToken(token);
        expect(service.isLogged()).toBeTruthy();
        expect(service.getUserName()).toBe("flavio");
        service.getUser().subscribe(user => {
            expect(user.name).toBe("flavio");
        });
    });

    it("Deve limpar as informações no logout", () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4Njk5MDgxNSwiZXhwIjoxNTg3MDc3MjE1fQ.2Yv-TUIyiWgjeMkCwX3VQ8MoOkcZuJepvhGX1KTl3_Y";
        service.setToken(token);
        service.logout();

        expect(service.isLogged()).toBeFalsy();
        expect(service.getUserName()).toBe("");
    })

})