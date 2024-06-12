import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { MinLengthValidator, ValidationErrors } from '@angular/forms';
//* El selector deberia de ir como camelCase.
//* Se suelen usar para errores, o para cambiar el color de un label o para un drag and drop.
@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  // El set arregla el error de que no se puede asignar un valor a un input
  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log("directive on-init")
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return;
    }
    
    const errors = Object.keys(this._errors);
    
    if(errors.includes("minlength")){
      const minLengthError = this.errors && this.errors['minlength'] || this._errors && this._errors['minlength'];
      
      if (minLengthError) {
        const min = minLengthError['requiredLength'];
        const current = minLengthError['actualLength'];
        
        if (min !== undefined && current !== undefined) {
          this.htmlElement.nativeElement.innerHTML = `Mínimo ${min}/${current} caracteres.`;
          return;
        }
      }
    }
    
    if(errors.includes("email")){
      this.htmlElement.nativeElement.innerHTML = 'Se requiere el email';
      return;
    }
  }
}