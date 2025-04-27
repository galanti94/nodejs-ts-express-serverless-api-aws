# 📚 Serverless Express API

## Description

This is a **Serverless Application** built with:
- **AWS SAM (Serverless Application Model)**
- **AWS Lambda**
- **API Gateway**
- **Express.js** using **TypeScript**
- **Esbuild** for optimized builds

The API is structured for scalable RESTful endpoints with a clean and professional architecture.

---

## 📂 Project Structure

```bash
src/
🕼️ app.ts                     # Express app initialization
🕼️ controllers/                # HTTP controllers (handle requests and responses)
├️── rootController.ts
└️── testPostController.ts
🕼️ handlers/                   # Lambda handler using serverlessExpress
└️── expressHandler.ts
🕼️ routes/                     # Route definitions
├️── index.ts
└️── testRoutes.ts
🕼️ utils/                      # Utility functions (standard responses, etc.)
└️── response.ts
```

---

## 🚀 Available Endpoints

**Base URL:**
```
https://<api-id>.execute-api.<region>.amazonaws.com/Prod/api/v1/
```

| Method | Route | Description |
|:------:|:-----:|:------------|
| GET | `/` | Returns a `Hello World!` message |
| POST | `/test-post` | Creates a test record and returns `Data created!` |

---

## 💠 Technologies Used

- **Node.js 22.x** (AWS Lambda runtime)
- **Express.js** (Lightweight web framework)
- **@vendia/serverless-express** (Adapter for running Express on Lambda)
- **TypeScript** (Strong typing)
- **AWS SAM** (Infrastructure as Code)
- **Esbuild** (Fast TypeScript transpilation and bundling)

---

## 📜 Infrastructure (`template.yaml`)

- Creates a Lambda function named **ExpressFunction**.
- Exposes the API using API Gateway with `{proxy+}` path support.
- Uses `nodejs22.x` runtime.
- Leverages `esbuild` for fast and optimized TypeScript transpilation.

---

## 📦 Running Locally

1. **Install dependencies:**

```bash
pnpm install
# or
npm install
```

2. **Build the project:**

```bash
sam build
```

3. **Start the API locally:**

```bash
sam local start-api
```

4. **Test your endpoints:**

- GET `http://127.0.0.1:3000/api/v1/`
- POST `http://127.0.0.1:3000/api/v1/test-post`

---

## 🚀 Deploying to AWS

1. Configure your AWS credentials:

```bash
aws configure
```

2. Deploy the application:

```bash
sam deploy --guided
```

During deployment, you will define:
- Stack name
- S3 bucket for artifacts
- Deployment region
- Stage name (e.g., `Dev`, `Prod`)

---

## 📈 Outputs

After deployment, the following information will be provided:

| Output | Description |
|:------:|:------------|
| `ExpressAPI` | API Gateway base URL |
| `ExpressAPIFunction` | Lambda Function ARN |
| `ExpressAPIIamRole` | IAM Role ARN for the Lambda Function |

---

## 💬 Notes

- All API routes are served under the `/Prod/api/v1/` path by default.
- The project uses a **clean separation of concerns** (`handlers`, `controllers`, `services`, `routes`) for maintainability and scalability.
- The Express app is fully adapted to AWS Lambda using `@vendia/serverless-express`.

---

## 📄 License

This project is open-source for study and educational purposes and can be freely adapted.

---

# ✅ Conclusion

This architecture offers:
- Automated and scalable deployment
- Express-based REST API running on AWS Lambda
- Ultra-fast builds using Esbuild
- Professional layered code structure
- Full serverless and infrastructure-as-code workflow