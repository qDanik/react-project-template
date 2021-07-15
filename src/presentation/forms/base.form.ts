export type ChangeForm<Fields, Result = unknown> = {
  fields?: Fields;
} & Result;

export interface BaseForm<Fields, ChangeResult = unknown> {
  getInitialValues(): Fields;

  getValidationSchema(): any;

  onChange(...args: any[]): ChangeForm<Fields, ChangeResult>;

  onSubmit(...args: any[]): Promise<void>;
}
