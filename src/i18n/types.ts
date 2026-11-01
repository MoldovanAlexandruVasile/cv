import type { ui } from "./locales/en/ui.ts";

// Every language must provide the same keys as English. Extra keys are allowed
// because plural forms differ: Romanian also needs `_few` (2 roluri vs 20 de roluri).
export type Localized<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Localized<Item>[]
    : { [Key in keyof T]: Localized<T[Key]> } & { [extra: string]: unknown };

export type UiMessages = Localized<typeof ui>;
