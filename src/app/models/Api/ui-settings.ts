export interface UISettingsAttributes {
  [page_key: string]: {
    [element_key: string]: {
      css: string | null;
      value: string;
    };
  };
}
