const domain: string = 'dev2.seller.gi'

export const environment = {
  production: true,
  expressPort: 4010,
  isSellerSite: true,
  domain: `https://core.${domain}`,
  apiUrl: `https://core.${domain}/api`,
  apiUniversalUrl: `http://localhost:8090/api`,
  cdnUrl: `https://cdn.dev2.plus.gi/images`,
  redisPrefix: 'Dev2Seller-',
  redisPort: 6379,
  redisHost: '10.106.1.33',
  redisPassword: "5XKuPbCyZzWGa79LWK4ka5eBACqhTwpUqj+r7vl0UxiSIvi0Hfka28ryr5ewOcPNRrfvuoebTjOyrBO2",
  redisCacheDefault: 2,
  redisCacheHome: 2,
  redisCacheCategory: 2,
  redisCacheProduct: 2,
  logServer: 'http://services.dev2.plus.gi:5341',
  logApiKey: '0r0m3G3JlP6Kf06tQkKc'
};
