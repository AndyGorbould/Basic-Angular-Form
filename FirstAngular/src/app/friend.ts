export class Friend {
  /*Have getters and setters */
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _favouriteLanguage: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    favouriteLanguage: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._favouriteLanguage = favouriteLanguage;
  }
  // HUUUUGE thanks to Yasser for doing this the efficient way!!
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public get favouriteLanguage(): string {
    return this._favouriteLanguage;
  }
  public set favouriteLanguage(value: string) {
    this._favouriteLanguage = value;
  }
}
