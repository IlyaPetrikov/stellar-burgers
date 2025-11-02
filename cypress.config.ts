import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env:{
       REACT_APP_BURGER_API_URL: 'https://norma.education-services.ru/api'
    },
    setupNodeEvents(on, config) {
      
    },
  },
});
