export class Confirmation {
  title: string | undefined;
  message!: string;
  button!: {
    ok: string;
    cancel: string;
  };
}
