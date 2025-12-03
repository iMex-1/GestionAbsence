# SonarQube Setup Guide

## Prerequisites
- Docker installed on your system
- Node.js and npm installed

## Step 1: Install SonarQube with Docker

Run the following command to start SonarQube in a Docker container:

```bash
docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
```

Wait a few minutes for SonarQube to start up completely.

## Step 2: Access SonarQube

1. Open your browser and navigate to: `http://localhost:9000`
2. Login with default credentials:
   - Username: `admin`
   - Password: `admin`
3. You'll be prompted to change the password on first login

## Step 3: Create a Project and Generate Token

1. Click on "Create Project" or "Manually"
2. Enter a project key (e.g., `GestionAbs`)
3. Enter a project name (e.g., `React Redux Stagiaires App`)
4. Click "Set Up"
5. Choose "Locally"
6. Generate a token:
   - Give it a name (e.g., `my-project-token`)
   - Click "Generate"
   - **Copy and save the token** (e.g., `sqp_c067029931511aa7d7d3e42913e6fee33f60cc70`)

## Step 4: Install SonarQube Scanner

In your project directory, install the scanner as a dev dependency:

```bash
npm install --save-dev sonarqube-scanner
```

## Step 5: Create Configuration File

Create a file named `sonar-project.properties` in your project root with the following content:

```properties
sonar.projectKey=GestionAbs
sonar.projectName=React Redux Stagiaires App
sonar.projectVersion=1.0
sonar.sources=src
sonar.sourceEncoding=UTF-8
sonar.host.url=http://localhost:9000
sonar.token=YOUR_TOKEN_HERE
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.exclusions=node_modules/**,dist/**,build/**
```

Replace `YOUR_TOKEN_HERE` with the token you generated in Step 3.

## Step 6: Run the Analysis

Execute the scanner using npx:

```bash
npx sonar-scanner
```

The scan will take a few moments to complete.

## Step 7: View Results

Once the scan completes, you'll see a message with a link to your dashboard:

```
ANALYSIS SUCCESSFUL, you can find the results at: http://localhost:9000/dashboard?id=GestionAbs
```

Open that URL in your browser to view:
- **Bugs**: Code errors that should be fixed
- **Vulnerabilities**: Security issues
- **Code Smells**: Maintainability issues
- **Coverage**: Test coverage percentage (if tests are configured)
- **Duplications**: Duplicate code blocks
- **Security Hotspots**: Code that needs security review

## Troubleshooting

### Scanner not found
If you get "command not found" errors, make sure you're using `npx sonar-scanner` (not just `sonar-scanner`).

### Connection refused
Make sure your SonarQube Docker container is running:
```bash
docker ps
```

If it's not running, start it:
```bash
docker start sonarqube
```

### Authentication errors
Double-check that your token in `sonar-project.properties` matches the one generated in SonarQube.

## Optional: Add to package.json

You can add a script to your `package.json` for easier execution:

```json
"scripts": {
  "sonar": "sonar-scanner"
}
```

Then run with:
```bash
npm run sonar
```
