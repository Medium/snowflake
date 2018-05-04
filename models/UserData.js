export type UserData = {
  currentRole: string,
  ladder: Array<string>,
  ratings: {
    [category: string]: number
  }
}