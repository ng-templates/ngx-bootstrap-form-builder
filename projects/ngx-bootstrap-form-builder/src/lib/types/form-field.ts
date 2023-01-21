import { CheckGroup } from "./check";
import { DateField } from "./date";
import { InputField } from "./input";
import { SelectField } from "./select";

export type FormField =
    InputField |
    SelectField |
    DateField |
    CheckGroup
