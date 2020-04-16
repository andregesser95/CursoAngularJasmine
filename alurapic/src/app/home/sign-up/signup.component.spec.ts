import { TestBed, async } from "@angular/core/testing"
import { SignUpComponent } from "./signup.component"
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service"
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { VMessageModule } from "src/app/shared/componets/vmessage/vmessage.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { SignUpService } from "./signup.service";
import { Router } from "@angular/router";
import { of } from "rxjs";

describe("O formulário SigUp", () => {

    let component : SignUpComponent;
    let router: Router;
    let signUpService: SignUpService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            providers: [
                SignUpService,
                UserNotTakenValidatorService
            ],
            imports: [
                HttpClientTestingModule,
                VMessageModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([])
            ]
        }).compileComponents;
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        signUpService = TestBed.get(SignUpService);

        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("Deve ser instanciado", () => {
        expect(component).toBeTruthy();        
    });

    it("Deve cadastrar um usuário", () => {
        const navigateSpy = spyOn(router, "navigate");
        spyOn(signUpService, "signup").and.returnValue(of(null));
        
        component.signupForm.get("email").setValue("alvaro@alvaro.com");
        component.signupForm.get("fullName").setValue("Alvaro");
        component.signupForm.get("userName").setValue("alvaro");
        component.signupForm.get("password").setValue("123");
        component.signUp();

        expect(navigateSpy).toHaveBeenCalledWith(['']);
    });

})