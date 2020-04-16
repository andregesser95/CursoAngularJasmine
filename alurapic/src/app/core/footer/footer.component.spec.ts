import { TestBed, async } from "@angular/core/testing"
import { FooterComponent } from "./footer.component"
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../user/user.service";
import { of } from "rxjs";

describe("O componente Footer", () => {
    let component: FooterComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            providers: [ UserService ],
            declarations: [ FooterComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        const userService = TestBed.get(UserService);
        spyOn(userService, "getUser").and.returnValue(of({
            email: "alvaro@alura.com",
            name: "Alvaro",
            id: 1
        }));

        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it("Deve ser instanciado", () => {
        expect(component).toBeTruthy();
    });

})