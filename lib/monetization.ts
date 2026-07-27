export function isAffiliateProgramActive(): boolean {
  return (
    process.env.NEXT_PUBLIC_ENABLE_AFFILIATE_UI === "true" &&
    process.env.NEXT_PUBLIC_AFFILIATE_PROGRAM_ACTIVE === "true"
  )
}

export function isA8ProgramActive(): boolean {
  return isAffiliateProgramActive() && process.env.NEXT_PUBLIC_A8_PROGRAM_ACTIVE === "true"
}
