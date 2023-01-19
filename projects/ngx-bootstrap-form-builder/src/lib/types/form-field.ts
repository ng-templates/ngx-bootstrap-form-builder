import { CheckGroup, RadioGroup } from "./check";
import { DateField } from "./date";
import { DebounceInputField, InputField } from "./input";
import { SelectField } from "./select";

export type FormField =
    InputField |
    DebounceInputField |
    SelectField |
    DateField |
    CheckGroup |
    RadioGroup
