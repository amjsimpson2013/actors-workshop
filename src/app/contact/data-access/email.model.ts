import { FormControl } from "@angular/forms";
import { inherits } from "node:util";

export interface Email {
    name: string;
    email: string;
    message: string;
}

export interface EmailForm {
    name: FormControl<string>;
    email: FormControl<string>;
    message: FormControl<string>;
}