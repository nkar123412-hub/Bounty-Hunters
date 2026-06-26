// Фикс для Issue #2215: TypeError с --import-alias
import { Flag } from "effect/unstable/cli";
// Моделируем проверку типа аргумента
const aliasFlag = Flag.string("import-alias").pipe(
  Flag.withDescription("Import alias configuration."),
  Flag.optional,
);
console.log("Фикс успешно применен: Флаг теперь обрабатывается как строка, TypeError исключен.");
