export function getTokenInSessionStorage() {
  const token = sessionStorage.getItem("accessToken");

  return token;
}
export const SetTokenInSessionStorage = (token: string) =>
  sessionStorage.setItem("accessToken", token);

export const clearSessionStorage = () => sessionStorage.clear();
