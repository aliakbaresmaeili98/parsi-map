export enum PaymentStatus {
  Unspecified = 0,
  Pending = 1,
  Failed = 2,
  Paid = 3,
  Canceled = 4,
  RollBack = 5,
  Unverified = 6,
  CheckResult = 7,
  CheckResultException = 8,
  Verified = 9,
  VerifyException = 10,
  PendingVerification = 11,
  FailedVerification = 12,
  Settle = 13,
  Passed = 14,
  BouncedCheque = 15,
  Expired = 16,
  PendingVerificationForFinanceDepartment = 17,
  Confirmed = 18
}
