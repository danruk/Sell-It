# Sell-It

Sell-It is a mobile marketplace app for listing and selling items you no longer use.

## What it does
- Browse a feed of nearby listings with photos, titles, and prices.
- Create listings with photos, category, price, and description.
- Manage your account, your listings, and messages.

## Walkthrough
1. Welcome: the landing screen lets users choose Login or Register.
2. Register: new users provide name, email, and password to create an account.
3. Login: returning users sign in with email and password.
4. Feed: users scroll through listings and view item cards with images and prices.
5. Create listing: the plus tab opens the listing editor to add photos, title, price, category, and description, then post.
6. Account: users see their profile, access their listings and messages, or log out.

## Tech stack
- React Native with Expo
- Node.js + Express backend
- apisauce for API calls

## Screenshots
Place screenshots in `screenshots/` using this naming scheme:
- `screenshots/01-welcome.png`
- `screenshots/02-register.png`
- `screenshots/03-login.png`
- `screenshots/04-feed.png`
- `screenshots/05-listing-edit-empty.png`
- `screenshots/06-listing-edit-filled.png`
- `screenshots/07-account.png`

## Run locally

### Backend
1. `cd BACKEND`
2. `npm install`
3. `node index.js`

The API defaults to `http://localhost:9000`.

### Frontend
1. `cd SellIt`
2. `npm install`
3. `npm start`

If you run on a physical device, update the API base URL in `SellIt/app/api/client.js` to your machine's LAN IP (example: `http://192.168.1.10:9000/api`).
