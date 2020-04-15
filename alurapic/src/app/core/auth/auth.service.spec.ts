import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

describe("O serviço AuthService", () => {

    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientModule ],
            providers: [ AuthService ]
        })
        service = TestBed.get(AuthService);
    });

    it("Deve ser instanciado", () => {
        expect(service).toBeTruthy();
    });

})