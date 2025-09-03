## How to Run the Angular App on macOS

1. **Install Node.js and npm**
	 - Download and install Node.js (includes npm) from [nodejs.org](https://nodejs.org/).
	 - Verify installation:
		 ```bash
		 node -v
		 npm -v
		 ```

2. **Install Angular CLI (if not already installed)**
	 - Open Terminal and run:
		 ```bash
		 npm install -g @angular/cli
		 ```

3. **Install project dependencies**
	 - Navigate to the project directory:
		 ```bash
		 cd path/to/my-angular-app
		 ```
	 - Install dependencies:
		 ```bash
		 npm install
		 ```

4. **Run the development server**
	 - Start the Angular app:
		 ```bash
		 ng serve --open
		 ```
	 - The app will open in your default browser at `http://localhost:4200`.

5. **Build the app for production** (optional)
	 - To build the app for deployment:
		 ```bash
		 ng build --configuration=production
		 ```
