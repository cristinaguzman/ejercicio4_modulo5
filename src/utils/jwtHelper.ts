export const decodeJWT = (token: string): any => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Invalid JWT", error);
      return null;
    }
  };
  
  export const verifyJWT = (token: string, secret: string): boolean => {
    // Implementation of JWT verification based on the library you use.
    console.warn("JWT verification not implemented. Use a library like jsonwebtoken.");
    return false;
  };