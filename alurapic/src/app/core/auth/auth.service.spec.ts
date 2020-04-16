import { AuthService } from "./auth.service";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { UserService } from "../user/user.service";

describe("O serviço AuthService", () => {

    let service: AuthService;
    let httpMock: HttpTestingController;
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ AuthService ]
        })
        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);
    });

    it("Deve ser instanciado", () => {
        expect(service).toBeTruthy();
    });

    it("Deve atuenticar o usuário", fakeAsync(() => {
        const fakeBody = {
            id: 1,
            nome: "alvaro",
            email: "alvaro@alura.com"
        }

        const spy = spyOn(userService, "setToken").and.returnValue(null);

        service.authenticate("alvaro", "1234").subscribe((response) => {
            expect(response.body).toEqual(fakeBody);
            expect(spy).toHaveBeenCalledWith("tokenTest");
        });

        const request = httpMock.expectOne((req) => {
            return req.method === "POST";
        });

        request.flush(fakeBody,{
            headers: {"x-access-token":"tokenTest"}
        });

        tick();
    }));

})