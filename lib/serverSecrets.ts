import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

export type ProjxonBackendSecrets = {
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_REDIRECT_URI: string;
  EMAIL_REFRESH_TOKEN: string;
  EMAIL_USER: string;
  JWT_SECRET: string;
  WORDPRESS_API_USERNAME?: string;
  WORDPRESS_API_PASSWORD?: string;
};

let cachedSecretsPromise: Promise<ProjxonBackendSecrets> | null = null;

function readFromEnvironment(): ProjxonBackendSecrets | null {
  const {
    EMAIL_CLIENT_ID,
    EMAIL_CLIENT_SECRET,
    EMAIL_REDIRECT_URI,
    EMAIL_REFRESH_TOKEN,
    EMAIL_USER,
    JWT_SECRET,
    WORDPRESS_API_USERNAME,
    WORDPRESS_API_PASSWORD,
  } = process.env;

  if (
    EMAIL_CLIENT_ID &&
    EMAIL_CLIENT_SECRET &&
    EMAIL_REDIRECT_URI &&
    EMAIL_REFRESH_TOKEN &&
    EMAIL_USER &&
    JWT_SECRET
  ) {
    return {
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      EMAIL_REDIRECT_URI,
      EMAIL_REFRESH_TOKEN,
      EMAIL_USER,
      JWT_SECRET,
      WORDPRESS_API_USERNAME,
      WORDPRESS_API_PASSWORD,
    };
  }

  return null;
}

async function loadSecrets(): Promise<ProjxonBackendSecrets> {
  const envSecrets = readFromEnvironment();
  if (envSecrets) return envSecrets;

  const client = new SecretsManagerClient({
    region:
      process.env.AWS_REGION ||
      process.env.AWS_DEFAULT_REGION ||
      'us-east-2',
  });

  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: process.env.PROJXON_SECRET_ID || 'projxon/backend',
    }),
  );

  if (!response.SecretString) {
    throw new Error('Projxon backend secret is empty');
  }

  const parsed = JSON.parse(response.SecretString) as Partial<ProjxonBackendSecrets>;

  const required: Array<keyof ProjxonBackendSecrets> = [
    'EMAIL_CLIENT_ID',
    'EMAIL_CLIENT_SECRET',
    'EMAIL_REDIRECT_URI',
    'EMAIL_REFRESH_TOKEN',
    'EMAIL_USER',
    'JWT_SECRET',
  ];

  for (const key of required) {
    if (!parsed[key]) {
      throw new Error(`Missing required secret: ${key}`);
    }
  }

  return parsed as ProjxonBackendSecrets;
}

export function getProjxonBackendSecrets(): Promise<ProjxonBackendSecrets> {
  if (!cachedSecretsPromise) {
    cachedSecretsPromise = loadSecrets().catch((error) => {
      cachedSecretsPromise = null;
      throw error;
    });
  }

  return cachedSecretsPromise;
}
