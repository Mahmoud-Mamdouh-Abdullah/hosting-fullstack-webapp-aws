# Deploy to AWS BS
eb init demo-app --region us-east-1 --platform node.js
eb list
eb use Demoapp-env
eb deploy