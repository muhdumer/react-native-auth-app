# React Native Authentication App

A React Native application with complete authentication functionality including Login, Signup, and Home screens. The app uses React Context API for state management and AsyncStorage for persistent authentication.

## Features

### Core Features

- **Authentication Context**: Global state management using React Context API
- **Login Screen**: Email and password authentication with validation
- **Signup Screen**: User registration with name, email, and password
- **Home Screen**: Displays logged-in user information
- **Navigation**: React Navigation with stack navigator
- **Persistent Authentication**: AsyncStorage integration to maintain login state
- **Form Validation**: Comprehensive error handling and validation
- **Password Visibility Toggle**: Eye icon to show/hide password (Bonus feature)

### Authentication Features

- User signup with validation
- User login with credential verification
- Secure logout functionality
- Persistent session (remains logged in after app restart)
- Error handling for invalid credentials and validation errors

## Setup Instructions

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Expo CLI** (will be installed automatically with the project)
- For mobile development:
  - **iOS**: Xcode and iOS Simulator (Mac only)
  - **Android**: Android Studio and Android Emulator, or a physical Android device
  - **Expo Go app** (optional, for testing on physical devices) - [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Step-by-Step Installation

1. **Clone or Download the Project**

   If you have the project files, navigate to the project directory:

   ```bash
   cd "path/to/React Native App"
   ```

2. **Install Dependencies**

   Install all required packages:

   ```bash
   npm install
   ```

   If you encounter dependency conflicts, use:

   ```bash
   npm install --legacy-peer-deps
   ```

   **Note**: This project includes all necessary dependencies including web support (`react-native-web` and `@expo/webpack-config`).

3. **Start the Development Server**

   ```bash
   npm start
   ```

   This will start the Expo development server and open a menu in your terminal.

4. **Run the App**

   Choose your platform:

   - **For Web**: 
     ```bash
     npm run web
     ```
     Or press `w` in the Expo dev server terminal
     - The app will open in your default browser (usually at `http://localhost:8081`)

   - **For iOS** (Mac only):
     ```bash
     npm run ios
     ```
     Or press `i` in the Expo dev server terminal
     - Requires Xcode and iOS Simulator

   - **For Android**:
     ```bash
     npm run android
     ```
     Or press `a` in the Expo dev server terminal
     - Requires Android Studio and an emulator running, or a connected Android device

   - **For Physical Device**:
     - Install Expo Go app on your phone
     - Scan the QR code displayed in the terminal with:
       - **iOS**: Camera app
       - **Android**: Expo Go app

### Quick Start (All Platforms)

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start

# 3. Choose platform:
#    - Press 'w' for web
#    - Press 'i' for iOS (Mac only)
#    - Press 'a' for Android
#    - Scan QR code for physical device
```

### Troubleshooting

**Issue: Dependency conflicts during installation**
```bash
npm install --legacy-peer-deps
```

**Issue: Web dependencies not found**
The project already includes `react-native-web` and `@expo/webpack-config`. If you see errors, try:
```bash
npm install react-native-web@~0.19.6 @expo/webpack-config@^19.0.0 --legacy-peer-deps
```

**Issue: Port already in use**
If port 8081 is already in use, Expo will automatically use the next available port.

**Issue: Metro bundler cache issues**
Clear the cache and restart:
```bash
npm start -- --clear
```

## Project Structure

```
react-native-auth-app/
├── App.js                 # Main app component with navigation
├── context/
│   └── AuthContext.js     # Authentication context and provider
├── screens/
│   ├── LoginScreen.js     # Login screen component
│   ├── SignupScreen.js    # Signup screen component
│   └── HomeScreen.js      # Home screen component
├── package.json           # Dependencies and scripts
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration
└── README.md             # This file
```

## Implementation Details

### Authentication Context (`context/AuthContext.js`)

- Manages global authentication state
- Provides `login`, `signup`, and `logout` functions
- Handles AsyncStorage operations for persistence
- Exports `AuthContext` and `AuthProvider` components

### Login Screen (`screens/LoginScreen.js`)

- Email and password input fields
- Real-time form validation
- Error messages for invalid credentials
- Password visibility toggle
- Navigation to Signup screen
- Loading state during authentication

### Signup Screen (`screens/SignupScreen.js`)

- Name, email, and password input fields
- Comprehensive form validation:
  - Required field validation
  - Email format validation
  - Password length validation (minimum 6 characters)
- Password visibility toggle
- Navigation to Login screen
- Loading state during registration

### Home Screen (`screens/HomeScreen.js`)

- Displays user's name and email
- Logout button to sign out and return to Login screen

### Navigation (`App.js`)

- Conditional navigation based on authentication state
- Stack navigator setup
- Automatic redirection based on user login status
- Loading screen while checking authentication state

## Validation Rules

### Login Screen

- Email: Required, must be valid email format
- Password: Required

### Signup Screen

- Name: Required
- Email: Required, must be valid email format
- Password: Required, minimum 6 characters

## Error Handling

The app handles various error scenarios:

- Invalid email format
- Missing required fields
- Password length validation
- Invalid login credentials

## Dependencies

All dependencies are listed in `package.json`. Key dependencies include:

### Core Dependencies

- `expo`: ~49.0.0 - Expo SDK for React Native development
- `react`: 18.2.0 - React library
- `react-native`: 0.72.6 - React Native framework

### Navigation

- `@react-navigation/native`: ^6.1.9 - Navigation library
- `@react-navigation/native-stack`: ^6.9.17 - Stack navigator
- `react-native-screens`: ~3.22.0 - Native screen components
- `react-native-safe-area-context`: 4.6.3 - Safe area handling

### Storage & Web Support

- `@react-native-async-storage/async-storage`: 1.19.3 - Local storage for persistence
- `react-native-web`: ^0.19.13 - Web support for React Native
- `@expo/webpack-config`: ^19.0.1 - Webpack configuration for Expo web

### Development

- `@babel/core`: ^7.20.0 - Babel transpiler

All dependencies are automatically installed when you run `npm install`.

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run web` - Run the app in a web browser
- `npm run ios` - Run the app on iOS simulator (Mac only)
- `npm run android` - Run the app on Android emulator or device
- `npm run clear` - Clear Metro bundler cache and start server

## Important Notes

### Security Considerations

- ⚠️ **This is a demo application**. In production, passwords should **never** be stored in plain text. Always use proper hashing (bcrypt, argon2) and secure authentication methods.
- The current implementation uses AsyncStorage to simulate a database. In a real application, you would connect to a backend API with proper authentication tokens (JWT, OAuth, etc.).
- Never commit sensitive data or API keys to version control.

### Current Implementation

- The app maintains user sessions using AsyncStorage, so users remain logged in after closing and reopening the app.
- User data is stored locally on the device. For production, implement a proper backend with a database.
- All authentication logic is client-side only. For production, implement server-side validation and authentication.

## Future Enhancements

- Backend API integration
- Password hashing and encryption
- Token-based authentication
- Biometric authentication
- Password reset functionality
- Email verification
- Social media login options

## License

This project is created for educational purposes.
