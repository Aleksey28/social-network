import { ErrorsObject } from "../types";

class SubmitProfileDataError extends Error {
  public profileDataErrors: ErrorsObject;

  constructor(profileDataErrors: ErrorsObject) {
    super();

    this.profileDataErrors = profileDataErrors;
  }
}

export default SubmitProfileDataError;