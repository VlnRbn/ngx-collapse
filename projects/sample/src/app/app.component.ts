import {
  Component,
  ViewChild,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "sample";

  form: FormGroup;

  constructor(
    private fb: FormBuilder,

  ) {}

  ngOnInit() {


    this.form = this.fb.group({
      name: ["velen", Validators.required]
    });
  }

  onSubmit() {

  }
}
