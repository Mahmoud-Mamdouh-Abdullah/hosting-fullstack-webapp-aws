# Deploy to AWS BS
eb init devtest10 --region us-east-1 --platform node.js
eb list
eb use Devtest10-env
eb deploy