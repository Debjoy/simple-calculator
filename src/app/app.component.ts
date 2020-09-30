import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  num1fc = new FormControl(0, Validators.required);
  num2fc = new FormControl(0, Validators.required);

  output = 0;
  num1 = 0;
  num2 = 0;
  operator = "+";

  calculate(operator: string): void {
    this.num1 = this.num1fc.value;
    this.num2 = this.num2fc.value;
    this.operator = operator;
    switch (operator) {
      case "+":
        this.output = this.num1 + this.num2;
        break;
      case "-":
        this.output = this.num1 - this.num2;
        break;
      case "*":
        this.output = this.num1 * this.num2;
        break;
      case "/":
        this.output = this.num1 / this.num2;
    }
  }
}
