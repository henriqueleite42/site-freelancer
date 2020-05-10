export interface Option {
  option: string | number;
  value: string | number;
}

export interface SimpleOptions {
  value: string | number;
  options: Array<Option>;
  onSelect: Function;
}
