export default class UserToken
{
    static setToken(token: string) {
        sessionStorage.setItem('token', JSON.stringify(token));
      }
      
      static getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }
}