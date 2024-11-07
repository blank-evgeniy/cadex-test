//routes config for public routes only
class Routes {
  get PUBLIC() {
    return {
      HOME: "/",
      CONTACT_US: "/contact-us",
    };
  }
}

export const routes = new Routes();
