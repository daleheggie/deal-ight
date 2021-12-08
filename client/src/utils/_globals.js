export const API_URL = process.env.NODE_ENV === 'production'
                        ? 'https://deal-ite.herokuapp.com'
                        : `http://localhost:5000`